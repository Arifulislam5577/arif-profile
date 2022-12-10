import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !name || !message) {
      return;
    } else {
      setLoading(true);
      axios
        .post(
          "https://getform.io/f/76390ef9-c935-40d3-a10d-01456e4075f2",
          {
            message: message,
          },
          { headers: { Accept: "application/json" } }
        )
        .then((response) => {
          if (response.data) {
            toast.success("Email send successfull");
            setLoading(false);
          }
        })
        .catch((error) => {
          if (error) {
            toast.error(error.message);
            setLoading(false);
          }
        });
    }
  };
  return (
    <section className="pb-10">
      <div className="container">
        <div className="inline-flex justify-center items-center w-full my-5">
          <hr className="my-8 w-64 h-1 bg-gray-200 rounded border-0 dark:bg-gray-700" />
          <div className="absolute left-1/2 px-4 text-white -translate-x-1/2 bg-gray-900 text-2xl">
            Contact Me
          </div>
        </div>

        <form
          className="mx-auto md:2/3 lg:w-1/2 w-full grid grid-cols-1 md:grid-cols-4 gap-5 "
          onSubmit={handleSubmit}
        >
          <div className="md:col-span-2 w-full">
            <input
              type="text"
              className="block w-full focus:outline-none py-3 px-5 rounded bg-slate-500 placeholder:text-sm placeholder:text-slate-100"
              required
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="md:col-span-2 w-full">
            <input
              type="email"
              className="block w-full focus:outline-none py-3 px-5 rounded bg-slate-500 placeholder:text-sm placeholder:text-slate-100"
              required
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="md:col-span-4 w-full">
            <textarea
              className="w-full rounded bg-slate-500 p-5 placeholder:text-sm placeholder:text-slate-100"
              rows="5"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="md:col-span-4 w-full">
            <button className="bg-red-500 w-full py-3 text-white rounded">
              {loading ? "Loading..." : "Send Email"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
