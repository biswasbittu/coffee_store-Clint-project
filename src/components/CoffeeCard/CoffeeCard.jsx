import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, category, name, details, photo, supplier, quentity } = coffee;

  const handleDelete = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //  Swal.fire({
        //    title: "Deleted!",
        //    text: "Your file has been deleted.",
        //    icon: "success",
        //  });
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.deletedCount>0){
              Swal.fire({
           title: "Deleted!",
           text: "Your file has been deleted.",
           icon: "success",
         });
            }
          });
      }
    });
  };

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
            <button onClick={() => handleDelete(_id)} className="btn btn-error">
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
