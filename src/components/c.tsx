import { ArrowLeft, ArrowRight } from "lucide-react";
import { Services } from "./../model/service";
export default function Categories() {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider?.scrollLeft) slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    console.log(slider?.scrollLeft);
    if (typeof slider?.scrollLeft === "number" && slider?.scrollLeft >= 0) {
      slider.scrollLeft = slider.scrollLeft + 500;
    }
  };

  return (
    <div className="  text-[1.5rem]   mt-10">
      <div className=" flex flex-row justify-between ">
        {
          <div
            id="slider"
            className=" overflow-hidden whitespace-nowrap scroll-smooth"
          >
            {Services?.map((Service: any, i: number) => {
              return (
                <div
                  key={i}
                  className=" inline-flex  flex-col px-4  cursor-pointer"
                >
                  <img
                    className="rounded-3xs  h-[180px] object-cover w-[300px] bg-red-500"
                    alt=""
                    src={Service.image}
                  />
                  <div className=" w-[300px] items-start p-10 bg-blueBg ">
                    <div className=""> {Service.title}</div>
                    {/* <div className="  w-[10px] h-[300px] bg-blue-300"> {Service.description}</div> */}
                  </div>
                </div>
              );
            })}
          </div>
        }
        <div className=" flex flex-col justify-between">
          <div className=" text-white font-semibold text-2xl ">1/11</div>
          <div className="space-x-4 flex items-center cursor-pointer">
            <span onClick={slideLeft} className="p-1 border-primary border rounded-full">
              <ArrowLeft className=" text-primary" />
            </span>
            <span onClick={slideRight} className="p-1 rounded-full">
              <ArrowRight className="text-white" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
