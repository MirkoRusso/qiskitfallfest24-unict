import React from 'react'

const Location = () => {
  return (
    <section id='location'>
        <div className="flex flex-col justify-center md:m-10">
          <h1 className="text-6xl font-bold text-center text-[#353A3F]">Location</h1>
          <span className='text-center text-wrap text-lg font-bold mt-5 italic'>Università degli Studi di Catania <br/>
                Dipartimento di Matematica e Informatica, Aula 25 (Classroom 25)<br />
                Viale Andrea Doria, 6, 95125 Catania (Italy)</span>
        </div>
        <div className='flex justify-center'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6328.488671170146!2d15.070287175651902!3d37.52573722646691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fd24265300d1%3A0x309382016a00c167!2sDipartimento%20di%20Matematica%20e%20Informatica!5e0!3m2!1sit!2sit!4v1727100667567!5m2!1sit!2sit" 
                width="700" 
                height="500" 
                style={{ border: 0, borderRadius: 8}}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </section>
  )
}

export default Location