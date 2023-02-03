import React from 'react'
import  {PhoneIcon, MapPinIcon , EnvelopeIcon } from "@heroicons/react/24/solid"
import { useForm , SubmitHandler} from "react-hook-form"


type Inputs = {
    name:string;
    email:string;
    subject:string;
    message:string;
};

type Props ={}

export default function ContactMe({}: Props) {
    const { register, handleSubmit} =  useForm<Inputs>();
    const onSubmit : SubmitHandler<Inputs> = (formData) => 
    (
        window.location.href= `mailto:muneshmyke@gmail.com?subject=${formData.subject}&body=Hello,my name is ${formData.name}. ${formData.message} (${formData.email})`
    )

  return (
    <div className='h-screen flex relative flex-col text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] 
        text-gray-500 text-2xl pb-3'>
            Contact
        </h3>

        <div className='flex flex-col space-y-4'>
            <h4 className='font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#f7ab0a]/50 underline'>
                    Lets Talk.
                </span>
            </h4>

            <div className='space-y-2'>
                <div className='flex items-center space-x-5
                justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] h-7
                     w-7 animate-pulse' />
                     <p className="">+254799229340</p>
                </div>

                <div className='flex items-center space-x-5
                justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7
                     w-7 animate-pulse' />
                     <p className="">muneshmyke@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5
                justify-center'>
                    <MapPinIcon className='text-[#f7ab0a] h-7
                     w-7 animate-pulse' />
                     <p className="">00100 Nairobi</p>
                </div>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-2 w-fit p-4'
            >
                <div className='flex space-x-2'>
                    <input
                    {...register('name')}
                     placeholder='Name' className='contactInput' type="text" />
                    <input 
                    {...register('email')}
                    placeholder='Email' className='contactInput' type="email" />
                </div>

                <input 
                {...register('subject')}
                placeholder='Subject' className='contactInput' type="text" />
                <textarea
                {...register('message')}
                 placeholder='Message' className='contactInput'/>

                <button type="submit" className='bg-[#F7AB0A] py-2
                px-5 rounded-md text-black font-bold
                '>Submit</button>
            </form>
        </div>
    </div>
  )
}