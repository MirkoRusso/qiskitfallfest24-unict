import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Navbar from '../components/navbar/Navbar';

export default function page() {
    return (
        <div>
            <Navbar />
            <div className='flex justify-center bg-[#F4F4F4]'>
                <div className='min-w-[70%] max-w-[70%] mt-32 mb-10 '>
                    <h1 className='text-6xl font-bold text-center text-[#9D5CFD]'>FAQ</h1>
                    <div className='mt-10 font-bold'>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                How to register?
                            </AccordionSummary>
                            <AccordionDetails>
                                The event is open to everyone, you can register here.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                            What is the expected level of quantum computing knowledge for attendees?
                            </AccordionSummary>
                            <AccordionDetails>
                                No prior knowledge of QC is required, but surely already having basics of linear algebra make it easy to understand the topics. If you don’t already know the axioms of quantum mechanics, no problem, we will explain them briefly!
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                            What should I bring or prepare before attending the event?
                            </AccordionSummary>
                            <AccordionDetails>
                            Your 💻 personal laptop (with 🔌🔋power supply) and a lot of 🔦curiosity. Furthermore, we will send you some material to view before the event, so as to better prepare you for this exciting experience!
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                            Will there be hands-on sessions?
                            </AccordionSummary>
                            <AccordionDetails>
                                Yes, there will be. You can find the introductory materials for these sessions here.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             Will there be a Q&A session or a way to ask questions during the event?
                            </AccordionSummary>
                            <AccordionDetails>
                            In-presence partecipants can ask questions during the Event at our Speakers. • Online participants cannot interact directly with speakers. If you have a question, you must submit it in the chat. It is permitted to use the microphone and camera upon request in chat and authorization from a moderator.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             Will participating students be awarded CFUs?
                            </AccordionSummary>
                            <AccordionDetails>
                            Credits will certainly be awarded to students of degree courses of the University of Palermo listed here. In any case, you will be issued an attendance certificate with which you can request credit recognition from your degree course coordinator.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                             Will there be a Q&A session or a way to ask questions during the event?
                            </AccordionSummary>
                            <AccordionDetails>
                            In-presence partecipants can ask questions during the Event at our Speakers. • Online participants cannot interact directly with speakers. If you have a question, you must submit it in the chat. It is permitted to use the microphone and camera upon request in chat and authorization from a moderator.
                            </AccordionDetails>
                        </Accordion>

                    </div>

                </div>
            </div>
        </div>
    );
}
