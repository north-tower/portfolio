import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typings'
import { urlFor } from '../lib/sanity';

type Props = {
    experience : Experience;
}

export default function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg h-96
     items-center space-y-7 flex-shrink-0 w-[400px] 
     md:w-[600px] xl:w-[900px] snap-center bg-[#5e5c5c] 
     p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity
     duration-200 overflow-hidden
    '>
        <motion.img
        initial={{
            y:-100,
            opacity: 0,
        }}
        transition={{duration:1.2}}
        whileInView={{opacity: 1, y:0}}
        viewport={{ once: true}}
            className='w-16 h-16  rounded-full
            object-cover object-center'
           src={urlFor(experience?.companyImage).url()}
            alt=''
        />

        <div className='px-1 md:px-10'>
            <h4 className='font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold font-xs mt-1'>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience.technologies.map((technology) => (
                    <img key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={urlFor(technology.image).url()}
                    />
                ))}
            </div>
            <p className='uppercase py-1 text-gray-300 text-sm'>
                {new Date(experience.dateStarted).toDateString()} - {" "}
                {experience.isCurrentlyWorkingHere
                ? "Present"
                : new Date(experience.dateEnded).toDateString()
            }
            </p>
            {/* h-75 overflow-y-scroll */}
            <ul className='list-disc space-y-4 ml-5
             text-sm '>
               {experience.points.map((point,i) => (
                <li key={i}>{point}</li>
               ))}
                
            </ul>
        </div>
         
    </article>

  )
}