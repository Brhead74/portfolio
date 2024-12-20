"use client"
import React from 'react';

const Contact = () => {
  return (
    <div className='bg-cyan-400 px-12 py-12 md:px-24 md:py-20 text-white'>
      <div className='flex flex-col md:flex-row items-center justify-between'>
        <div className='text-center md:text-left md:w-1/2'>
          <h1 className='text-4xl md:text-6xl font-bold mb-2'>Maxime Constantineau</h1>
          <p className='text-xl md:text-2xl mb-8'>Programmeur, Modélisateur et Concepteur Visuel</p>

          <p className='text-lg mb-4'>Créateur multimédia avec trop de passions.</p>

          <p className='text-lg mb-6'>Je suis disponible pour des collaborations et des projets.</p>

          <button 
            onClick={() => window.location.href = 'mailto:Bhread74@gmail.com'}
            className='bg-white text-cyan-400 px-8 py-3 text-lg md:text-2xl font-semibold rounded-md shadow-lg hover:bg-cyan-500 hover:text-white transition-colors duration-300'>
            Contactez-moi
          </button>
          <br />
          <button 
            onClick={() => window.open('maxconst_Cv.pdf', '_blank')}
            className='underline text-lg mt-4 hover:text-cyan-500'>
            Télécharger mon CV
          </button>
        </div>

        <div className='mt-8 md:mt-0 md:w-1/2'>
          <img src="contact.png" alt="contact illustration" className='w-full md:w-3/4 mx-auto hover:opacity-80 transition-opacity duration-300' />
        </div>
      </div>
    </div>
  );
};

export default Contact;

