import React from 'react'

const Partners = () => {
  return (
    <section id='partners' className="bg-[#F4F4F4] p-5">
    <h1 className="text-6xl font-bold text-center  mt-10 text-[#9D5CFD]">Partners</h1>
    <div className="flex justify-center md:m-10">
         <div id="qiskit" className="flex flex-col w-[25%] m-5">
           <img 
           className="h-[150px] object-contain mix-blend-multiply"
           src="./assets/img/logo_QISKIT.png"></img>
           <h1 className="text-lg font-bold text-center mb-10">Qiskit Community</h1>
           <p className="text-[#353A3F]">
           Qiskit is an open-source framework for working with noisy quantum computers at the level of pulses, 
           circuits, and algorithms. It provides tools for creating and manipulating quantum programs and 
           running them on prototype quantum devices on IBM Quantum Experience or on simulators on a local computer.
           Qiskit also enables the user to optimize quantum circuits for a particular device, perform quantum computing 
           experiments on real devices with little effort, and easily access to IBM Quantum hardware through the cloud.
           </p>
         </div>
         <div id="ibm" className="flex flex-col w-[25%] m-5">
             <img 
             className="h-[150px] object-cover mix-blend-multiply"
             src="./assets/img/logo_IBM2.svg"></img>
             <h1 className="text-lg font-bold text-center mb-10">IBM Quantum</h1>
             <p className="text-[#353A3F]">
             IBM Quantum is an industry-first initiative to build universal quantum computers for business,
             engineering and science. This effort includes advancing the entire quantum computing technology 
             stack and exploring applications to make quantum broadly usable and accessible. With a worldwide network of Fortune 500
             companies, academic institutions, researchers, educators, and enthusiasts, 
             IBM Quantum is committed to driving innovation for clients in the IBM Q Network and the Qiskit Community.
             </p>
         </div>
         <div id="dmi"  className="flex flex-col w-[25%] m-5">
             <img 
             className="h-[150px] object-contain mix-blend-multiply"
             src="./assets/img/logo_DMI2.png"></img>
             <h1 className="text-lg font-bold text-center mb-10">Dipartimento di Matematica e Informatica - UNICT</h1>
             <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, impedit maiores expedita voluptates at molestiae eius, fugit nobis incidunt magnam aspernatur repellendus iure consectetur. Totam ut placeat alias quidem ea.
             </p>
         </div>
     </div>
   </section>
  )
}

export default Partners