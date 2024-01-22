const ProgressBar = ({ contenidoBarra, progress }) => {
  return (
    <div className="relative pt-1">

      <div className="flex mb-2 items-center justify-between">

        <div>
          <h1 className="text-md italic font-semibold inline-block text-white select-none">
            {contenidoBarra}
          </h1>
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
