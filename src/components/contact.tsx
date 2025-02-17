import React from 'react';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import Link from 'next/link';

function Contact() {
  return (
    <>
      <section id="contact" className="py-40 px-4 md:px-8">
        <div className="text-center text-white">
          <h4 className="text-4xl lg:text-5xl font-[Caveat]">
            <span>
             Contact{' '}
              Me
            </span>
          </h4>
          {/* <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            deserunt laudantium officia fuga ipsam quasi corrupti in numquam
            dolor libero explicabo, inventore aperiam.
          </p> */}

          <div className="mt-24 flex flex-col lg:flex-row justify-evenly items-start">
            {/* Contact Information */}
            <div className="flex flex-col justify-center items-start text-center">
              
              <div className="flex mb-12 items-start">
                <MdEmail className="text-2xl text-white mr-4" />
                <div className="text-start">
                  <p className="text-white">Have a question?</p>
                  <p className="my-2 text-[#616161]">I am here to help you</p>
                  <p className="text-white ">Email me at agentia@mail.com</p>
                </div>
              </div>

              <div className="flex mb-12 items-start">
                <MdLocationOn className="text-2xl text-white mr-4" />
                <div className="text-start">
                  <p className="text-white">Current Location</p>
                  <p className="my-2 text-[#616161]">karachi, Pakistan</p>
                  <p className="text-white ">serving clients worldwide</p>
                </div>
              </div>

            </div>

            {/* Contact Form */}
            <form className="w-full lg:w-[50%] flex flex-col items-start">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  className="p-3 my-4 rounded-lg bg-[#c7749c] text-white placeholder: focus:outline-0"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  autoComplete="off"
                />
                <input
                  className="p-3 my-4 rounded-lg bg-[#c7749c] text-white placeholder: focus:outline-0"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  autoComplete="off"
                />
              </div>

              <div className="w-full">
                <input
                  className="p-3 my-4 rounded-lg bg-[#c7749c] text-white placeholder: focus:outline-0 w-full"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  autoComplete="off"
                />
                <textarea
                  id="msg"
                  className="p-3 my-4 rounded-lg bg-[#c7749c] text-white placeholder: focus:outline-0 w-full min-h-[14rem]"
                  placeholder="Your message"
                  autoComplete="off"
                />
              </div>

              <Link href="#home" className="py-3 px-8 rounded-lg text-lg text-white bg-[#ef68a9] transition hover:bg-[#f99ac8]  mt-4">
                Send message
              </Link>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;