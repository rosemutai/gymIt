import React from "react";
import Image from "next/image";
import pp from "../public/images/pp.png";

const About = () => {
  return (
    <div id="aboutus" className="services-cards md:w-full md:flex md:flex-col md:px-24 md:pb-16 bg-slate-100 bgred-500">
      <div className="title mt-16">
        <h1
          className="text-orangish text-2xl tracking-wider font-semibold text-center font-roboto uppercase 
                pb-2 "
        >
          About us
        </h1>
        <hr className="w-[8%] mx-auto border-b-2 border-b-orangish mb-12" />
      </div>
      <div className="flex">
        <div
          className="right-side bg-orangish rounded-md slate100 md:w-1/2 md:h-3/6 md:mb-12 mb-0 mt-12 
            md:shadow-md shadow-orangish"
        >
          <div className="title md:flex md:flex-col md:items-center md:justify-center">
            <h1
              className="train w-9/12 text-tail-blue text-xl md:text-3xl font-roboto 
                    font-black tracking-wid mx-auto md:mx-0 my-3 uppercase"
            >
              Mission
            </h1>
            <p
              className="description w-9/12  text-slate-100 text-xs font-roboto
                    font-light tracking-wider mt-3 mx-auto md:mx-0 pb-5"
            >
              At gymIt, our mission is to empower individuals on their journey
              to optimal health and fitness. We believe that a strong and
              healthy body is the foundation for a fulfilling life. Our website
              is dedicated to providing a comprehensive platform that inspires,
              educates, and supports our users in achieving their fitness goals.
            </p>

            <p
              className="description w-9/12  text-slate-100 text-xs font-roboto
                    font-light tracking-wider mt-3 mx-auto md:mx-0 pb-5"
            >
              Ultimately, our goal is to be the go-to destination for anyone
              seeking a comprehensive fitness resource. We aspire to empower our
              users to take control of their health, discover their full
              potential, and embrace a lifestyle centered around well-being.
              Together, we can build a stronger, healthier, and happier
              community one step at a time.
            </p>
          </div>
        </div>

        <div className="left-side md:mt- md:mb-8">
          <Image
            data-aos="zoom-in-up"
            src={pp}
            alt="woman working workout"
            className="md:absolute md:z-20 md:top-0 md:left-2 w-24 h-24"
            width="600"
            height="500"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
