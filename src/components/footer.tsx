import {
  ArrowRight,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import footer from "./../assets/footer.png";
import logo from "./../assets/logo.png";

export default function Footer() {
  return (
    <div
      className="hero h-full bg-cover p-10 lg:p-20 lg:grid lg:grid-cols-2 "
      style={{ backgroundImage: `url(./src/assets/footer.png)` }}
    >
      <div className=" lg:flex lg:flex-col items-start text-white space-y-10">
        <p className=" lg:text-3xl xl:text-5xl font-bold ">GET IN TOUCH</p>
        <img src={logo} width={170} />
        <div className=" flex flex-col space-y-4 text-1xl md:font-semibold">
          <div className="flex   flex-row space-x-4">
            <Phone />
            <p>+25192222222</p>
          </div>

          <div className="flex  flex-row space-x-4">
            <Mail />
            <p>info@wiirtuuconstruction.com</p>
          </div>

          <div className=" flex flex-row space-x-4">
            <MapPin />
            <p className=" w-[290px]">
              Sarbet, Mechare Noc Bldg 1st Floor Addis Ababa, Ethiopia
            </p>
          </div>
        </div>

        <div className=" flex flex-row space-x-8">
          <Linkedin />
          <Facebook />
          <Twitter />
        </div>
         <div className=" w-full h-[2px] lg:h-0  bg-white"/>
      </div>

     
      <div className=" text-white mt-3 flex flex-col space-y-5 ">
        <p className="  text-1xl font-medium t">
          Let's begin turning your construction Vision into reality whether you
          have questions want to discuss a project or need expert advice our
          team is here to listen and assist you we believe in open communication
          and buildings strong connections with our clients reach out to us and
          together we will create spaces that exceed your expectation
        </p>

        <input
          type="text"
          className=" bg-transparent border-none"
          placeholder="Your full name"
        />

        <input
          type="text"
          className=" bg-transparent border-none"
          placeholder="Your email"
        />
        <input
          type="text"
          className=" bg-transparent border-none"
          placeholder="Your message"
        />

        <div className=" flex flex-row bg-white text-slate-900 w-40 py-3 rounded-lg space-x-4 justify-center">
          Send
          <ArrowRight />
        </div>
      </div>
    </div>
  );
}
