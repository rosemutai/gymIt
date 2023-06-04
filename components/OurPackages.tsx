import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faMedal, faDiamond,faTrophy, faAward, faStarAndCrescent
} from '@fortawesome/free-solid-svg-icons'

import workout from '../public/images/workout.png'
// import {  } from '@fortawesome/free-brands-svg-icons'


const OurPackages = () => {
  return (
    <div id="ourpackages" className="services-cards md:w-full md:flex md:flex-col bg-slate-100 md:px-24 md:pb-24">
        <div className="title md:mt-16 pt-10 md:pt-0">
            <h1 className="text-orangish text-2xl tracking-wider font-semibold text-center font-roboto uppercase 
                pb-2 "
            >
                Our Packages
                
            </h1>
                <hr className='w-[8%] mx-auto border-b-2 border-b-orangish mb-12' />
        </div>

        <div className="cards flex flex-col md:flex-row justify-between px-6">
            <div className="card bg-orangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 pt-3 border flex 
                border-rangish  rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
                <div className='square w-12 h-12 -2 bg-tail-blue  rotate-45 relative mx-auto myss3'>
                    <FontAwesomeIcon 
                        icon={faAward}
                        className="text-slate-100 absolute z-20 -top-2 left-2 my-4 mx-auto  w-8 h-8 -rotate-45"
                    />
                </div>
            
                <h4 className="card-title text-[0.8rem] mt-3  text-tail-blue font-roboto text-center
                    font-bold tracking-widest">DAY PASS - ksh.1200
                </h4>
                <p className='md:w-full mx-auto text-xs text-tail-blue text-sm text-center'>Lorem ipsum dolor 
                    sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.
                </p>
            </div>

            <div className="card bgorangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 border flex 
                borderorangish rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
                <div className='square w-12 h-12 -2 bg-tail-blue rotate-45 relative mx-auto my-3'>
                    <FontAwesomeIcon 
                        icon={faDiamond}
                        className=" text-slate-100 absolute z-20 -top-2 left-2 my-4 mx-auto  w-8 h-8 -rotate-45"
                    />
                </div>
                <h4 className="card-title text-[0.8rem] mt-3
                     text-orangish font-roboto text-center
                    font-bold tracking-widest">One Month - ksh.5000
                </h4>
                <p className='md:w-full mx-auto text-xs text-tail-blue text-sm text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.</p>
            </div>


            <div className="card bgorangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 border flex 
                borderorangish  rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
                
                <div className='square w-12 h-12 -2 bg-tail-blue rotate-45 relative mx-auto my-3'>
                    <FontAwesomeIcon 
                        icon={faTrophy}
                        className=" text-slate-100 absolute z-20 -top-2 left-2 my-4 mx-auto  w-8 h-8 -rotate-45"
                    />
                </div>
                <h4 className="card-title text-[0.8rem] mt-3 text-orangish font-roboto text-center
                    font-bold tracking-widest">Three Months - ksh.12500
                </h4>
                <p className='md:w-full mx-auto text-xs text-tail-blue text-sm text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.</p>
            </div>

            <div className="card bgorangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 border flex  
                borde-orangish rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
               <div className='square w-12 h-12 -2 bg-tail-blue rotate-45 relative mx-auto my-3'>
                    <FontAwesomeIcon 
                        icon={faMedal}
                        className=" text-slate-100 absolute z-20 -top-2 left-2.5 my-5 mx-auto  w-6 h-6 -rotate-45"
                    />
                </div>
                <h4 className="card-title text-[0.8rem] mt-3 text-orangish font-roboto text-center
                    font-bold tracking-widest">Six Months - ksh.23000
                </h4>
                <p className='md:w-full mx-auto text-xs text-tail-blue text-sm text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.</p>
            </div>

             <div className="card bgorangish w-72 h-56 px-2 mx-auto md:ml-0 md:mr-2 border flex  
                borde-orangish rounded-2xl flex-col justify-evenly mb-2 md:mb-0 hover:shadow-md">
               <div className='square w-12 h-12 -2 bg-tail-blue rotate-45 relative mx-auto my-3'>
                    <FontAwesomeIcon 
                        icon={faStarAndCrescent}
                        className=" text-slate-100 absolute z-20 -top-2 left-2.5 my-5 mx-auto  w-6 h-6 -rotate-45"
                    />
                </div>
                <h4 className="card-title text-[0.8rem] mt-3 text-orangish font-roboto text-center
                    font-bold tracking-widest">Six Months - ksh.23000
                </h4>
                <p className='md:w-full mx-auto text-xs text-tail-blue text-sm text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum dolor iusto dolorem.</p>
            </div>
            
        </div>
    </div>
  )
}

export default OurPackages