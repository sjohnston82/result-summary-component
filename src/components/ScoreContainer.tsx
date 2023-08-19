import React from "react";
import ScoreInfo from "./ScoreInfo";

const ScoreContainer = () => {
  return (
    <div
      className="h-[50dvh] flex flex-col justify-center items-center
     bg-gradient-to-b lg:h-full lg:rounded-3xl lg:w-[50%] lg:mr-auto from-lightslateblue via-lightroyalblue to-lightroyalblue w-full rounded-b-[50px]"
    >
      <ScoreInfo />
    </div>
  );
};

export default ScoreContainer;
