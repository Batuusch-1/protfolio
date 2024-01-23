import { More } from "../MO/More";
import { useState } from "react"
import useDownloader from "react-use-downloader";
export const Header = (props) => {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = "/2icon.png";
  const filename = "beautiful-carpathia.png";
  const [showMenu , setShowMenu] =useState(false)
  const toggleMenu=()=>{
    setShowMenu(!showMenu)
  }
  return (
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
                <img src="/3tseg.png" alt="" className=" cursor-pointer" onClick={toggleMenu} />
                <div className={` ${showMenu ? "block" : "hidden"}`}>
                  <More/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
