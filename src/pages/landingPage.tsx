
import "../App.css";
import HeroSection from "../components/hero";
import About from "../components/about";
import Service from "../components/service";
import WhyChooseUs from "../components/whyChooseUs";
import Partner from "../components/partner";
import Projects from "../components/projects";
import Team from "../components/team";
import Footer from '../components/footer'
import CopyWrite from "../components/copyWrite";


export default function LandingPage() {
    return(
       <div className="  ">
         <HeroSection/>
         <About/>
         <Service/>
         <WhyChooseUs/>
         <Partner/>
         <Projects/>
         <Team/>
          <Footer/>
      <CopyWrite/>
       </div>
    )
}