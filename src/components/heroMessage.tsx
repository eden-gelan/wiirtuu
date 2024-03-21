import { ChevronRight } from "lucide-react";

export default function HeroMessage() {
  return (
    <div className="  text-white mx-auto sm:px-10 lg:px-40 xl:px-20 py-20 space-y-4  ">
      <p className=" lg:text-7xl text-2xl font-bold "> WHERE</p>
      <p className=" flex lg:text-7xl text-2xl font-bold xl:justify-end "> YOUR PROJECT</p>
      <p className=" flex lg:text-7xl text-2xl font-bold xl:justify-center"> IS OUR</p>
      <p className=" lg:text-7xl text-2xl font-bold relative overflow-hidden">
        <span className="absolute text-2xl -inset-0 -z-1 text-transparent stroke-white stroke-2">
          PRIORITY CONSTRUCTION
        </span>
        PRIORITY CONSTRUCTION
      </p>
      <p className=" xl:text-2xl  ">
        Located in Oromia, Ethiopia, Wiirtuu Construction plc is a renowned
        contracting company. Since its founding in 2009, EC has worked to
        establish itself as a civil engineering and construction firm that
        prioritises project delivery timeliness and quality.
      </p>
      <div className=" py-10"/>
      <div className="flex justify-end">
        <div className=" bg-primary flex flex-row px-4 py-3 rounded-lg justify-center items-center  ">
          <p>CALL US</p>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}
