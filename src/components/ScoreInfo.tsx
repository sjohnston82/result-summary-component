import React from "react";

const ScoreInfo = () => {
  return (
    <div className="flex flex-col items-center justify-around h-full py-4 w-full">
      <h3 className="text-paleblue opacity-80 text-[22px]">Your Result</h3>
      <div className="rounded-full h-[140px] w-[140px] flex flex-col justify-center items-center gap-0 bg-gradient-to-b from-violet to-persianblue ">
        <p className="text-white -mb-5 font-extrabold text-[3.5rem]">76</p>
        <p className="mt-2 text-paleblue opacity-60">of 100</p>
      </div>
      <div className="flex flex-col items-center gap-4 pb-4">
        <h2 className="text-white text-2xl">Great</h2>
        <p className="text-paleblue lg:text-center lg:px-14 opacity-80 text-[16px] lg:leading-tight lg:text-[18px] px-14 font-medium">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default ScoreInfo;
