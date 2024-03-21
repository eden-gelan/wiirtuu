import Image from "./../assets/whyChooseUs.png";

export default function WhyChooseUs() {
  return (
    <div className=" p-10 xl:p-20 2xl:px-40 relative">
      <h1 className=" font-bold text-3xl xl:text-4xl pb-10"> WHY CHOOSE US</h1>
      <div className=" flex flex-col xl:flex-row">
        <img src={Image} />
        <div className=" flex-col text-1xl font-medium">
          <p className="pt-5 ">
            
            Since achieving any long-term goal or objective requires careful
            selection of a competent firm, this company has been created with,
            promising potential, and credibility to be taken into consideration
            for carrying out infrastructure development or construction
            projects. We Are :
          </p>
          <ul className=" pl-10 pb-5 list-disc ">
            <li>Experienced Team of Engineers</li>
            <li>Using Latest equipment in the Construction Industry</li>
            <li>Work as per Quality Standards</li>
            <li>Timely Deliverables</li>
          </ul>
        </div>
      </div>

      <div className=" bg-whychooseus flex md:flex-row flex-col gap-20 py-10  px-20 xl:absolute xl:top-[560px] left-60 justify-between items-center">
        <div className=" flex flex-col text-whychooseusText   items-center ">
            <p className=" lg:text-4xl text-2xl font-extrabold"> 15+</p>
            <p>YEARS OF EXPERIANE</p>
        </div>
        <div className=" bg-gray-500 md:w-[1px] md:h-[100px] my-4 w-full h-[2px]"/>
        <div className=" flex flex-col text-whychooseusText  items-center">
            <p className="lg:text-4xl  text-2xl font-extrabold "> 30+</p>
            <p>PROJECTS COMPLETED</p>
        </div>
        <div className=" bg-gray-500 md:w-[1px] md:h-[100px] my-4 w-full h-[2px]"/>
        <div className=" flex flex-col text-whychooseusText   items-center">
            <p className="lg:text-4xl text-2xl font-extrabold"> 10+</p>
            <p>CITIES PRECENCE</p>
        </div>

      </div>
    </div>
  );
}
