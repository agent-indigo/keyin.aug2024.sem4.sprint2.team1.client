import React from 'react';

const Home = () => {
  return (
    <div className="text-center bg-[#D8D7D7]">
      <div className="bg-[#D8D7D7] text-[#11465E] py-8 h-10">
        <h2 className="text-4xl font-bold">We Take the Bite Out of Your Car Rental Troubles</h2>
      </div>
      <div className="flex justify-center py-8 h-auto">
      <img src="./images/Car.png" alt="Cars at Sunset" className="h-64 w-auto" />
        <img src="./images/SUV.png" alt="Cars at Sunset" className="h-64 w-auto" />
        <img src="./images/Van.png" alt="Cars at Sunset" className="h-64 w-auto" />
        <img src="./images/CarCollage.png" alt="Cars at Sunset" className="h-64 w-auto" />

      </div>

        <div className="bg-[#D8D7D7] py-8">
        <div className="flex flex-col md:flex-row items-start justify-between mx-8">
          <div className="flex-1">
            <h3 className="text-4xl font-semibold text-[#11465E]">BARK Car Rental Service</h3>
            <p className="text-lg mt-4">
              BARK Car Rental App is your go-to platform for finding the best car rental deals. 
              It lets you search through various rental agencies to compare prices and availability, 
              ensuring you get the best option for your needs.
            </p>
          </div>

          <div className="flex-1 flex flex-col justify-center mt-8 md:mt-0">
            <div className="flex flex-col space-y-4 text-3xl text-[#11465E] text-left pl-36">
              <p className="flex items-center">
                <span className="material-icons text-3xl rounded-full p-2 mr-2">check_circle</span>
                Easy Booking
              </p>
              <p className="flex items-center">
                <span className="material-icons text-3xl rounded-full p-2 mr-2">check_circle</span>
                Cars for Everyone
              </p>
              <p className="flex items-center">
                <span className="material-icons text-3xl rounded-full p-2 mr-2">check_circle</span>
                Insurance Options
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

