export const About = () => {
  return (
    <div className="container flex justify-center py-5 bg-gray-100">
      <div className="w-3/4 ">
        <div className="w-full flex justify-center py-20">
          <span className=" bg-gray-400 w-auto rounded-3xl px-3 py-1 ">
            About me
          </span>
        </div>
        <div className="flex gap-40">
          <div>
            <img src="/Pic.png" alt="" className="shadow2 w-4/4" />
          </div>
          <div className="w-2/4 *:p-2">
            <h1>Curious about me? Here you have it:</h1>
            <p>
              I'm a passionate, self-proclaimed designer who specializes in full
              stack development (React.js & Node.js). I am very enthusiastic
              about bringing the technical and visual aspects of digital
              products to life. User experience, pixel perfect design, and
              writing clear, readable, highly performant code matters to me.
            </p>
            <p>
              I began my journey as a web developer in 2015, and since then,
              I've continued to grow and evolve as a developer, taking on new
              challenges and learning the latest technologies along the way.
              Now, in my early thirties, 7 years after starting my web
              development journey, I'm building cutting-edge web applications
              using modern technologies such as Next.js, TypeScript, Nestjs,
              Tailwindcss, Supabase and much more.
            </p>
            <p>
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <p>
              When I'm not in full-on developer mode, you can find me hovering
              around on twitter or on indie hacker, witnessing the journey of
              early startups or enjoying some free time. You can follow me on
              Twitter where I share tech-related bites and build in public, or
              you can follow me on GitHub.
            </p>
            <p>Finally, some quick bits about me.</p>
            <div className="flex gap-10">
              <div className=" *:py-2">
                <ul>
                  <li>B.E. in Computer Engineering</li>
                </ul>
                <ul>
                  <li>Full time freelancer</li>
                </ul>
              </div>
              <div className=" *:py-2">
                <ul>
                  <li>Avid learner</li>
                </ul>
                <ul>
                  <li>Aspiring indie hacker</li>
                </ul>
              </div>
            </div>
            <p>
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
