import Image from "next/image"
import Link from 'next/link'
import workout from '../public/images/workout.png'

const TopBanner = () => {
  return (
    <div className="top-banner w-full transition ease-in mt-14 md:mt-0 flex flex-col 
        md:flex-row justify-between pl-2 md:px-24 min-h-screen md:pb-8">
        <div className="left-side md:mt-24 md:pt-20">
            <div className="title">
                <h1 className="train w-7/12 md:w-9/12 text-[2rem] md:text-[2.6rem]
                    font-bold md:tracking-wide text-slate-100 sh">Dream a strong body! Achieve it with Us.
                </h1>
                <p className="description w-9/12 md:w-8/12  text-slate-100 text-[0.8rem]
                    font-light tracking-wider my-10">Start your fitness journey with us today by booking an 
                    appointment. Decide, Commit, Succeed; It never gets easier, you just get stronger.
                </p>

                <Link href='/membership'><a className="ad bg-orangish p-3  rounded-sm text-[0.7rem]
                    text-center font-bold tracking-wider hover:shadow-md text-slate-100
                  hover:shadow-orangish hover:transition-all"> START TODAY </a>
                </Link>
                
            </div>
           
        </div>
        <div className="right-side mt-14 md:mt-28 bg-orangish md:rounded-t-md md:rounded-l-full
            md:rounded-r-3xl md:rounded-b-full">
             <Image 
                src={workout}
                alt="woman working workout"
                className='absolute md:z-20 md:top-0 md:left-2 w-36 h-36 md:w-24 md:h-24'
                width= "600"
                height = "500"
            />
        </div>
    </div>
  )
}

export default TopBanner