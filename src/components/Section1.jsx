import React from 'react';

const Section1 = () => {
  const content = {
    id: 'section-0',
    headings: [
      {
        level: 'h1',
        text: 'Injury Lawyers',
      },
    ],
    paragraphs: [
      'Injury LawyersInjury LawyersInjury Lawyers',
      'We are dedicated to ensuring that you and your loved ones can rest easily knowing that we are here to help.',
      '* ![Salt Lake City](https://img1.wsimg.com/isteam/ip/e30f7800-99db-4fbf-91ba-68cb2380f171/16.jpg/:/cr=t:0%25,l:0%25,w:99.7%25,h:99.7%25/rs=w:95,h:68,cg:true,m/cr=w:95,h:68,ax:50%25,ay:50%25)',
      '* ![Salt Lake City](https://img1.wsimg.com/isteam/ip/e30f7800-99db-4fbf-91ba-68cb2380f171/13.jpg/:/cr=t:5.55%25,l:0%25,w:88.91%25,h:88.91%25/rs=w:95,h:68,cg:true,m/cr=w:95,h:68,ax:50%25,ay:50%25)',
      '* ![Salt Lake City](https://img1.wsimg.com/isteam/ip/e30f7800-99db-4fbf-91ba-68cb2380f171/9.jpg/:/rs=w:95,h:68,cg:true,m/cr=w:95,h:68,ax:50%25,ay:50%25)',
      '* ![Salt Lake City](https://img1.wsimg.com/isteam/ip/e30f7800-99db-4fbf-91ba-68cb2380f171/saltlakecity1-c197977.jpg/:/rs=w:95,h:68,cg:true,m/cr=w:95,h:68,ax:50%25,ay:50%25)',
      '* ![Salt Lake City](https://img1.wsimg.com/isteam/ip/e30f7800-99db-4fbf-91ba-68cb2380f171/8.jpg/:/rs=w:95,h:68,cg:true,m/cr=w:95,h:68,ax:50%25,ay:50%25)',
      '* ![Salt Lake City](https://img1.wsimg.com/isteam/ip/e30f7800-99db-4fbf-91ba-68cb2380f171/7.jpg/:/rs=w:95,h:68,cg:true,m/cr=w:95,h:68,ax:50%25,ay:50%25)',
    ],
    images: [],
    buttons: [
      {
        text: 'Schedule a Free Consultation',
        href: 'https://larsonlawutah.com/contact',
      },
      {
        text: 'Phone: (801) 601-8323',
        href: 'tel:+18016018323',
      },
    ],
    html: '',
    availableImages: [],
  };

  return (
    <section className="bg-gray-100 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h1 className="text-4xl font-bold text-blue-600 sm:text-5xl lg:text-6xl">
              {content.headings[0].text}
            </h1>
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <p className="text-base text-gray-700 sm:text-lg lg:text-xl">
              {content.paragraphs[0]}
            </p>
            <p className="mt-4 text-base text-gray-700 sm:text-lg lg:text-xl">
              {content.paragraphs[1]}
            </p>
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <img
              src={content.paragraphs[2].split('(')[1].split(')')[0]}
              alt="Salt Lake City"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <img
              src={content.paragraphs[3].split('(')[1].split(')')[0]}
              alt="Salt Lake City"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <img
              src={content.paragraphs[4].split('(')[1].split(')')[0]}
              alt="Salt Lake City"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <img
              src={content.paragraphs[5].split('(')[1].split(')')[0]}
              alt="Salt Lake City"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <img
              src={content.paragraphs[6].split('(')[1].split(')')[0]}
              alt="Salt Lake City"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 lg:col-span-1">
            <img
              src={content.paragraphs[7].split('(')[1].split(')')[0]}
              alt="Salt Lake City"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 mt-8 flex justify-center space-x-4">
            <a
              href={content.buttons[0].href}
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {content.buttons[0].text}
            </a>
            <a
              href={content.buttons[1].href}
              className="inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              {content.buttons[1].text}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;