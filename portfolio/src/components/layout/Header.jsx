import { useState } from "react";
import useDownloader from "react-use-downloader";
export const Header = (props) => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = "/2icon.png";
  const filename = "beautiful-carpathia.png";
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div>
      {showMenu && (
        <div>
          <div
            onClick={toggleMenu}
            className="bg-black bg-opacity-30 w-[100vw] h-[100vh] absolute left-0 top-0 flex justify-end"
          ></div> 
          <div className="bg-white h-[100vh] w-[85%] p-5 absolute top-0 right-0">
            <div className="flex justify-between p-5">
              <h1 className="text-4xl">{`<SS/>`}</h1>
              <button onClick={toggleMenu} className="text-4xl">
                X
              </button>
            </div>
            <p className="text-2xl px-4 py-2 " onClick={props.handleClick1}>
              About
            </p>
            <p className="text-2xl px-4 py-2" onClick={props.handleClick2}>
              Work
            </p>
            <p className="text-2xl px-4 py-2" onClick={props.handleClick3}>
              Testimonials
            </p>
            <p className="text-2xl px-4 py-2" onClick={props.handleClick4}>
              Contact
            </p>
            <div className="flex gap-14 py-2">
              <p className="text-2xl px-4">Switch theme</p>{" "}
              <img
                src="/sun.png"
                alt=""
                className="cursor-pointer sm:max-w-auto py-2"
              />
            </div>
            <div
              onClick={() => download(fileUrl, filename)}
              className="m-auto py-1 bg-zinc-900 w-40 rounded-3xl text-white text-center sm:block  cursor-pointer"
            >
              Download CV
            </div>
          </div>
        </div>
      )}
      <div className="w-full flex justify-center">
        <div className=" flex justify-between w-3/4 py-10">
          <div className=" text-2xl block cursor-pointer"> {"<SS/>"} </div>
          <div className=" flex justify-around sm:w-2/4 ">
            <div className=" sm:flex sm:gap-7 hidden *:cursor-pointer ">
              <p onClick={props.handleClick1}>About</p>
              <p onClick={props.handleClick2}>Work</p>
              <p onClick={props.handleClick3}>Testimonials</p>
              <p onClick={props.handleClick4}>Contact</p>
            </div>
            <div className="flex gap-4 justify-between  ">
              <div className="sm:block hidden">
                {" "}
                <img
                  src="/sun.png"
                  alt=""
                  className="cursor-pointer sm:max-w-10"
                />
              </div>
              <div>
                <div
                  onClick={() => download(fileUrl, filename)}
                  className=" bg-zinc-900 w-40 rounded-3xl text-white text-center sm:block hidden cursor-pointer"
                >
                  Download CV
                </div>
                <div className="block sm:hidden ">
                  {" "}
                  <img
                    src="/3tseg.png"
                    alt=""
                    className=" cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
