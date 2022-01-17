import React from 'react';
import IconPinned from 'public/images/icon-pinned.svg';
import Link from 'next/link';
import RenderItem from './RenderItem';
import IconBusiness from 'public/images/icon-business.svg';
import IconContentWriter from 'public/images/icon-writer.svg';
import IconGameDevelopment from 'public/images/icon-game.svg';
import IconTravelGuidance from 'public/images/icon-travel.svg';
import IconBaking from 'public/images/icon-baking.svg';
import IconPhotography from 'public/images/icon-photo.svg';
import IconSosmed from 'public/images/icon-sosmed.svg';
import IconSoftskills from 'public/images/icon-softskill.svg';
export default function index() {
  const data = [
    {
      imageName: <IconBusiness />,
      name: 'Business Development',
      description:
        'Learn about the ideas, initiatives, and activities that help business better.',
      total: 65,
    },
    {
      imageName: <IconContentWriter />,
      name: 'Content Writter',
      description: 'Learn beacome a content writer that unserstanding SEO.',
      total: 65,
    },
    {
      imageName: <IconGameDevelopment />,
      name: 'Game Development',
      description:
        'Learn how to make Your own game with easy step as a beginner.',
      total: 65,
    },
    {
      imageName: <IconTravelGuidance />,
      name: 'Travel Guidance',
      description:
        'Learn about all things to make you worthy as travel guidance.',
      total: 65,
    },
    {
      imageName: <IconBaking />,
      name: 'Baking & Cooking',
      description: 'Learn how to bake and cooking like a pro.',
      total: 120,
    },
    {
      imageName: <IconPhotography />,
      name: 'Videography & Photography',
      description: 'Learn how to take a nice video and photo.',
      total: 65,
    },
    {
      imageName: <IconSosmed />,
      name: 'Social Media Marketing',
      description: 'Learn how to growth the business through social media.',
      total: 65,
    },
    {
      imageName: <IconSoftskills />,
      name: 'Deepening Softskills',
      description: 'Learn how to incerease your softskills quality.',
      total: 65,
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <div className="flex items-center pl-2 pr-5 py-3 bg-gray-300 rounded-full mb-2 w-44">
            <IconPinned style={{ height: 34, width: 34 }}></IconPinned>
            <h2 className="ml-3 text-sm font-bold text-font">Categories </h2>
          </div>
          <h2 className="text-3xl font-bold  mb-1">
            Explore <span className="text-primary ">Something</span>{' '}
          </h2>
          <p className="font-sm text-font opacity-60">
            Find your new skillsets and start to learn it.
          </p>
        </div>
      </div>

      <div className="justify-start flex flex-wrap items-centers mt-6 -mx-3">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center py-12">No Item Found</div>
        )}
      </div>
    </>
  );
}
