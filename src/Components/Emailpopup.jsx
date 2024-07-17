import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Emailpopup = ({ visible, close, email, username }) => {
  const form = useRef();

  if (!visible) return null;

  const sendEmail = (e) => {
    e.preventDefault();
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
    close(false);
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
    <div className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center">
      <form ref={form} onSubmit={sendEmail}>
        <div className="bg-white p-2 rounded-lg w-[25rem]">
          <h1 className="font-semibold text-center text-xl text-gray-700">
            Notfiy the applicants
          </h1>

          <div className="flex flex-col p-5">
            <label className="font-bold p-2">Username</label>
            <input
              defaultValue={username}
              required
              type="text"
              name="user_name"
              className="border border-gray-200 p-2 rounded mb-5"
              placeholder="username"
            />
            <label className="font-bold p-2">Email Address</label>
            <input
              defaultValue={email}
              required
              type="email"
              name="user_email"
              className="border border-gray-300 p-2 rounded mb-5"
              placeholder="email@example.com"
            />
            <label className="font-bold p-2">Detail Information</label>
            <textarea
              defaultValue={`Dear ${username} \n  Thank you for submitting your application and resume for posted position. \n Sincerely,`}
              type="text"
              name="message"
              rows={6}
              className="border border-gray-300 p-2 rounded mb-2"
              placeholder="Detail information"
            />
          </div>
          <div className=" flex w-full px-5 justify-between items-center">
            <button
              onClick={close}
              className=" px-5 py-2 bg-blue text-white rounded mb-2 mr-2"
            >
              Cancle
            </button>
            <input
              type="submit"
              value="send"
              className=" px-5 py-2 bg-blue text-white rounded mb-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Emailpopup;
