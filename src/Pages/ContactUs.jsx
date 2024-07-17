import React, { useRef } from "react";
import pic from "../assets/home10.jpg";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocation,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

export const socialLinks = [
  {
    icon: faPhone,
    text: "+252925688735",
    link: "",
  },
  {
    icon: faEnvelope,
    text: "surafelmohammed66@gmail.com",
    link: "",
  },
  {
    icon: faLocationPin,
    text: "22, Awraris Festival Building. Addis Ababa",
    link: "",
  },
  {
    icon: faWhatsapp,
    text: "+251 925688735",
    link: "",
  },
  {
    icon: faLinkedin,
    text: "Land Your first job group",
    link: "",
  },
];

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("-------------------first");
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "info",
      title: "email added to the queue ",
    });
    emailjs
      .sendForm(
        "service_ax33x5n",
        "template_d6r4b7t",
        form.current,
        "SjRrqqZaLK6qvI9w0"
      )
      .then(
        (result) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Sent successfully",
          });
        },
        (error) => {
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: "Failed to send an email",
          });
        }
      );
  };
  return (
    <div>
      <div className="header overflow-hidden flex flex-col gap-[50px] lg:pt-[60px] ">
        <div className="xl:px-24 px-4 py-8 flex flex-col lg:flex-row gap-[40px]">
          <div className="text-[45px] leading-[40px] lg:w-[60%]">
            <h3>Get in Touch</h3>
          </div>
          <div className="lg:w-[40%]">
            <p>
              Leave a message and we will get back to you or email any one of
              our listed representatives below
            </p>
          </div>
        </div>

        <div className="h-[300px] lg:h-[100vh] relative">
          <div className="absolute h-[80%]  translate-x-[-10px] rounded-lg w-[90%] left-[0px] bottom-[0px] bg-blue"></div>

          <div className="absolute translate-x-[10px] h-[80%] rounded-lg overflow-hidden w-[90%] right-[0px] top-[0px]">
            <img
              className="h-full w-full object-cover rounded-xl filter brightness-[70%]"
              height={2500}
              width={2500}
              src={pic}
              alt=""
            />
          </div>
        </div>
      </div>

      {/* section one  */}
      <div className="sectionone px-[5%] lg:px-[15%] py-[50px] bg-gray-100 bg-[#f2f2f2">
        <div className="border rounded-lg flex flex-col lg:flex-row lg:gap-[45px] bg-white shadow-xl ">
          <div className="flex flex-col lg:h-[550px] gap-[20px] py-[30px] lg:py-[50px] px-[20px] lg:pl-[35px] lg:w-[50%]">
            <h2 className="text-blue text-[27px] font-semibold">
              Leave a Message
            </h2>
            <p className="text-[17px] text-neutral-600 font-semibold">
              Feel free to contact us any time. We will get back to you as soon
              as we can
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-8"
            >
              <input
                className="border-b-2 focus:outline-none"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                className="border-b-2 focus:outline-none"
                type="text"
                placeholder="Email"
                value="surafelmohammed66@gmail.com"
                name="user_email"
              />
              <input
                className="border-b-2 focus:outline-none"
                type="text"
                placeholder="Message"
                name="message"
              />
              <input
                type="submit"
                value="send"
                className="py-[20px] rounded-lg mt-[25px] w-full bg-blue text-white font-semibold uppercase cursor-pointer"
              />
            </form>
          </div>

          <div className="h-[370px] lg:h-[550px] relative lg:w-[50%]">
            <div className="absolute rounded-lg bottom-[0px] w-full lg:right-[0] lg:w-[200px] h-[100px] lg:h-full bg-gray-500"></div>

            <div className="absolute bottom-[0px] rounded-lg lg:bottom-[10%] w-[80%] lg:w-[100%] left-[10%] lg:left-[0] bg-blue h-full lg:h-[80%] text-white p-[20px] lg:p-[40px] flex flex-col gap-[20px]">
              <h4 className="text-[27px] mb-[25px]  underline decoration-[3px] decoration-primary underline-offset-[5px] font-semibold ml-[10px] lg:ml-[0px]">
                Info
              </h4>
              {socialLinks
                .filter((items, index) => index < 5)
                .map((items, index) => {
                  return (
                    <div
                      key={index}
                      className="mappedsocials flex gap-[5px] text-neutral-200"
                    >
                      <div className=" text-[21px] w-[20%] lg:w-[10%] flex items-center justify-center">
                        <FontAwesomeIcon icon={items.icon} />
                      </div>
                      <div className="overflow-hidden h-[25px] w-[80%] lg:w-[90%]">
                        <p>{items.text}</p>
                      </div>
                    </div>
                  );
                })}

              {/* <div className="absolute top-[-20px] left-[-20px] h-[50px] w-[50px] bg-primary">

                    </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[550px] lg:h-[100vh] xl:px-24 px-4 shadow-xl py-[40px] lg:py-[100px] overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.503167514216!2d38.79848387420257!3d9.01777948916619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b859eaf6a53a5%3A0x7717d41abd5534ec!2sPrivate%20Organizations%20Employees&#39;%20Social%20Security%20Administration%20Caf%C3%A9!5e0!3m2!1sen!2ske!4v1696280932547!5m2!1sen!2ske"
          width="300"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
