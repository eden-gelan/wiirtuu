import { ArrowLeft, ArrowRight } from "lucide-react";
import Team1 from "./../assets/team1.png";
import Team2 from "./../assets/team2.png";

export default function Team() {
  return (
    <div className=" bg-blueBg w-full px-5 mt-20 text-white">
      <div className=" flex flex-row justify-between">
        <div className=" flex flex-col py-5 justify-between">
          <p className=" lg:text-4xl text-1xl font-bold"> OUR TEAM</p>
          <div className=" flex flex-row space-x-2">
            <ArrowLeft />
            <ArrowRight />
          </div>
        </div>

        <div className=" grid grid-cols-2 ">
          <img src={Team1} width={200} height={200} />
          <div className=" bg-blueBgLight relative p-5">
            <div className=" flex flex-col  text-white absolute right-0 bottom-0 items-end p-5 text-1xl md:font-bold">
              <p> Geleta</p>
              <p>Bedesa</p>
              <p>CEO and project manager</p>
            </div>
          </div>
          <div className=" bg-blueBgLight relative p-5">
            <div className=" flex flex-col  text-white absolute left-0 top-0 items-start p-5 text-1xl md:font-bold">
              <p> Geleta</p>
              <p>Bedesa</p>
              <p>CEO and project manager</p>
            </div>
          </div>
          <img src={Team2} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
