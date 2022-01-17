import React from 'react';
import IconDescription from 'public/images/icon-detail-description.svg';

export default function Description({ data }) {
  return (
    <>
      <section className="container mx-auto pt-24 ">
        <div className="mx-20">
          <div className="w-auto">
            <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 w-44">
              <IconDescription
                style={{ height: 34, width: 34 }}
              ></IconDescription>
              <h2 className="ml-3 text-sm font-bold text-font">Description </h2>
            </div>
            <h2 className="text-3xl font-bold  mb-1">
              About <span className="text-primary ">Classes</span>{' '}
            </h2>
            <p className="font-sm text-font opacity-60">
              The basic that you should know about this course.
            </p>
          </div>
          <div className=" mt-10 ">
            <p className="text-font text-lg leading-relaxed mb-3">
              {data?.description ?? 'No Description Found'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
