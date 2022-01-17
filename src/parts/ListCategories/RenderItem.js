import React from 'react';
import Link from 'next/link';
import IconArrow from 'public/images/icon-arrow.svg';

export default function RenderItem({ item }) {
  return (
    <>
      <div className="w-1/4 mb-8 relative cardd">
        <div
          className="card bg-white text-left py-3 px-6 rounded-3xl mx-3 min-h-full relative shadow-lg border"
          style={{ minHeight: 280 }}
        >
          {item.imageName}
          <h4 className="text-l  mt-3 text-font font-bold transition-all duration-200 ">
            {item.name}
          </h4>
          <p className="text-sm mt-3 mb-10 text-font opacity-60 font-medium">
            {item.description}
          </p>
          <h5 className="cardd text-sm mb-3 text-primary transition-all mt-2 duration-200 absolute bottom-0 ">
            <Link href="#">
              <a className="flex   items-center justify-between">
                {item.total} Courses
                <IconArrow className="ml-24" />
              </a>
            </Link>
          </h5>
        </div>
      </div>
    </>
  );
}
