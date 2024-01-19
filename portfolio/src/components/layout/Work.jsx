import { Grey } from "../ui/Graybutton";
export const Work = () => {
  return (
    <div className="container flex justify-center py-5">
      <div className="w-3/4">
        <div className="w-full flex justify-center py-10">
          <span className=" bg-gray-400 w-auto rounded-3xl px-4 py-1 ">
            Work
          </span>
        </div>
        <div className="w-full flex justify-center ">
          <p className=" text-2xl p-2">
            Some of the noteworthy projects I have built:
          </p>
        </div>
        <div >
          <Grey />
        </div>
      </div>
    </div>
  );
};
