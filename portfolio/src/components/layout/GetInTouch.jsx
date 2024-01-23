export const GetInTouch = () => {
  return (
    <div className="container flex justify-center py-5">
      <div className="w-3/4">
        <div className="w-full flex justify-center py-10">
          <span className=" bg-gray-400 w-auto rounded-3xl px-4 py-1 ">
            Get in touch
          </span>
        </div>
        <div className="w-full flex items-center flex-col gap-10 ">
          <p className=" text-2xl p-2 w-3/5 text-center">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
          <div className="flex flex-col *:flex *:gap-5 *:py-3 *:text-xl items-center">
            <div className="">
              {" "}
              <img src="/messege-logo.png" alt=""/>
              <h1 className="sm:text-4xl text-2xl" >Reachsagarshah@gmail.com</h1> <img src="/2icon.png" alt="" />
            </div>
            <div>
              <img src="/phone.png" alt="" /> <h1 className="sm:text-4xl text-2xl">+91 8980500565</h1>{" "}
              <img src="/2icon.png" alt="" />
            </div>
            <p>You may also find me on these platforms!</p>
            <div>
              <img src="/git-logo.png" alt="" />
              <img src="/twitter.png" alt="" />
              <img src="/sonin.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
