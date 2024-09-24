import React from 'react'

const Schedule = () => {
  return (
    <section id='schedule' className='bg-[#F4F4F4] p-5'>
        <div className="flex flex-col justify-center md:m-10">
          <h1 className="text-6xl font-bold text-center text-[#9D5CFD]">Schedule</h1>
        </div>
        <div className=' flex justify-center m-5'>
            <table className=" min-w-full bg-white rounded-lg">
            <thead className='rounded-lg'>
              <tr className="bg-[#9D5CFD] text-white uppercase text-sm leading-normal rounded-lg">
                <th className="py-3 px-6 text-left rounded-tl-lg">Wed, 27 Nov, 2024</th>
                <th className="py-3 px-6 text-left ">Thu, 28 Nov, 2024</th>
                <th className="py-3 px-6 text-left rounded-tr-lg">Fri, 29 Nov, 2024</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
                <tr className=" hover:bg-[#FF7EB5] hover:text-white rounded-lg">
                  <td className="py-3 px-6 text-left whitespace-nowrap">14:30 - 15: 00 Accreditation</td>
                  <td className="py-3 px-6 text-left">14:30 - 15: 00 Accreditation</td>
                  <td className="py-3 px-6 text-left ">14:30 - 15: 00 Accreditation</td>
                </tr>
                <tr className=" hover:bg-[#FF7EB5] hover:text-white rounded-lg">
                  <td className="py-3 px-6 text-left whitespace-nowrap">14:30 - 15: 00 Accreditation</td>
                  <td className="py-3 px-6 text-left">14:30 - 15: 00 Accreditation</td>
                  <td className="py-3 px-6 text-left">14:30 - 15: 00 Accreditation</td>
                </tr>
                <tr className=" hover:bg-[#FF7EB5]  hover:text-white rounded-lg">
                  <td className="py-3 px-6 text-left whitespace-nowrap rounded-bl-lg">14:30 - 15: 00 Accreditation</td>
                  <td className="py-3 px-6 text-left">14:30 - 15: 00 Accreditation</td>
                  <td className="py-3 px-6 text-left rounded-br-lg">14:30 - 15: 00 Accreditation</td>
                </tr>
            </tbody>
          </table>
        </div>
        
     </section>
  )
}

export default Schedule