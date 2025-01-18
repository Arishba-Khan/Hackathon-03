import Image from 'next/image';
import React from 'react';
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* head */}
      <div className="flex justify-center items-center w-full max-w-[1225px] mx-auto h-[58px] bg-[#F5F5F5] text-black">
        <div className="h-[44px] flex flex-col justify-center items-center w-full">
          <h3 className="font-medium text-sm text-center">Hello Nike App</h3>
          <div>
            <p className="text-[12px] font-normal mb-1 mt-1 text-center">
              Download the app to access everything Nike.
              <span className="font-medium underline ml-1">Get Your Great</span>
            </p>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="flex justify-center items-center px-4">
        <Image
          src="/assests/hero.png"
          alt="shoes"
          width={1150}
          height={700}
          className="w-full max-w-[1150px] h-auto"
        />
      </div>

      <div className="flex justify-center items-center flex-col p-10">
                <p className="text-sm">First Look</p>
                <h2 className=" text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
                <p  className="text-sm leading-5 w-[60%] pt-3 pb-2 text-center">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                —designed to push you past your limits and help you go to the max.
           
                </p>
                <div className="flex justify-center items-center gap-3"><Button>Notify Me</Button>
                <Button>Shop Air Max</Button></div>
            </div>
    </div>
  );
}
