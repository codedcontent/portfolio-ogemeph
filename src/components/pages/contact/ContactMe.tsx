/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactMeForm from "./ContactMeForm";

const ContactMe = () => {
  return (
    <div className="w-full" id="contact">
      <p className="font-black text-lg uppercase">Let's talk, shall we?</p>

      <div className="my-4">
        <p className="font-medium">What's on your mind?</p>
        <p className="font-light">
          Feel free to contact me If you have any projects you want me to work
          on, or if you just want to have a chat.
        </p>
      </div>

      <ContactMeForm />
    </div>
  );
};

export default ContactMe;
