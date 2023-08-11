import React from "react";
import ScoreInfo from "./ScoreInfo";


const ScoreContainer = () => {
  return (
    <div className="h-[50dvh] flex flex-col justify-center items-center bg-gradient-to-b from-lightslateblue to-lightroyalblue w-full rounded-b-[50px]">
      <ScoreInfo />
      
    </div>
  );
};

export default ScoreContainer;
