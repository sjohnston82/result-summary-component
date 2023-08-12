import Image from 'next/image'
import React from 'react'
import ReactionIcon from '../../public/icon-reaction.svg'
import MemoryIcon from '../../public/icon-memory.svg'
import VerbalIcon from '../../public/icon-verbal.svg'
import VisualIcon from '../../public/icon-visual.svg'


const Summary = () => {
  return (
    <div className="px-8 h-full flex flex-col justify-around lg:py-8 lg:w-3/5">
      <h2 className="mt-6 text-xl">Summary</h2>
      <div className="flex flex-col gap-5 mt-6">

        <div className="flex justify-between bg-lightreda p-3 rounded-lg text-lightred">
          <div className="flex gap-2">
            <Image
              src={ReactionIcon}
              width={25}
              height={25}
              alt="Reaction icon"
            />
            <p className="opacity-70">Reaction</p>
          </div>
          <div className="">
            <p className="text-black">
              80 <span className="opacity-30">/ 100</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between bg-orangeyyellowa p-3 rounded-lg text-lightred">
          <div className="flex gap-2">
            <Image
              src={MemoryIcon}
              width={25}
              height={25}
              alt="Memory icon"
            />
            <p className="text-orangeyyellow opacity-">Memory</p>
          </div>
          <div className="">
            <p className="text-black">
              92 <span className="opacity-30">/ 100</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between bg-greenteala p-3 rounded-lg text-lightred">
          <div className="flex gap-2">
            <Image
              src={VerbalIcon}
              width={25}
              height={25}
              alt="Verbal icon"
            />
            <p className="text-greenteal ">Verbal</p>
          </div>
          <div className="">
            <p className="text-black">
              61 <span className="opacity-30 ">/ 100</span>
            </p>
          </div>
        </div>

        <div className="flex justify-between bg-cobaltbluea p-3 rounded-lg text-lightred">
          <div className="flex gap-2">
            <Image
              src={VisualIcon}
              width={25}
              height={25}
              alt="Visual icon"
            />
            <p className="text-cobaltblue opacity-80">Visual</p>
          </div>
          <div className="">
            <p className="text-black">
              72 <span className="opacity-30">/ 100</span>
            </p>
          </div>
        </div>
        <button className="w-full bg-darkgrayblue text-white py-3 rounded-full mb-8 hover:bg-lightroyalblue">Continue</button>
      </div>
    </div>
  );
}

export default Summary