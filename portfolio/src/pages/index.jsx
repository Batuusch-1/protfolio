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

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="container">
        <Header />
        <Profile />
        <About/>
        <Skills/>
      </div>
    </div>
  );
}
