export const Experience = (props) => {
  const arr = [
    {
      logo: "/logo-upwork.png",
      title: "Sr. Frontend Developer",
      content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      content3: "Sed quis justo ac magna.",
      content4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Nov 2021 - Present",
    },
    {
      logo: "/logo-upwork.png",
      title: "Team Lead",
      content1: "Sed quis justo ac magna.",
      content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content3: "Sed quis justo ac magna.",
      content4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Jul 2017 - Oct 2021",
    },
    {
      logo: "/logo-upwork.png",
      title: "Full Stack Developer",
      content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      content2: "Ut pretium arcu et massa semper, id fringilla leo semper.",
      content3: "Sed quis justo ac magna.",
      content4: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Dec 2015 - May 2017",
    },
  ];
  return (
    <div ref={props.a}
      className="container flex justify-center py-5 bg-gray-100"
    >
      <div className="w-3/4 ">
        <div className="w-full flex justify-center py-20">
          <span className=" bg-gray-400 w-auto rounded-3xl px-3 py-1 ">
            Experience
          </span>
        </div>
        <div className="w-full flex justify-center ">
          <p className=" text-2xl p-2">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div>
          {arr.map((el) => (
            <div className="sm:flex bg-white  justify-around m-14 sm:py-5 rounded-lg shadow-xl  p-2 ">
              <div>
                <img src={el.logo} alt="" className="py-2" />{" "}
              </div>
              <div>
                <h1>{el.title}</h1>
                <li>{el.content1}</li>
                <li>{el.content2}</li>
                <li>{el.content3}</li>
                <li>{el.content4}</li>
              </div>
              <div>{el.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
