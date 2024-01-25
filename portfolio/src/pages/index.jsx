import {
  Header,
  Profile,
  About,
  Skills,
  Experience,
  Work,
  GetInTouch,
  Footer,
} from "@/components/layout";
import { useEffect, useRef, useState } from "react";
export default function Home() {

  const about = useRef(null);
  const work = useRef(null);
  const Testimonials = useRef(null);
  const Contact = useRef(null);
  const handleClick1 = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
    console.log("1");
  };
  const handleClick2 = () => {
    work.current?.scrollIntoView({ behavior: "smooth" });
    console.log("2");
  };
  const handleClick3 = () => {
    Testimonials.current?.scrollIntoView({ behavior: "smooth" });
    console.log("3");
  };
  const handleClick4 = () => {
    Contact.current?.scrollIntoView({ behavior: "smooth" });
    console.log("4");
  };
  return (
    <div className=" flex justify-center">
      <div className="container">
        <Header
          handleClick1={handleClick1}
          handleClick2={handleClick2}
          handleClick3={handleClick3}
          handleClick4={handleClick4}
       
        />
        <Profile />
        <About a={about} />
        <Skills a={Testimonials} />
        <Experience a={Contact} />
        <Work a={work} />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
