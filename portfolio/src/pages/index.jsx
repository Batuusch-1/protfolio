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
import { useRef } from "react";
export default function Home() {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    console.log(ref);
  };
  return (
    <div className="flex justify-center">
      <div className="container">
        <Header handleClick={handleClick} />
        <Profile />
        <About ref={ref} />
        <Skills/>
        <Experience />
        <Work />
        <GetInTouch />
        <Footer />
      </div>
    </div>
  );
}
