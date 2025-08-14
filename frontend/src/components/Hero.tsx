
import TiltedCard from "../components/TiltedCard";
import { LiaGithub, LiaInstagram, LiaLinkedin, LiaTwitter } from 'react-icons/lia';
import StarBorder from '../components/StarBorder'
  

const Hero = () => {

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-4 py-8">
      {/* Text Section */}
      <div className="flex flex-col text-center md:text-left gap-4 md:max-w-[60%]">
        <h1 className="text-white entry_animation font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm Nikhil 👋🏼
        </h1>
        <p className="text-white entry_animation text-base sm:text-lg md:text-xl">
          Software Engineer. I love building things and helping people. Very active on LinkedIn.
        </p>
        <div className='flex entry_animation gap-4 w-full items-center justify-center md:justify-start'>
          <a  href="https://www.linkedin.com/in/nikhil-panday-39776b284/" target='blank'><LiaLinkedin className='text-white text-3xl hover:-translate-y-2 cursor-pointer transition-all' title='LinkedIn' /></a>

          
          <a href="https://x.com/NikhilPanday23" target='blank'><LiaTwitter className='text-white text-3xl hover:-translate-y-2 cursor-pointer transition-all' title='Twitter' /></a>
          <a href="https://github.com/nikkkkk239" target='blank'><LiaGithub className='text-white text-3xl hover:-translate-y-2 cursor-pointer transition-all' title='Github' /></a>  
          <a href="https://www.instagram.com/nikkkkk_239/" target='blank'><LiaInstagram className='text-white text-3xl hover:-translate-y-2 cursor-pointer transition-all' title='Instagram' /></a>        

        </div>
        <a href="resume.pdf" className='entry_animation'>
          <StarBorder
          as="button"
          className="w-fit cursor-pointer md:mx-0 mx-auto bg-black hover:scale-105 duration-150"
          color="white"
          speed="5s"
        >
          Download CV
        </StarBorder>
        </a>
        
      </div>

      {/* Image Section */}
      {/* <div className="w-full md:w-[30%] flex justify-center">
        <img
          src={"profile.jpeg"}
          alt="Nikhil"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 hover:scale-120 transition-all duration-200  md:h-60 object-cover rounded-full shadow-lg"
        />
      </div> */}
      <TiltedCard
  imageSrc="profile2.jpeg"
  altText="Nikhil Panday - A Hero"
  captionText="👨‍💻"
  containerHeight="280px"
  containerWidth="280px"
  imageHeight="280px"
  imageWidth="280px"
  rotateAmplitude={12}
  scaleOnHover={1.0}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={<p></p>}
/>
    </div>
  );
};

export default Hero;
