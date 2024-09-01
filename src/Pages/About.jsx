import React from "react";
import JobImg from "../assets/job.jpg";
import Footer from "../Components/Footer";

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
      <Footer />
    </>
  );
};

export default About;
