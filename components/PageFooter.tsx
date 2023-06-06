import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faTwitter, faInstagram, faYoutube  } from '@fortawesome/free-brands-svg-icons'


const PageFooter = () => {
  return (
    <div className="footer w-full md:flex md:flex-col md:mt-8">
      <div
        className="video md:relative w-80 h-28 mx-auto -rotate-6 bg-orangish md:mt-8 rounded-md
            shadow-md shadow-orangish"
      >
        <div
          className="md:absolute text-center md:top-0 md:left-0 mx-auto md:mx-0 w-80 h-28 rotate-6
            bg-slate-100 rounded-md z-20 mt-3"
        >
          <FontAwesomeIcon
            icon={faPlay}
            className="bg-tail-blue md:mx-auto p-2 rounded-full text-center  mx-auto my-3 text-slate-100 w-6 h-6"
          />
          <h4
            className="card-title text-[0.8rem] text-orangish font-roboto text-center
                    font-bold tracking-widest"
          >
            CHECK THE VIDEO
          </h4>
          <p className="desc md:w-11/12 mx-auto text-tail-blue text-[1rem]">
            Our Site
          </p>
        </div>
      </div>

      <div className="footer-links bg-tail-blue w-full mt-4 md:py-8">
        <div className="row-1 flex flex-col md:flex-row justify-evenly my-4">
          <div className="col-one flex flex-col items-center md:items-start fontsemibold font-roboto text-white">
            <h4
              className="card-title text-xs text-orangish font-roboto my-3
                     font-bold tracking-widest"
            >
              GymIt{" "}
            </h4>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Questions</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Help</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Contact Us</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Teams</a>
            </Link>
          </div>

          <div className="col-two flex flex-col items-center md:items-start  fontsemibold font-roboto text-white">
            <h4
              className="card-title text-xs text-orangish font-roboto
                     font-bold tracking-widest my-3 md:mt-0 uppercase"
            >
              Services{" "}
            </h4>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Advertising</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Talent</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Business</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Data</a>
            </Link>
          </div>

          <div className="col-three flex flex-col items-center md:items-start fontsemibold font-roboto text-white">
            <h4
              className="card-title text-xs text-orangish font-roboto
                     font-bold tracking-widest my-3 md:mt-0 uppercase"
            >
              COMPANY{" "}
            </h4>
            <Link href="/">
              <a className="font-regular text-sm mb-3">About</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Work Here</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Legal</a>
            </Link>
            <Link href="/">
              <a className="font-regular text-sm mb-3">Privacy Policy</a>
            </Link>
          </div>
        </div>

        <hr className="md:mt-8 border border-x-0 border-t-0 border-b-1 border-orangish/40"></hr>

        <div className="row-2 register flex flex-col items-center md:flex-row justify-center mt-5">
          <h4
            className="card-title text-[0.8rem] text-orangish font-roboto
                    font-bold tracking-widest md:mt-4 md:mr-4"
          >
            SUBSCRIBE TO OUR NEWSLETTER
          </h4>

          <form className="subscribe-form">
            <input
              type="text"
              className="p-1 text-tail-blue border-2 bg-slate-100 shadow-orangish
                        mt-2 md:mr-3 focus:outline-0 focus:shadow-sm hover:transition-all"
            />

            <button
              className="ad bg-orangish p-2 rounded-md text-slate-100 font-roboto
                    font-bold tracking-wider mt-2 mb-2 md:mb-0 hover:shadow-md text-[0.7rem]
                  hover:shadow-orangish hover:opacity-50 hover:transition-all ml-2 md:ml-0"
            >
              {" "}
              SUBSCRIBE
            </button>
          </form>
        </div>

        <hr className="md:mt-8 border border-x-0 border-t-0 border-b-1 border-orangish/50"></hr>
        <div className="row-3 socials flex justify-center mt-5 md:pt-10">
          <FontAwesomeIcon
            icon={faFacebook}
            className="h-4 w-4 text-slate-100 mb-7 
                        mr-4 border-2 border-doubled rounded-full p-1.5 border-slate-100
                        hover:border-dashed hover:transition-border duration-75 hover:animate-spin
                        hover:border-orangish"
          />

          <FontAwesomeIcon
            icon={faTwitter}
            className="h-4 w-4 text-slate-100 mb-7 
                        mr-4 border-2 border-doubled rounded-full p-1.5 border-slate-100
                        hover:border-dashed hover:transition-border duration-75 hover:animate-spin
                        hover:border-orangish"
          />

          <FontAwesomeIcon
            icon={faInstagram}
            className="h-4 w-4 text-slate-100 mb-7 
                        mr-4 border-2 border-doubled rounded-full p-1.5 border-slate-100
                        hover:border-dashed hover:transition-border duration-75 hover:animate-spin
                        hover:border-orangish"
          />

          <FontAwesomeIcon
            icon={faYoutube}
            className="h-4 w-4 text-slate-100 mb-7 
                        mr-4 border-2 border-doubled rounded-full p-1 border-slate-100
                        hover:border-dashed hover:transition-border duration-75 hover:animate-spin
                        hover:border-orangish"
          />
        </div>

        <div className="row-4 copyright flex justify-center md:mt-3">
          <p className="text-slate-100 text-sm py-3">@2020 Copyright: gymIt</p>
        </div>
      </div>
    </div>
  );
}

export default PageFooter





