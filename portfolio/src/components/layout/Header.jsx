export const Header = (props) => {
  return (
    <div className="w-full flex justify-center">
      <div className=" flex justify-between w-3/4 py-10">
        <div className=" text-2xl block cursor-pointer"> {"<SS/>"} </div>
        <div className=" flex justify-around sm:w-2/4 ">
          <div className=" sm:flex gap-10 hidden *:cursor-pointer">
            <p onClick={props.handleClick}>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
          </div>
          <div className="flex gap-10 justify-between">
            <div className="sm:block hidden ">
              {" "}
              <img src="/sun.png" alt="" className="cursor-pointer" />
            </div>
            <div>
              <div
                className=" bg-zinc-900 w-40 rounded-3xl text-white text-center sm:block hidden cursor-pointer"
              >
                Download CV
              </div>
              <div className="block sm:hidden ">
                {" "}
                <img src="/3tseg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
