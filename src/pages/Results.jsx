import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Results = () => {
  const navigate = useNavigate();

  const exampleCarData = [
    {
      make: "Dodge",
      model: "Ram",
      year: "2022",
      capacity: "4",
      rentalCompany: "Budget",
      insuranceCosts: "$70",
      standardRate: "$120/day",
      premiumRate: "$150/day"
    },
    {
      make: "Honda",
      model: "Civic",
      year: "2024",
      capacity: "4",
      rentalCompany: "Hertz",
      insuranceCosts: "$50",
      standardRate: "$110/day",
      premiumRate: "$140/day"
    }
  ];

  const handleAddToCart = (car) => {
    console.log("Adding to cart:", car);
    navigate('/cart');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D8D7D7]">
      <div className="w-full max-w-4xl p-1 pt-16 space-y-8 bg-[#D8D7D7]">
        <header className="text-center">
          <h1 className="text-4xl text-[#11465E]">Let's Make Your Dream Rental Car... A Reality</h1>
          <p className="text-2xl text-[#040200] mt-4">Results for sample dates</p>
        </header>
        <div className="flex justify-center mt-2">
          <Link to="/shop" className="text-xl text-[#5595AC] hover:underline">Modify Search</Link>
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-[#040200] text-[#D8D7D7]">
                <th className="px-4 py-2 font-light text-2xl">Make</th>
                <th className="px-4 py-2 font-light text-2xl">Model</th>
                <th className="px-4 py-2 font-light text-2xl">Year</th>
                <th className="px-4 py-2 font-light text-2xl">Capacity</th>
                <th className="px-4 py-2 font-light text-2xl">Rental Company</th>
                <th className="px-4 py-2 font-light text-2xl">Insurance Costs</th>
                <th className="px-4 py-2 font-light text-2xl">Standard Rate</th>
                <th className="px-4 py-2 font-light text-2xl">Premium Rate</th>
              </tr>
            </thead>
            <tbody>
              {exampleCarData.map((car, index) => (
                <tr key={index} className="bg-[#D8D7D7] text-xl text-center">
                  <td className="px-4 py-2 text-black">{car.make}</td>
                  <td className="px-4 py-2 text-black">{car.model}</td>
                  <td className="px-4 py-2 text-black">{car.year}</td>
                  <td className="px-4 py-2 text-black">{car.capacity}</td>
                  <td className="px-4 py-2 text-black">{car.rentalCompany}</td>
                  <td className="px-4 py-2 text-black">{car.insuranceCosts}</td>
                  <td className="px-4 py-2 text-black">
                    <div className="flex flex-col items-center">
                      <span>{car.standardRate}</span>
                      <input type="radio" name={`car-${index}`} value="standard" className="mt-1" />
                    </div>
                  </td>
                  <td className="px-4 py-2 text-black">
                    <div className="flex flex-col items-center">
                      <span>{car.premiumRate}</span>
                      <input type="radio" name={`car-${index}`} value="premium" className="mt-1" />
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <button 
                      className="bg-[#040200] hover:bg-gray-800 text-[#5595AC] py-1 px-3 rounded focus:outline-none focus:shadow-outline" 
                      type="button"
                      onClick={() => handleAddToCart(car)}
                    >
                      Add To Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Results;
