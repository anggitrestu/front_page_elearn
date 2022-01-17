import React from 'react';
import IconStudent from 'public/images/icon-detail-student.svg';
import IconVideo from 'public/images/icon-detail-video.svg';
import IconLevel from 'public/images/icon-detail-level.svg';
import IconType from 'public/images/icon-detail-premium.svg';

export default function FeatureDetail({ data }) {
  return (
    <>
      <div className="absolute mx-24 bottom-0 left-0 pl-20 mb-5 flex justify-items-start">
        <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 bg-opacity-20 w-max">
          <IconStudent style={{ height: 34, width: 34 }}></IconStudent>
          <h2 className="ml-3 text-sm font-medium text-white ">
            {data?.totalStudent ?? '0'}
            {'  '}Students
          </h2>
        </div>
        <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 bg-opacity-20 w-max ml-3">
          <IconVideo style={{ height: 34, width: 34 }}></IconVideo>
          <h2 className="ml-3 text-sm font-medium text-white ">
            {data?.totalVideos ?? '0'}
            {'  '}Videos
          </h2>
        </div>
        <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 bg-opacity-20 w-max ml-3">
          <IconLevel style={{ height: 34, width: 34 }}></IconLevel>
          <h2 className="ml-3 text-sm font-medium text-white ">
            {data?.level ?? '0'}
          </h2>
        </div>
        <div className="flex items-center pl-2 pr-5 py-1 bg-gray-300 rounded-full mb-2 bg-opacity-20 w-max ml-3">
          <IconType style={{ height: 34, width: 34 }}></IconType>
          <h2 className="ml-3 text-sm font-medium text-white ">
            {data?.type ?? '0'}
          </h2>
        </div>
      </div>
    </>
  );
}
