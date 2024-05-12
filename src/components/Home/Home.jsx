const Home = () => {
  return (
    <div>
      {/* cover imge Section */}
      <div className=" bg-cover md:bg-inherit md:h-screen  ">
        {/* <img src="../../../public/more/logo1.png" alt="" className='' /> */}
        <div className="absolute top-1/2 md:left-1/2  ">
          <div className="text-white  w-2/3  ">
            <h2 className="text-2xl  font-bold">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="mt-6">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] px-2 py-1 mt-6 text-black">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* cover icon section */}
      <div className="bg-[#ECEAE3] h-60"> Icon section</div>
    </div>
  );
};

export default Home;
