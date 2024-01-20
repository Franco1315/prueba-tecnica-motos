import React, { useEffect, useState } from 'react';

const ProgressBar = ({ contenidoBarra, progress }) => {
  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-md italic font-semibold inline-block text-white">
            {contenidoBarra}
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="fixed-width-bar bg-gray-600 h-0.5 w-40 flex items-center mr-2">
          <div
            style={{ width: `${progress}%` }}
            className="bg-white h-full"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
