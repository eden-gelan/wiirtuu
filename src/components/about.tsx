import AboutBackground from "./../assets/background2.png";
import AboutImage from "./../assets/whoWeAre.png";
import { MoveRight } from "lucide-react";
import Mission from "./../assets/icon1.png";
import Value from "./../assets/icon3.png";
import Vision from "./../assets/icon2.png";
import "./../App.css";
export default function About() {
  return (
    <div className=" ">
      <div className=" py-20  px-10 md:px-20 xl:px-40 2xl:px-60">
        <div className=" flex flex-row justify-center space-x-5 relative ">
          <img src={AboutImage} className=" w-[250px] md:h-[400px] lg:h-[400px] h-[200px] "/>
          <div className=" flex flex-col  ">
            <div className="absolute top-0 left-[100px] sm:left-[130px] custom:left-[230px] lg:left-[208px] md:left-[203px] xl:left-[190px] gap-6 flex flex-row ">
              <div className=" text-2xl xl:text-4xl font-bold  text-white "> WE </div>

              <div className=" text-2xl xl:text-4xl font-bold">ARE</div>
            </div>
            <div className=" space-y-2 pt-8 xl:pt-10">
              <div className=" text-2xl xl:text-4xl font-bold"> MORE THAN JUST</div>
              <div className=" text-2xl  xl:text-4xl font-bold"> BUILDERS</div>
              <div className="hidden md:flex">
                Wiirtuu Construction Plc has been providing the construction
                industry with a special service. It has grown into a respectable
                company whose industry-serving inventiveness, experience, and
                skills are at the disposal of the sector. Since it is a new
                company that only focuses on general construction, it will
                strive to build credibility and a solid reputation via the
                calibre of its work and its dedication to meeting tight
                deadlines.
              </div>
              <div className=" flex flex-row">
              <div> Read more</div>
              <MoveRight />
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:px-40 lg:px-10 lg:grid-cols-2 p-10 mt-20 space-y-40 md:space-y-0 md:p-10 md:gap-40 xl:grid-cols-3 xl:gap-10 xl:px-20">
        <Item
          title="Mission"
          subTitle="To uphold safety, integrity, and uniformity in our working methods in
      order to enhance the calibre of construction work. By introducing the
      newest technologies available, we aim to provide the best construction
      work possible."
          img={Mission}
        />
        <Item
          title="Vision"
          subTitle="We aspire to be among the top Engineering, Procurement and
          Construction (EPC) companies of our country by undertaking the
          remarkable and challenging construction projects. We want to be the
          preferred contracting company when it comes to industrial and
          residential projects."
          img={Vision}
        />
        <Item
          title="Value"
          subTitle=" Quality: Maintain the quality of work on the field and even in office premises. Quality of work is the key to success and more opportunities.
          Timeliness: Deliver the work on or before the committed time. Valuing a client's time will always bring glory to the company which will ultimately help to acquire more valuable projects.
          Opportunities: Create opportunities for the employees. We will grow in this domain by the teamwork of our employees. Keep a rewarding attitude towards the employees of this company.
           "
          img={Value}
        />
      </div>
    </div>
  );
}

const Item = ({
  title,
  subTitle,
  img,
}: {
  title: string;
  subTitle: string;
  img: any;
}) => {
  return (
    <div className=" flex flex-col  items-center space-y-5 relative h-[500px] xl:h-[530px]  border border-2">
      <div className="A absolute -top-[100px] bg-white px-8">
        <img src={img} className=" w-[80px] lg:w-[100px] object-cover" />
        <div className=" text-3xl font-bold"> {title}</div>
      </div>
      <div className="  p-5 pt-8">{subTitle}</div>
    </div>
  );
};
