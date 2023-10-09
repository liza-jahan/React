import React from "react";

function Delivery() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <h3 className="text-red-500 font-bold text-2xl text-center">
        Quick Delivery App
      </h3>
      <div className="w-[1420px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[550px] mx-auto my-4"
          src="https://www.burgerfuel.com/uploads/media/65039bd897a48/home-page-image-750px.png"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Limitless Convenience On-demo
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non
            metus odio. Morbi ac mattis mauris, nec tincidunt neque. Nulla
            facilisi. Aenean vestibulum at lorem eu tincidunt. Etiam ultricies,
            metus quis ullamcorper pharetra, augue nibh dictum purus, sed
            euismod ante ligula eu eros. Nullam auctor mi eu mi tristique, id
            auctor risus interdum. Integer eu quam in ligula bibendum
            pellentesque. In hac habitasse platea dictumst. Quisque eget aliquet
            risus. Nunc dapibus varius lorem, eget bibendum erat mattis non.
            Nulla vitae ex quis odio placerat tincidunt a ut libero. Nulla
            hendrerit facilisis odio, at gravida neque dignissim id. Aliquam
            erat volutpat. Proin elementum justo vel justo interdum, ut
            tincidunt eros congue. Maecenas et nulla metus.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md;mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
