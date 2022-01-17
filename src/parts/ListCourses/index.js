import React from 'react';
import IconLonceng from 'public/images/icon-lonceng.svg';
import Link from 'next/link';
import RenderItem from './RenderItem';
export default function index({ data }) {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-auto">
          <div className="flex items-center pl-2 pr-5 py-3 bg-gray-300 rounded-full mb-2 w-44">
            <IconLonceng style={{ height: 34, width: 34 }}></IconLonceng>
            <h2 className="ml-3 text-sm font-bold text-font">New Classes </h2>
          </div>
          <h2 className="text-3xl font-bold  mb-1">
            Summer <span className="text-primary ">Productive</span>{' '}
          </h2>
          <p className="font-sm text-font opacity-60">
            Learning lot of new things during summer vacation.
          </p>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="px-6 py-3 bg-gray-300 rounded-full text-sm font-bold text-font hover:underline hover:bg-gray-400 ">
              All Courses
            </a>
          </Link>
        </div>
      </div>
      <div className="justify-start flex flex-wrap items-centers  -mx-4 mt-6">
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
