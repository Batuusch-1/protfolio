export const Grey = () => {
  const arr = [
    "React",
    "Next.js",
    "Typescript",
    "Nest.js",
    "PostgreSQL",
    "Tailwindcss",
    "Figma",
    "Cypress",
    "Cypress",
    "Git",
  ];
  const arr2 = {
    name: "Fiskil",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    icon: "/sahre.png",
  };
  return (<div>
    <div className="flex gap-24 py-5">
      
      <img src="/Picture.png" alt="" className="p-2 bg-gray-100"/>
      
      <div>
         <h1 className=" text-3xl">Fiskil</h1>
         <p className="w-full text-xl py-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        <div className="flex gap-4 w-3/4 flex-wrap">
        {arr.map((el) => (
          <span className=" bg-gray-200  rounded-3xl px-2  w-fit">{el}</span>
        ))}</div>
        <img src="/sahre.png" alt=""  className="py-5"/>
      </div>
    </div>
    <div className="flex gap-24 py-5">
      <div>
         <h1 className=" text-3xl">Fiskil</h1>
         <p className="w-full text-xl py-5 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        <div className="flex gap-4 w-3/4 flex-wrap">
        {arr.map((el) => (
          <span className=" bg-gray-200  rounded-3xl px-2  w-fit">{el}</span>
        ))}</div>
        <img src="/sahre.png" alt=""  className="py-5"/>
      </div>
      <img src="/Picture.png" alt=""  className="p-2 bg-gray-100"/>
    </div>
    <div className="flex gap-24 py-5">
      <img src="/Picture.png" alt="" className="p-2 bg-gray-100"/>
      <div>
         <h1 className=" text-3xl">Fiskil</h1>
         <p className="w-full text-xl py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
        <div className="flex gap-4 w-3/4 flex-wrap">
        {arr.map((el) => (
          <span className=" bg-gray-200  rounded-3xl px-2  w-fit">{el}</span>
        ))}</div>
        <img src="/sahre.png" alt=""  className="py-5"/>
      </div>
    </div>
    </div>
  );
};
