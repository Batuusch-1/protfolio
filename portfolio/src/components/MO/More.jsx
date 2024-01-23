export const More =()=>{
   return  <div >
   <p>About</p>
   <p>Work</p>
   <p>Testimonials</p>
   <p>Contact</p>
   <div className="flex">
     <p>Switch theme</p>{" "}
     <img src="/sun.png" alt="" className="cursor-pointer sm:max-w-10" />
   </div>
   <div className=" bg-zinc-900 w-40 rounded-3xl text-white text-center sm:block  cursor-pointer">
     Download CV
   </div>
 </div>
}