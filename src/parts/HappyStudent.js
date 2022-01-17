import React from 'react';

export default function HappyStudent({ data }) {
  return (
    <div className="w-1/4 mx-3 mt-3 bg-white rounded-2xl py-3 px-4">
      <p className="text-font opacity-60 mt-1">
        {data?.note ?? "Student's response"}
      </p>
      <div className="flex items-centermt-4">
        <div className="w-14 rounded-full overflow-hidden">
          <img
            src={data?.users?.avatar ?? ''}
            alt={data?.users?.name ?? "User's Name"}
            className="object-cover"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-lg text-font">
            {data?.users?.name ?? "Student's Name"}
          </h2>
          <h3 className="text-sm text-font opacity-60">
            {data?.users?.role ?? "Student's Role"}
          </h3>
        </div>
      </div>
    </div>
  );
}
