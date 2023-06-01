import Image from 'next/image'
import pp from '../public/images/pp.png'

const BottomBanner = () => {
  return (
    <div className="bottom-banner w-full md:mx-auto md:flex md:justify-between md:px-24 bg-slate-100">
        <div  className="left-side md:mt-24 md:mb-8">
            <Image 
            data-aos="zoom-in-up"
                src={pp}
                alt="woman working workout"
                className='md:absolute md:z-20 md:top-0 md:left-2 w-24 h-24'
                width= "600"
                height = "500"
            />
            
        </div>
        <div className="right-side bg-orangish rounded-md slate100 md:w-1/2 md:h-3/6 md:mb-12 mb-0 mt-12 
            md:shadow-md shadow-orangish">
            <div className="title md:flex md:flex-col md:items-center md:justify-center">
                <h1 className="train w-9/12 text-tail-blue text-xl md:text-3xl font-roboto 
                    font-black tracking-wid mx-auto md:mx-0 my-3">Get the value of your money!
                </h1>
                <p className="description w-9/12  text-slate-100 text-xs font-roboto
                    font-light tracking-wider mt-3 mx-auto md:mx-0">Enjoy the best from us today:
                </p>
                <ul className='lists list-tick list-inside w-9/12  mx-auto'>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Womens Only Studio</li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Yoga Classes</li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Steam & Sauna rooms </li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Yoga Classes</li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Aerobics classes </li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Functional Training Area</li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Womens Only Studio</li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Steam & Sauna rooms </li>
                    <li className='list-item text-tail-blue mb-2 md:mb-3'>Functional Training Area</li>
                </ul>
                
            </div>
            
        </div>
    </div>
  )
}

export default BottomBanner