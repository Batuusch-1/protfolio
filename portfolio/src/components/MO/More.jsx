// export const More =()=>{
//    return  <div
//    className={`w-full flex justify-center sm:hidden ${
//      showMenu ? "block" : "hidden"
//    }`}
//  >
//    <div
//      className={`w-3/4 flex flex-col items-start absolute h-[60%] sm:hidden bg-orange-100 border rounded-xl `}
//    >
//      <div className="w-full flex justify-between py-5 px-2">
//        <h1 className="text-4xl">{`<SS/>`}</h1>

//        <img
//          onClick={toggleMenu}
//          src="/x.png"
//          alt=""
//          className="max-w-auto "
//        />
//      </div>

//      <p className="text-2xl px-4 py-2 " onClick={props.handleClick1}>
//        About
//      </p>
//      <p className="text-2xl px-4 py-2" onClick={props.handleClick2}>
//        Work
//      </p>
//      <p className="text-2xl px-4 py-2" onClick={props.handleClick3}>
//        Testimonials
//      </p>
//      <p className="text-2xl px-4 py-2" onClick={props.handleClick4}>
//        Contact
//      </p>
//      <div className="flex gap-14 py-2">
//        <p className="text-2xl px-4">Switch theme</p>{" "}
//        <img
//          src="/sun.png"
//          alt=""
//          className="cursor-pointer sm:max-w-auto py-2"
//        />
//      </div>
//      <div
//        onClick={() => download(fileUrl, filename)}
//        className="m-auto py-1 bg-zinc-900 w-40 rounded-3xl text-white text-center sm:block  cursor-pointer"
//      >
//        Download CV
//      </div>
//    </div>
//  </div>