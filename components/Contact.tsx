import React from "react";

const Contact = () => {
  return (
    <div id="contactus" className="w-full">
      <div className="title md:mt-16 pt-10 md:pt-0">
        <h1
          className="text-orangish text-2xl tracking-wider font-semibold text-center font-roboto uppercase 
                pb-2 "
        >
          Contact Us
        </h1>
        <hr className="w-[8%] mx-auto border-t-0 border-x-0 border-b-2 border-b-orangish mb-12" />
      </div>
      <form className="membership-form bg-slate-100  w-11/12 md:w-1/2 mx-auto md:flex md:flex-col md:justify-between mt-3 pb-8">
        <div className="email flex flex-col w-10/12 mx-auto mt-3">
          <label className="text-tail-blue text-xs md:mt-3">
            Email address
          </label>
          <input
            type="email"
            className="rounded-md bg-orangish focus:outline-0 focus:shadow focus:shadow-slate-100
                            placeholder:text-slate-50/60  text-slate-100 placeholder:text-xsm p-2"
            placeholder="&#x2709; pllumumba@gmail.com"
          ></input>
        </div>

        <div className="email flex flex-col w-10/12 mx-auto mt-3">
          <label className="text-tail-blue text-xs md:mt-3">Subject</label>
          <input
            type="text"
            className="rounded-md bg-orangish focus:outline-0 focus:shadow focus:shadow-slate-100
                            placeholder:text-slate-50/60  text-slate-100 placeholder:text-xs p-2"
            placeholder="Your subject..."
          ></input>
        </div>

        <div className="password flex flex-col w-10/12 mx-auto mt-3">
          <label className="text-tail-blue text-xs md:mt-3">Message</label>
          <textarea
            className="rounded-md bg-orangish focus:outline-0 h-48
              focus:shadow focus:shadow-slate-100
            placeholder:text-slate-50/60  text-slate-50 placeholder:text-xsm 
              placeholder:font-black p-2"
            placeholder="Leave a Message"
          ></textarea>
        </div>

        <div className="btn w-full flex justify-center mt-3">
          <button
            type="submit"
            className="text-center w-1/2 mx-auto mt-5 rounded-md text-slate-100 
                            bg-orangish text-xsm font-semibold tracking-wider p-2 hover:shadow-md
                            hover:orangish hoveropacity-50 
                        hover:transition-all"
          >
            {" "}
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
