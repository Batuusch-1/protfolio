export const Skills = () => {
  const arr = [
    "/icon-javscript.png",
    "/icon-typescript.png",
    "/icon-react.png",
    "/icon-nextjs.png",
    "/icon-nodejs.png",
    "/icon-express.png",
    "/icon-nest.png",
    "/icon-socket.png",
  ];
  const arr2 =[
    "/icon-postgresql.png",
    "/Tech.png",
    "/icon-sass.png",
    "/icon-tailwindcss.png",
    "/icon-figma.png",
    "/icon-cypress.png",
    "/icon-storybook.png",
    "/git-logo.png",
  ]
  return (
    <div className="container flex justify-center py-5">
      <div className="w-3/4">
        <div className="w-full flex justify-center py-20">
          <span className=" bg-gray-400 w-auto rounded-3xl px-4 py-1 ">
            Skills
          </span>
        </div>
        <div className="w-full flex justify-center ">
          <p className=" text-2xl p-5">The skills, tools and technologies I am really good at:</p>
        </div>
        <div className="w-full h-40 flex gap-16 flex-wrap justify-center py-10">
          {arr.map((el) => (
            <img src={el} alt="" className="w-20 h-20" />
          ))}
        </div>
        <div className="w-full h-40 flex gap-16 flex-wrap justify-center py-10">
          {arr2.map((el) => (
            <img src={el} alt="" className="w-20 h-20" />
          ))}
        </div>
      </div>
    </div>
  );
};
