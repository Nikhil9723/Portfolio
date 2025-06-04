import hug from "../assets/hug 49.svg";
import profilePhoto from "../assets/profilePhoto.svg";

export default function Profile() {
  return (
    <div className="flex flex-col items-center px-10 md:px-5 mx-auto tracking-widest max-w-screen-xl w-full">
      <div className="w-full max-w-screen-xl box-border flex flex-col lg:flex-col xl:flex-row lg:text-left justify-between items-center gap-8 py-10 px-6">
        <div className="tracking-widest flex flex-col gap-6 max-w-md text-center lg:text-center xl:text-left">
          <span className="text-lg md:text-xl font-semibold ">
            Nikhil is a{" "}
            <span className="text-[#C778DD] font-bold">front-end developer</span>
          </span>
          <p className="text-[#ABB2BF] text-base md:text-lg leading-relaxed">
            Crafting seamless, responsive, and interactive web experiences with
            modern front-end technologies.
          </p>
          <button className="w-fit text-white border-l border-[#C778DD] px-6 py-2 box-border text-sm md:text-base font-semibold transition-colors hover:bg-[#C778DD] mx-auto xl:mx-0">
            Contact me!!
          </button>
        </div>
        <img
          className="w-80 rounded-md select-none"
          src={profilePhoto}
          alt="Profile"
          draggable={false}
        />

      </div>

      <div className="flex flex-col items-end">
        <div className=" w-fit border-[1px] p-7  relative border-[#ABB2BF] mt-10">
          <div className="p-2 box-border absolute -top-5 bg-[#282C33]">
            <img src={hug} />
          </div>
          <p className="text-center tracking-widest text-2xl">
            With great power comes great electicity bill
          </p>
        </div>
        <div className=" w-fit border-[1px] px-8 py-3 relative flex justify-end border-[#ABB2BF]">
          <div className="p-2 box-border absolute -top-5 bg-[#282C33]">
            <img src={hug} />
          </div>
          <p className="text-center tracking-widest">- Dr. Who</p>
        </div>
      </div>
    </div>
  );
}
