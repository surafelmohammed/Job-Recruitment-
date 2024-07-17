import React from "react";
import JobImg from "../assets/job.jpg";
import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const footerLinks = [
  {
    id: "01",
    title: "COMPANY",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "POLICY",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "SUPPORT",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];

const About = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 ">
        <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
          <div className="w-full md:2/3 2xl:w-2/4">
            <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
            <p className="text-justify leading-7">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
              ipsum illum minus esse qui. Amet ab facere dolorem nisi possimus
              quis id autem excepturi hic quos consequuntur, eius, itaque
              eveniet cum, illum quo maiores. Inventore itaque dolores officiis
              similique labore ad cum veniam tenetur delectus nulla nisi
              veritatis, sequi dolorum alias sed explicabo enim suscipit
              voluptas dolorem numquam non laboriosam maiores! Distinctio iusto
              sit numquam, non vel, veniam, repudiandae facere laboriosam
              repellendus ad nulla accusamus quidem!
            </p>
          </div>
          <img src={JobImg} alt="About" className="w-auto h-[300px]" />
        </div>

        <div className="leading-8 px-5 text-justify">
          <p className="mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            libero quod, eligendi debitis impedit optio placeat culpa doloremque
            eveniet vel obcaecati similique, dolor magnam quibusdam aperiam,
            natus nisi. Ab officiis necessitatibus sequi nisi minus neque
            quibusdam. Delectus corporis aperiam nam id velit, eligendi
            mollitia. Debitis suscipit sapiente voluptas adipisci laudantium sed
            voluptatem veritatis, optio a, distinctio quod quas. Nisi repellat
            officiis dicta, inventore quas perferendis voluptatibus unde magnam
            debitis, eos a aperiam delectus quo fuga non. Molestias
            reprehenderit repellat rerum facilis voluptatum deleniti. Ratione
            accusantium blanditiis iure illo maiores nam odit minima impedit
            rerum possimus quae magni soluta eum ducimus cum, fuga quas debitis
            amet expedita. Ratione, reiciendis reprehenderit! Accusantium quas
            at tempore consequuntur alias? Labore placeat magni, quos
            consequuntur eveniet laudantium nostrum expedita corporis quia
            facere, reiciendis ab distinctio quo culpa dolor aliquam
            voluptatibus. Vitae esse totam incidunt, excepturi, eligendi tenetur
            doloremque enim, quam reiciendis error sequi tempore cum!
          </p>
        </div>
      </div>
      <footer className="text-white mp-20">
        {/* creating the wave */}
        <div className="overflow-x-hidden -mb-0.5">
          <svg
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            style={{
              fill: "#f1f4f8",
              width: "125%",
              height: 112,
              transform: "rotate(180deg)",
            }}
          >
            <path d="M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z" />
          </svg>
        </div>

        <div className="bg-[#f1f4f8] ">
          <div className="container px-5 py-20 mx-auto ">
            <div className="w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4">
              {footerLinks.map(({ id, title, links }) => (
                <div className="w-auto px-4 " key={id + title}>
                  <h2 className="font-extrabold text-black tracking-widest text-sm mb-3">
                    {title}
                  </h2>

                  <div className="mb-10 flex flex-col gap-3 ">
                    {links.map((link, index) => (
                      <Link
                        key={link + index}
                        to="/"
                        className="text-black text-sm hover:text-blue "
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <div className="container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between ">
              <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                <a className="text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaFacebookF className="text-black" />
                </a>
                <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaTwitter className="text-black" />
                </a>
                <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FiInstagram className="text-black" />
                </a>

                <a className="ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300">
                  <FaLinkedinIn className="text-black" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
