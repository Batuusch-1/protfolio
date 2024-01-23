export const Work = (props) => {
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
  return (
    <div className="container flex justify-center py-5">
      <div className="w-3/4">
        <div className="w-full flex justify-center py-10">
          <span ref={props.a} className=" bg-gray-400 w-auto rounded-3xl px-4 py-1 ">
            Work
          </span>
        </div>
        <div className="w-full flex justify-center ">
          <p className=" text-2xl p-2">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div>
          <div>
            <div className="xl:flex gap-24 py-5 ">
              <img
                src="/Picture.png"
                alt=""
                className="p-2 bg-gray-100 lg:ml-28 2xl:ml-0"
              />
              <div>
                <h1 className=" text-3xl">Fiskil</h1>
                <p className="w-full text-xl py-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div className="flex gap-4 w-3/4 flex-wrap">
                  {arr.map((el) => (
                    <span className=" bg-gray-200  rounded-3xl px-2  w-fit">
                      {el}
                    </span>
                  ))}
                </div>
                <img src="/sahre.png" alt="" className="py-5" />
              </div>
            </div>
            <div className="xl:flex gap-24 py-5">
              <div>
                <h1 className=" text-3xl">Fiskil</h1>
                <p className="w-full text-xl py-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div className="flex gap-4 w-3/4 flex-wrap">
                  {arr.map((el) => (
                    <span className=" bg-gray-200  rounded-3xl px-2  w-fit">
                      {el}
                    </span>
                  ))}
                </div>
                <img src="/sahre.png" alt="" className="py-5" />
              </div>
              <img
                src="/Picture.png"
                alt=""
                className="p-2 bg-gray-100 lg:ml-28 2xl:ml-0"
              />
            </div>
            <div className="xl:flex gap-24 py-5">
              <img
                src="/Picture.png"
                alt=""
                className="p-2 bg-gray-100 lg:ml-28 2xl:ml-0"
              />
              <div>
                <h1 className=" text-3xl">Fiskil</h1>
                <p className="w-full text-xl py-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante
                  ipsum primis in faucibus orci luctus et ultrices posuere
                  cubilia curae.
                </p>
                <div className="flex gap-4 w-3/4 flex-wrap">
                  {arr.map((el) => (
                    <span className=" bg-gray-200  rounded-3xl px-2  w-fit">
                      {el}
                    </span>
                  ))}
                </div>
                <img src="/sahre.png" alt="" className="py-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
