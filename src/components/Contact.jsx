import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // const form = useRef();
  //
  // const sendEmail = (e) => {
  //   e.preventDefault();
  //
  //   emailjs
  //     .sendForm(
  //       "service_0z2mlaf",
  //       "template_uqxlfcr",
  //       form.current,
  //       "KZFg3nIuNQyTP1Dbf",
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       },
  //     );
  // };
  // MORTEN READ THIS: above is using emailjs api to send the form data to my email address, but i found a
  // much simpler way to do it. In case the new method with getform doesnt count as using an api, im
  // leaving in the emailjs so you can see that i understand how to do it.
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#1A1A1A] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/adb75317-7c69-4e50-9c31-4868f2a2a8dd"
        className="flex flex-col max-w-[600px] w-full text-gray-300"
        method="POST"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#9F86C0] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Let's connect! Fill out the email form below and we'll be drinking
            coffee in no time
          </p>
        </div>
        <input
          className="bg-gray-100 p-2 text-black"
          type="text"
          placeholder="Name"
          name="user_name"
        />
        <input
          className="my-4 p-2 bg-gray-100 text-black"
          type="email"
          placeholder="Email"
          name="user_email"
        />
        <textarea
          className="bg-gray-100 p-2 text-black"
          placeholder="Message"
          name="message"
          rows="10"
        />
        <button
          className="text-white border-2 hover:bg-[#9F86C0] hover:border-[#9F86C0] px-4 py-3 my-8 mx-auto flex items-center hover:duration-200"
          type="submit"
        >
          Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
