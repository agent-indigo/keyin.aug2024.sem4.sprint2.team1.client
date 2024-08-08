import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { vehicle, insuranceOption, insuranceAmount, rentalDays } =
    location.state || {};

  console.log("Received in Cart:", {
    vehicle,
    insuranceOption,
    insuranceAmount,
    rentalDays,
  });

  const [isInsuranceOptedIn, setIsInsuranceOptedIn] = useState(
    insuranceOption === "premium" || insuranceOption === "standard"
  );

  const [pricing, setPricing] = useState({
    subtotal: 0,
    insuranceCost: 0,
    tax: 0,
    totalDue: 0,
  });

  useEffect(() => {
    if (vehicle && rentalDays !== undefined) {
      const rate = isInsuranceOptedIn ? vehicle.premRate : vehicle.stdRate;
      const insuranceCost = isInsuranceOptedIn ? insuranceAmount : 0;
      const subtotal = rate * rentalDays;
      const tax = subtotal * 0.15; 
      const totalDue = subtotal + insuranceCost + tax;

      setPricing({
        subtotal: subtotal.toFixed(2),
        insuranceCost: insuranceCost.toFixed(2),
        tax: tax.toFixed(2),
        totalDue: totalDue.toFixed(2),
      });
    }
  }, [isInsuranceOptedIn, rentalDays, vehicle, insuranceAmount]);

  const handleCheckboxChange = (event) => {
    setIsInsuranceOptedIn(event.target.checked);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D8D7D7]">
      <div className="w-full max-w-4xl p-10 pt-16 space-y-10 bg-[#D8D7D7]">
        <header className="text-center">
          <h1 className="text-4xl text-[#11465E]">YOUR CART</h1>
        </header>
        <div className="space-y-20 mt-4 bg-[#D8D7D7] p-8 rounded">
          <div className="grid grid-row-2 grid-flow-col space-x-12 text-2xl text-center">
            <div>
              {vehicle.manufacturer} {vehicle.model} {vehicle.year}
            </div>
            {/* <div className="pl-2 py-8">{vehicle.rentalCompany}</div> */}
            <div className="col-span-2 text-center px-6">
              <div>Rental Days: {rentalDays}</div>
            </div>
            <div>{vehicle.pickupLocation || "St. John's, NL"}</div>
            <div className="flex flex-col items-start">
              <span className="font-semibold">Insurance Opt-In:</span>
              <div className="flex items-center ml-12 mt-2">
                <input
                  type="checkbox"
                  id="insuranceOptIn"
                  checked={isInsuranceOptedIn}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
              </div>
            </div>
            <div>
              <span className='font-semibold'>
                Insurance:
              </span>
              {' '}{insuranceOption === 'premium' ? 'Premium Insurance' : insuranceOption === 'standard' ? 'Standard Insurance' : 'No Insurance Selected'}
            </div>
          </div>
          <div className="text-2xl mt-4 grid grid-cols-2">
            <div className="font-semibold">Subtotal:</div>
            <div className="ml-[-180px]">${pricing.subtotal}</div>
            <div className="font-semibold">Insurance Cost:</div>
            <div className="ml-[-180px]">${pricing.insuranceCost}</div>
            <div className="font-semibold">Tax:</div>
            <div className="ml-[-180px]">${pricing.tax}</div>
            <div className="font-semibold">Total Due:</div>
            <div className="ml-[-180px]">${pricing.totalDue}</div>
          </div>
          <div className="flex items-center justify-center mt-6">
            <button
              className="w-1/3 p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
              type="submit"
            >
              Checkout
            </button>
          </div>
        </div>
        <footer className="text-center text-sm mt-6">
          Once your order has been placed, you will receive an email and text
          with your confirmation and QR code that you will need to present on
          day of pick up.
        </footer>
      </div>
    </div>
  );
};

export default Cart;
