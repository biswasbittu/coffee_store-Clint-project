import React from 'react';

const CoffeeCard = ({coffee}) => {
    console.log(coffee);
              
    const { _id,category, name, details, photo, supplier, quentity } = coffee;
    return (
      <div>
        <div className="card card-side h-64  bg-[#F5F4F1] shadow-lg">
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
          <div className=" flex items-center justify-between  w-full pr-12 ">
            <div>
              <h2 className="card-title ">
                <span className="font-bold text-xl text-black">Name:</span>
                <span className="text-gray-400">{name}</span>
              </h2>
              <h2 className="card-title mt-2">
                <span className="font-bold text-xl">chef:</span>
                <span className="text-gray-400">{supplier}</span>
              </h2>
              <h2 className="card-title mt-2">
                <span className="font-bold text-xl">Quantity:</span>
                <span className="text-gray-400">{quentity}</span>
              </h2>
            </div>
            <div className="flex flex-col space-y-4">
              <button className="btn btn-active">view</button>
              <button className="btn  btn-accent">Edit</button>
              <button className="btn btn-error">X</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CoffeeCard;