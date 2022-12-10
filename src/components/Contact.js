import React from "react";

const Contact = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <div class="inline-flex justify-center items-center w-full my-5">
          <hr class="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
          <div class="absolute left-1/2 px-4 text-white -translate-x-1/2 bg-gray-900 text-2xl">
            Contact Me
          </div>
        </div>

        <form className="mx-auto md:2/3 lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-4 gap-5 ">
          <div className="md:col-span-2 w-full">
            <input
              type="text"
              className="block w-full focus:outline-none py-3 px-5 rounded bg-slate-500 placeholder:text-sm placeholder:text-slate-100"
              required
              placeholder="Your Name"
            />
          </div>
          <div className="md:col-span-2 w-full">
            <input
              type="email"
              className="block w-full focus:outline-none py-3 px-5 rounded bg-slate-500 placeholder:text-sm placeholder:text-slate-100"
              required
              placeholder="Your Email"
            />
          </div>
          <div className="md:col-span-4 w-full">
            <textarea
              className="w-full rounded bg-slate-500 p-5 placeholder:text-sm placeholder:text-slate-100"
              rows="5"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="md:col-span-4 w-full">
            <button className="bg-red-500 w-full py-3 text-white rounded">
              Send Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
