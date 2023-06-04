import React from 'react'

const Contact = () => {
  return (
    <div className='w-full b'>
      <form className="membership-form w-1/2 mx-auto md:flex md:flex-col md:justify-between mt-3 pb-8">
        <div className="email flex flex-col w-10/12 mx-auto mt-3">
          <label className="text-tail-blue text-xs">Email address</label>
          <input
            type="email"
            className="rounded-md bg-orangish/70 focus:outline-0
                            placeholder:text-slate-50 text-slate-100 placeholder:text-xsm p-2"
            placeholder="&#x2709; pllumumba@gmail.com"
          ></input>
        </div>

        <div className="password flex flex-col w-10/12 mx-auto mt-3">
          <label className="text-tail-blue text-xs">Message</label>
          <textarea
            className="rounded-md bg-orangish/70 focus:outline-0
                            placeholder:text-slate-50 text-slate-100 placeholder:text-xsm placeholder:font-black p-2"
            placeholder="Write Message"
          ></textarea>
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
  );
}

export default Contact