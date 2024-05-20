import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatedCoffee = () => {

    const coffee= useLoaderData()
    console.log(coffee.category);
  const { _id, category, name, details, photo, supplier, quentity,test } = coffee;



     const handleUpdatedCoffee = (e) => {
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const quentity = form.quentity.value;
       const supplier = form.supplier.value;
       const test = form.test.value;
       const category = form.category.value;
       const details = form.details.value;
       const photo = form.photo.value;
       const newCoffee = {
         name,
         quentity,
         supplier,
         test,
         category,
         details,
         photo,
       };

       // send data to db
      
       form.reset();
     };
    return (
      <>
        <div className="">
          <Link to="/">Back To Home</Link>
          <div className=" w-2/3 mx-auto bg-[#F4F3F0] rounded-lg shadow-md p-6 mt-10">
            <h1 className="text-2xl font-bold mb-4 text-center">
              Updated Coffee
            </h1>
            <p className="text-center px-32">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <form onSubmit={handleUpdatedCoffee} className="p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Coffee Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Quentity
                  </label>
                  <input
                    type="text"
                    name="quentity"
                    value={quentity}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Supplier
                  </label>
                  <input
                    type="text"
                    name="supplier"
                    value={supplier}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Taste
                  </label>
                  <input
                    type="text"
                    name="test"
                    value={test}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={category}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Details
                  </label>
                  <input
                    type="text"
                    name="details"
                    value={details}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block  font-medium text-gray-700 text-xl">
                  Photo
                </label>
                <input
                  type="url"
                  name="photo"
                  value={photo}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div className='text-center'>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={photo} />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#D2B48C] font-semibold px-4 py-2 border-2 border-[#331A15] rounded-md hover:bg-[#c49e6c] w-full"
                >
                  Updateed Coffee
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
};

export default UpdatedCoffee;