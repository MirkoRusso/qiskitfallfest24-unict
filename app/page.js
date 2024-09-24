
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Partners from "./components/partners/Partners";
import Speakers from "./components/speakers/Speakers";
import Agenda from "./components/schedule/Schedule"
import Location from "./components/location/Location";
import './style.css'
import Footer from "./components/footer/Footer";
import Organizers from "./components/organizers/Organizers";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="welcome" className="flex justify-center">
        <div className="relative top-64 flex flex-col justify-center items-center font-bold h-[40%] w-[50%] bg-white/60 backdrop-blur-lg border border-white/20 shadow-lg rounded-lg p-6 ">
          <span className="md:text-3xl text-[#9D5CFD]">Qiskit Fall Fest is coming in Catania.</span>
          <h1 className="text-3xl md:text-6xl text-[#353A3F] text-center">Get ready for Quantum with us!</h1>
          <button className="md:text-xl mt-3 p-5 text-[#353A3F] rounded bg-[#FF7EB5] hover:bg-[#f55fa0] hover:text-white">Get the ticket!</button>
        </div>
      </section>
      <About />
      <Partners />
      <Speakers />
      <Agenda/>
      <Location />
      <Organizers/>
    
      <section id='poster'>
        <div className="flex flex-col justify-center md:m-10">
          <h1 className="text-4xl font-bold text-center">Poster</h1>
        </div>
      </section>
      <section id='gallery'>
        <div className="flex flex-col justify-center md:m-10">
          <h1 className="text-4xl font-bold text-center">Gallery</h1>
        </div>  
      </section>
      <section id='collaborators'>
        <div className="flex flex-col justify-center md:m-10">
          <h1 className="text-4xl font-bold text-center">Collaborators</h1>
        </div> 
      </section>
      <section id='sponsors'>
        <div className="flex flex-col justify-center md:m-10">
          <h1 className="text-4xl font-bold text-center">Sponsors</h1>
        </div> 
      </section>
      <section id='press'>
        <div className="flex flex-col justify-center md:m-10">
          <h1 className="text-4xl font-bold text-center">Press</h1>
        </div> 
      </section>

    <Footer/>
    </div>
  );
}
