#!/usr/bin/env python3
"""
Recursive web scraper for larsonlawutah.com using Crawl4AI
"""

import asyncio
import json
import os
from urllib.parse import urljoin, urlparse
from crawl4ai import AsyncWebCrawler
from crawl4ai.extraction_strategy import LLMExtractionStrategy
import re

class LarsonLawScraper:
    def __init__(self, base_url="https://larsonlawutah.com"):
        self.base_url = base_url
        self.domain = urlparse(base_url).netloc
        self.visited_urls = set()
        self.scraped_data = {}
        self.max_depth = 3  # Limit recursion depth
        
    def is_valid_url(self, url):
        """Check if URL is valid and belongs to the target domain"""
        parsed = urlparse(url)
        return (
            parsed.netloc == self.domain and
            not any(ext in url.lower() for ext in ['.pdf', '.jpg', '.png', '.gif', '.css', '.js']) and
            '#' not in url and
            'mailto:' not in url
        )
    
    def extract_links(self, html_content, current_url):
        """Extract all internal links from HTML content"""
        links = set()
        # Simple regex to find href attributes
        href_pattern = r'href=["\']([^"\']+)["\']'
        matches = re.findall(href_pattern, html_content, re.IGNORECASE)
        
        for match in matches:
            absolute_url = urljoin(current_url, match)
            if self.is_valid_url(absolute_url):
                links.add(absolute_url)
        
        return links
    
    async def scrape_page(self, crawler, url, depth=0):
        """Scrape a single page and extract content"""
        if url in self.visited_urls or depth > self.max_depth:
            return
        
        self.visited_urls.add(url)
        print(f"Scraping (depth {depth}): {url}")
        
        try:
            result = await crawler.arun(
                url=url,
                word_count_threshold=10,
                extraction_strategy=LLMExtractionStrategy(
                    provider="ollama/llama2",  # Use local model if available
                    api_token="no-token-needed",
                    instruction="Extract and structure the main content, including headings, text, contact information, services, and any important details about this law firm page."
                ),
                bypass_cache=True,
                js_code="window.scrollTo(0, document.body.scrollHeight);",
                wait_for=2
            )
            
            if result.success:
                # Store the scraped data
                self.scraped_data[url] = {
                    'title': result.metadata.get('title', ''),
                    'description': result.metadata.get('description', ''),
                    'content': result.markdown,
                    'extracted_content': result.extracted_content,
                    'links': list(result.links.get('internal', [])),
                    'depth': depth,
                    'word_count': len(result.markdown.split()) if result.markdown else 0
                }
                
                # Extract links for recursive crawling
                if depth < self.max_depth:
                    links = self.extract_links(result.html, url)
                    
                    # Crawl found links recursively
                    tasks = []
                    for link in links:
                        if link not in self.visited_urls:
                            tasks.append(self.scrape_page(crawler, link, depth + 1))
                    
                    if tasks:
                        await asyncio.gather(*tasks, return_exceptions=True)
                        
            else:
                print(f"Failed to scrape {url}: {result.error_message}")
                
        except Exception as e:
            print(f"Error scraping {url}: {str(e)}")
    
    async def run_crawler(self):
        """Main crawler execution"""
        async with AsyncWebCrawler(verbose=True) as crawler:
            await self.scrape_page(crawler, self.base_url)
    
    def save_results(self, output_dir="scraped_data"):
        """Save scraped data to files"""
        os.makedirs(output_dir, exist_ok=True)
        
        # Save complete dataset as JSON
        with open(f"{output_dir}/larson_law_complete.json", 'w', encoding='utf-8') as f:
            json.dump(self.scraped_data, f, indent=2, ensure_ascii=False)
        
        # Save individual pages
        for url, data in self.scraped_data.items():
            filename = url.replace('https://', '').replace('http://', '').replace('/', '_').replace(':', '_')
            filename = re.sub(r'[<>:"/\\|?*]', '_', filename)
            
            # Save markdown content
            with open(f"{output_dir}/{filename}.md", 'w', encoding='utf-8') as f:
                f.write(f"# {data.get('title', 'No Title')}\n\n")
                f.write(f"**URL:** {url}\n\n")
                f.write(f"**Description:** {data.get('description', 'No description')}\n\n")
                f.write(f"**Word Count:** {data.get('word_count', 0)}\n\n")
                f.write("## Content\n\n")
                f.write(data.get('content', ''))
                
                if data.get('extracted_content'):
                    f.write("\n\n## Extracted Structured Content\n\n")
                    f.write(str(data.get('extracted_content', '')))
        
        print(f"\nScraping complete! Results saved to '{output_dir}' directory")
        print(f"Total pages scraped: {len(self.scraped_data)}")
        print(f"URLs found: {list(self.scraped_data.keys())}")

async def main():
    """Main execution function"""
    scraper = LarsonLawScraper()
    
    print("Starting recursive crawl of larsonlawutah.com...")
    await scraper.run_crawler()
    
    print("\nSaving results...")
    scraper.save_results()

if __name__ == "__main__":
    asyncio.run(main())