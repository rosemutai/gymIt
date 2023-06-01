import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faPersonRunning, 
    faPersonMilitaryPointing, 
    faBowlFood, 
    faWeight,  
    faWeightScale
} from '@fortawesome/free-solid-svg-icons'

import workout from '../public/images/workout.png'
// import {  } from '@fortawesome/free-brands-svg-icons'


const Services = () => {
  return (
    <div className="services-cards md:w-full md:flex md:flex-col md:px-24 md:pb-16 bg-slate-100 bgred-500">
        <div className="title mt-16">
            <h1 className="text-orangish text-2xl tracking-wider font-semibold text-center font-roboto uppercase 
                pb-2 "
            >
                Outstanding Services
                
            </h1>
                <hr className='w-[8%] mx-auto border-b-2 border-b-orangish mb-12' />
        </div>

        <div className="cards flex flex-col md:flex-row justify-between px-6">
            <div className="card bgorangish w-72 h-56 px-1 mx-auto md:ml-0 md:mr-2 pt-3 border flex 
                border-rangish  rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
                <div className='square w-12 h-12 -2 bg-tail-blue  rotate-45 relative mx-auto myss3'>
                    <FontAwesomeIcon 
                        icon={faPersonRunning}
                        className="text-slate-100 absolute z-20 -top-2 left-2 my-4 mx-auto  w-8 h-8 -rotate-45"
                    />
                </div>
            
                <h4 className="card-title text-orangish font-roboto text-center
                    font-bold tracking-widest text-[0.8rem] mt-3 ">PERSONAL TRAINING
                </h4>
                <p className='md:w-full text-center mx-auto text-tail-blue  text-xs'>Lorem ipsum dolor 
                    sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.
                </p>
            </div>

            <div className="card bgorangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 border flex 
                borderorangish rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
                <div className='square w-12 h-12 -2 bg-tail-blue rotate-45 relative mx-auto my-3'>
                    <FontAwesomeIcon 
                        icon={faPersonMilitaryPointing}
                        className=" text-slate-100 absolute z-20 -top-2 left-2 my-4 mx-auto  w-8 h-8 -rotate-45"
                    />
                </div>
                <h4 className="card-title  text-orangish font-roboto text-center
                    font-bold tracking-widest text-[0.8rem] mt-3">MARTIAL ARTS
                </h4>
                <p className='md:w-full text-center mx-auto text-tail-blue  text-xs'>Lorem ipsum dolor 
                    sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.
                </p>
            </div>


            <div className="card bgorangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 border flex 
                borderorangish  rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
                
                <div className='square w-12 h-12 -2 bg-tail-blue rotate-45 relative mx-auto my-3'>
                    <FontAwesomeIcon 
                        icon={faBowlFood}
                        className=" text-slate-100 absolute z-20 -top-2 left-2 my-4 mx-auto  w-8 h-8 -rotate-45"
                    />
                </div>
                <h4 className="card-title text-[0.8rem] text-orangish font-roboto text-center
                    font-bold tracking-widest mt-3">DIET NUTRITION
                </h4>
                 <p className='md:w-full text-center mx-auto text-tail-blue  text-xs'>Lorem ipsum dolor 
                    sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.
                </p>
            </div>

            <div className="card bgorangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 border flex  
                borde-orangish rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
               <div className='square w-12 h-12 -2 bg-tail-blue rotate-45 relative mx-auto my-3'>
                    <FontAwesomeIcon 
                        icon={faWeight}
                        className=" text-slate-100 absolute z-20 -top-2 left-2.5 my-5 mx-auto  w-6 h-6 -rotate-45"
                    />
                </div>
                <h4 className="card-title text-[0.8rem] text-orangish font-roboto text-center
                    font-bold tracking-widest mt-3">WEIGHT TRAINING
                </h4>
                 <p className='md:w-full text-center mx-auto text-tail-blue  text-xs'>Lorem ipsum dolor 
                    sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.
                </p>
            </div>
            
        </div>
    </div>
  )
}

export default Services