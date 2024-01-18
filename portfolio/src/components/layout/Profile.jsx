export const Profile = () => {
  return (
    <div className=" w-full flex justify-center py-20">
    <div className="flex w-3/4">
      <div>
        <div>
          <h1 className=" text-6xl">Hi, I’m Sagar 👋</h1>
          <p className="w-3/4 p-3">
            I'm a full stack developer (React.js & Node.js) with a focus on
            creating (and occasionally designing) exceptional digital
            experiences that are fast, accessible, visually appealing, and
            responsive. Even though I have been creating web applications for
            over 7 years, I still love it as if it was something new.
          </p>
        </div>
        <div>
          <div className="flex gap-5 p-1">
            {" "}
            <img src="/location-icon.png" alt="" />
            <p>Ahmedabad, India</p>
          </div>
          <div className="flex gap-5 p-1">
            <img src="/green-dot.png" alt="" className="w-2 h-2 m-2" />
            <p>Available for new projects</p>
          </div>
        </div>
        <div className="flex gap-2 py-3">
          {" "}
          <img src="/git-logo.png" alt="" />
          <img src="/twitter.png" alt="" />
          <img src="/sonin.png" alt="" />
        </div>
      </div>
      <div className="w-2/3 ">
        <img src="/Pic 2.png" alt="" className="w-full shadow1" />
      </div>
    </div>
    </div>
  );
};
