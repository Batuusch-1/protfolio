export const Skills = (props) => {
  const arr = [
    { name: "/icon-javscript.png", name1: "Java script" },
    { name: "/icon-typescript.png", name1: "Type cript" },
    { name: "/icon-react.png", name1: "React" },
    { name: "/icon-nextjs.png", name1: "Next.js" },
    { name: "/icon-nodejs.png", name1: "Node.js" },
    { name: "/icon-express.png", name1: "Express.png" },
    { name: "/icon-nest.png", name1: "Nest.png" },
    { name: "/icon-socket.png", name1: "Javascript" },
  ];
  const arr2 = [
    { name: "/icon-postgresql.png", name1: "Postgres" },
    { name: "/Tech.png", name1: "Tech" },
    { name: "/icon-sass.png", name1: "Sass/Scss" },
    { name: "/icon-tailwindcss.png", name1: "Tailwind/css" },
    { name: "/icon-figma.png", name1: "Figma" },
    { name: "/icon-cypress.png", name1: "Cypress" },
    { name: "/icon-storybook.png", name1: "Storybook" },
    { name: "/icon-git.png", name1: "Git" },
  ];

  return (
    <div ref={props.a} className="container flex justify-center py-5">
      <div className="w-3/4">
        <div className="w-full flex justify-center py-10">
          <span className=" bg-gray-400 w-auto rounded-3xl px-4 py-1 ">
            Skills
          </span>
        </div>
        <div className="w-full flex justify-center ">
          <p className=" text-2xl p-2">
            The skills, tools and technologies I am really good at:
          </p>
        </div>
        <div className="flex flex-col">
          <div className="w-full flex gap-16 flex-wrap justify-center py-10">
            {arr.map((el) => (
              <div>
                {" "}
                <img src={el.name} alt="" className="py-2" /> {el.name1}
              </div>
            ))}
          </div>
          <div className="w-full flex gap-16 flex-wrap justify-center py-10">
            {arr2.map((el) => (
              <div className="">
                {" "}
                <img src={el.name} alt="" className="py-2" /> {el.name1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
