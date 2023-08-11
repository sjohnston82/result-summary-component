import Image from 'next/image'
import React from 'react'
import ReactionIcon from '../../public/icon-reaction.svg'

const Summary = () => {
  return (
    <div className="px-8 h-full flex flex-col justify-around">
      <h2 className="">Summary</h2>
      <div className="flex flex-col">
        <div className="flex justify-between bg-lightreda p-3 rounded-lg text-lightred">
          <div className="flex gap-2">
            <Image
              src={ReactionIcon}
              width={25}
              height={25}
              alt="Reaction icon"
            />
            <p className="">Reaction</p>
          </div>
          <div className="">
            <p className="text-black">80 <span className="text-gray-400">/ 100</span></p>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default Summary