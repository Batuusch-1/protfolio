export const Header = () => {
  return (
    <div className="w-full flex justify-center ">
    <div className=" flex justify-between w-3/4 py-10">
      <div className=" text-2xl"> SS </div>
      <div className=" flex justify-around w-2/4 ">
        <div className=" flex gap-10">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
        </div>
        <div className="flex gap-10">
          <div>
            {" "}
            <img src="/sun.png" alt="" />
          </div>
          <div>
            <div className=" bg-zinc-900 w-auto rounded-3xl p-1 px-4 text-white">
              Download CV
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
