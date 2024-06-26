import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";



const Home = () => {


const coffees = useLoaderData()

// console.log(coffees);

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
            <button className="bg-[#E3B577] px-2 py-1 mt-6 text-black font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* cover icon section */}
      <div className="bg-[#ECEAE3] ">
        <div className="flex items-center justify-center p-8 gap-12 container mx-auto  ">
          {/* logo-1 */}
          <div className="">
            <img src="../../../public/icons/1.png" alt="" className="w-12" />
            <h2 className="text-xl font-medium mt-3">Awesome Aroma</h2>
            <p>
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          {/* logo-2 */}
          <div className="">
            <img src="../../../public/icons/2.png" alt="" className="w-12" />
            <h2 className="text-xl font-medium mt-3">High Quality</h2>
            <p>We served the coffee to you maintaining the best quality</p>
          </div>
          {/* logo-3 */}
          <div className="">
            <img src="../../../public/icons/3.png" alt="" className="w-12" />
            <h2 className="text-xl font-medium mt-3">Pure Grades</h2>
            <p>
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          {/* logo-4 */}
          <div className="">
            <img src="../../../public/icons/4.png" alt="" className="w-12" />
            <h2 className="text-xl font-medium mt-3">Proper Roasting</h2>
            <p>
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </div>

      {/* product Section */}

      <section className="mt-12">
        <div className="text-center ">
          <p>--- Sip & Savor ---</p>
          <h1 className="text-4xl font-semibold text-[#331a15]">
            Our Popular Products
          </h1>
          <button className="bg-[#E3B577] py-1 px-4 mt-4 border-2 border-[#331A15]">
            <Link to="/addcoffee">Add Coffee</Link>
          </button>
          <div className="container mx-auto my-8">
            <div className="grid grid-cols-2 gap-4 ">
              {coffees.map((coffee) => (
                <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* img Gallary section */}
      <section className="mt-12">
        <div className="text-center my-3 ">
          <p>Follow Us Now</p>
          <h1 className="text-4xl font-semibold text-[#331a15]">
            Follow on Instagram
          </h1>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <img
              src="../../../public/cups/Rectangle 9.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="../../../public/cups/Rectangle 10.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="../../../public/cups/Rectangle 11.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="../../../public/cups/Rectangle 12.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="../../../public/cups/Rectangle 13.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="../../../public/cups/Rectangle 14.png"
              alt="Image 1"
              className="w-full h-auto"
            />

            <img
              src="../../../public/cups/Rectangle 15.png"
              alt="Image 1"
              className="w-full h-auto"
            />
            <img
              src="../../../public/cups/Rectangle 16.png"
              alt="Image 1"
              className="w-full h-auto"
            />

            {/* Add more images as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
