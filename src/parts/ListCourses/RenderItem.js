import React from 'react';
import Link from 'next/link';
import IconPlay from 'public/images/icon-play.svg';

export default function RenderItem({ item }) {
  return (
    <>
      <div className="w-1/4">
        <div className="py-4 px-4 mb-6 bg-white mx-2 rounded-3xl">
          <div className="item relative  ">
            <figure className="item-image">
              <IconPlay></IconPlay>
              <img
                style={{ maxHeight: 204 }}
                src={item?.thumbnail ?? ''}
                alt={item?.name ?? 'Some Information'}
              />
            </figure>
            <div className="item-meta">
              <h4 className="text-lg text-font font-bold mt-2">
                {item?.name ?? 'course name'}
              </h4>
              <h5 className="text-sm text-gray-500 font-medium">
                {item?.level ?? 'Course Level'}
              </h5>
              <Link href="/courses/[id]" as={`/courses/${item.id}`}>
                <a className="link-wrapped"></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
