import { IconButton } from '@mui/material'
import Info from '@mui/icons-material/InfoOutlined';
import Calendar from '@mui/icons-material/CalendarMonthOutlined';
import Question from '@mui/icons-material/QuestionMarkOutlined';
import Location from '@mui/icons-material/LocationOnOutlined';
import Link from 'next/link';
import React from 'react'

const About = () => {
  return (
    <section id='about'>
    <div className="flex flex-col justify-center md:m-10">
      <h1 className="text-6xl font-bold text-center mt-5 text-[#353A3F]">About</h1>
      <div className="m-3 md:mx-48">
        <span className='font-bold'>Welcome to the Qiskit Fall Fest 2024 / Catania</span>
        <div>We are thrilled to invite you to the most exciting global event about quantum computing promoted by IBM Quantum and the Qiskit community: the Qiskit Fall Fest!</div>
        <div className="relative p-6 italic text-gray-600 border-l-4 border-[#FF7EB5] bg-gray-50 my-4">
          The Qiskit Fall Fest is a collection of quantum computing events on college campuses around the world. Every Fall Fest event is organized and run by the students on each campus, with support from IBM Quantum. Student leaders work alongside IBM to design and plan their event, which are run in October and November. Each event is standalone - only made for the students on that particular campus. The events vary from technical hackathons to beginner-friendly challenges, all with the goal of helping to grow the local community's skill set.
          qiskit.org
          This year a Qiskit Fall Fest event will be held also in Catania and it will be hosted by the Università degli Studi di Catania, Italy
        </div>
        <p>
          The Qiskit Fall Fest is a celebration of quantum technology, research, and collaboration, bringing together quantum enthusiasts, researchers, students, and professionals from around the world. Whether you’re a quantum expert or just starting your journey into the quantum realm, this event is designed for you.
        </p>
        <div>
          <p>
            We are looking forward to seeing you at the event!
          </p>
        </div>
        <div id="about-buttons" className="flex justify-evenly gap-5 mt-5">
          <div id="info-button" className='flex flex-col justify-center items-center text-center'>
            <IconButton >
                <Info sx={{ fontSize: 60, color: '#9D5CFD' }}></Info>
            </IconButton>
            <h3 className='font-bold text-2xl'>What is Qiskit?</h3>
            <span>An open-source python framework for quantum programming</span>

            <Link href={''} className='hover:underline text-[#9D5CFD] mt-5'> Learn more </Link> 
          </div>
          <div id="calendar-button" className='flex flex-col justify-center items-center text-center'>
            <IconButton >
                <Calendar sx={{ fontSize: 60, color: '#9D5CFD'  }}></Calendar>
            </IconButton>
            <h3 className='font-bold text-2xl'>Calendar</h3>
            <span>Check out the agenda for the event</span>
            <Link href={''} className='hover:underline text-[#9D5CFD] mt-5'> View the calendar </Link> 
          </div>
          <div id="location-button" className='flex flex-col justify-center items-center text-center'>
            <IconButton >
                <Location sx={{ fontSize: 60, color: '#9D5CFD'  }}></Location>
            </IconButton>
            <h3 className='font-bold text-2xl'>Location</h3>
            <span>Learn more about our event location in detail</span>
            <Link href={''} className='hover:underline text-[#9D5CFD] mt-5'> Find us </Link> 
          </div>
          <div id="FAQ-button" className='flex flex-col justify-center items-center text-center'>
            <IconButton >
                <Question sx={{ fontSize: 60, color: '#9D5CFD'  }}></Question>
            </IconButton>
            <h3 className='font-bold text-2xl'>FAQ</h3>
            <span>Have some question? Maybe we have already answer it!</span>
            <Link href={''} className='hover:underline text-[#9D5CFD] mt-5'> FAQ </Link> 
          </div>
        </div>
        <div className='flex justify-center'>
            <div id='register button' className=' bg-[#9D5CFD] hover:bg-[#924afc] text-white rounded text-center text-2xl font-bold mt-5 flex justify-center w-[40%] p-5'>
                <button> Register here to partecipate!
                </button>
            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About