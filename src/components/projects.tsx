import { ProjectsData } from "../model/projects";
import project1 from "./../assets/project1.png";
import project2 from "./../assets/project2.png";
import project3 from "./../assets/project4.png";
import project4 from "./../assets/project3.png";

export default function Projects() {
  return (
    <div className="xl:mx-40 mx-10 my-10 max-h-full ">
      <p className="lg:text-4xl text-2xl mb-10 font-bold">RECENT PROJECTS</p>
      <div className=" ml-10  space-y-5 md:grid md:grid-cols-2 lg:gap-5 relative">
        <div className="   flex flex-col  space-y-5 justify-center">
          <img src={project1} className=" w-[300px] lg:w-[500px] " />
          <img src={project2} className=" w-[300px] lg:w-[500px] " />
        </div>
        <div className=" space-y-5 -top-5">
          <img src={project4} className=" w-[300px] lg:w-[500px] " />

          <img src={project3} className=" w-[300px] lg:w-[500px] " />
        </div>
      </div>
    </div>
  );
}
