import Image from 'next/image'
import Link from "next/link";

import trainer from '../public/images/trainer.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGoogle  } from '@fortawesome/free-brands-svg-icons'

const membership = () => {
  return (
    <div className="w-full min-h-screen bg-tail-blue md:pt-3 md:px-10">
      <Link href="/">
        <a
          className="ad bg-orangish p-3  rounded-sm text-[0.7rem] ml-44 mt-4 w-32
                    text-center font-bold tracking-wider hover:shadow-md text-slate-100
                  hover:shadow-orangish hover:transition-all"
        >
          {" "}
          BACK{" "}
        </a>
      </Link>

      <div className=" flex mt-12 justify-center items-center">
        <div className="w-9/12 mx-auto md:flex md:justify-between ">
          <div className="left-side bg-slate-200/30 rounded-l-md rounded-r-md md:rounded-r-none  md:w-1/2 mt-20 md:mt-0">
            <Image
              src={trainer}
              alt="woman working out"
              width="400"
              height="400"
              className=""
            />
          </div>

          <div className="right-side rounded-l-md md:rounded-l-none rounded-r-md form bg-slate-100 md:w-1/2 md:px-3 mb-16 md:mb-0">
            <div className="title">
              <h1
                className="train text-tail-blue text-xl md:text-xl font-roboto 
                        font-bold py-4 md:py-0 my-3 text-center"
              >
                Become A Member Today
              </h1>
              <p
                className="description w-9/12  text-slate-100 text-xs font-roboto
                        font-light tracking-wider mt-3 mx-auto md:mx-0"
              >
                Already have an account?
              </p>
            </div>
            <div className="google-fb flex flex-col md:flex-row md:justify-between w-10/12 mx-auto md:mt-3">
              <button
                className="ad bg-slate-100 py-2 px-1 rounded-md text-xsm flex justify-around
                        font-bold tracking-wider mt-2 mb-2 md:mb-0 hover:shadow-md items-center font-roboto border
                      border-orangish text-tail-blue hover:shadow-orangish hoveropacity-50 
                        hover:transition-all ml mx-auto md:mx-0 w-7/12 md:w-1/2"
              >
                <FontAwesomeIcon icon={faGoogle} className="w-3 h-3" />
                SIGN UP WITH GOOGLE
              </button>

              <button
                className="bg-slate-100 py-2 px-1  rounded-md text-xsm flex justify-around 
                        font-bold tracking-wider mt-2 mb-2 md:mb-0 hover:shadow-md items-center font-roboto border
                      border-orangish text-tail-blue hover:shadow-orangish hoveropacity-50 
                        hover:transition-all md:ml-2 mx-auto md:mx-0 w-7/12 md:w-1/2"
              >
                <FontAwesomeIcon icon={faFacebook} className="w-3 h-3" />
                SIGN UP WITH FACEBOOK
              </button>
            </div>

            <p
              className="description text-center  text-tail-blue text-sm font-roboto 
                    font-light tracking-wider mt-3"
            >
              Or
            </p>

            <form className="membership-form md:flex md:flex-col md:justify-between mt-3 pb-8">
              <div className="email flex flex-col w-10/12 mx-auto mt-3">
                <label className="text-tail-blue text-xs">Email address</label>
                <input
                  type="email"
                  className="rounded-md bg-orangish focus:outline-0
                            placeholder:text-slate-50/60 text-slate-100 placeholder:text-xsm p-2"
                  placeholder="&#x2709; pllumumba@gmail.com"
                ></input>
              </div>

              <div className="password flex flex-col w-10/12 mx-auto mt-6">
                <label className="text-tail-blue text-xs">Password</label>
                <input
                  type="password"
                  className="rounded-md bg-orangish focus:outline-0
                            placeholder:text-slate-50/60 text-slate-100 placeholder:text-xsm placeholder:font-black p-2"
                  placeholder="&#128274; .........."
                ></input>
              </div>

              <div className="ceckbox flex w-10/12 mx-auto mt-6">
                <input type="checkbox" name="terms" value="agree"></input>
                <label className="text-tail-blue text-sm md:ml-1">
                  {" "}
                  I agree to the terms of service
                </label>
              </div>

              <div className="btn w-full flex justify-center mt-3">
                <button
                  type="submit"
                  className="text-center w-1/2 mx-auto rounded-md bg-orangish 
                            text-slate-100 text-xsm font-semibold tracking-wider p-2 hover:shadow-md
                            hover:shadow-orangish hoveropacity-50 
                        hover:transition-all"
                >
                  {" "}
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default membership