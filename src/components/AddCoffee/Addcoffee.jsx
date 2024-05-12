

const Addcoffee = () => {
    return (
      <div className="">
        <div className=" w-2/3 mx-auto bg-[#F4F3F0] rounded-lg shadow-md p-6 mt-10">
          <h1 className="text-2xl font-bold mb-4 text-center">Add Coffee</h1>
          <p className="text-center px-32">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form className="p-8">
            <div className="">
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label className="block  font-medium text-gray-700 text-xl">
                    Chef
                  </label>
                  <input
                    type="text"
                    name="chef"
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
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block  font-medium text-gray-700 text-xl">
                  Photo
                </label>
                <input
                  type="file"
                  name="category"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-[#D2B48C] font-semibold px-4 py-2 rounded-md hover:bg-[#c49e6c] w-full"
                >
                  Add Coffee
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
};

export default Addcoffee;