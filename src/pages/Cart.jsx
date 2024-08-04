import {useState} from 'react'
const Cart = () => {
  const [isInsuranceOptedIn, setIsInsuranceOptedIn] = useState(false)
  const handleCheckboxChange = event => setIsInsuranceOptedIn(event.target.checked)
  const cartData = {
    car: {
      make: 'Honda',
      model: 'Civic',
      year: '2024',
      rentalCompany: 'Hertz',
      pickupLocation: 'St. John\'s, NL',
      pickupDate: '2024-08-18',
      returnDate: '2024-08-26',
      insuranceOption: '', 
      rateOption: 'Premium Rate'
    },
    pricing: {
      subtotal: '$1120',
      insuranceCost: '$50',
      tax: '$175.50',
      totalDue: '$1345.50'
    }
  }
  return (
    <div className='flex justify-center items-center min-h-screen bg-[#D8D7D7]'>
      <div className='w-full max-w-4xl p-10 pt-16 space-y-10 bg-[#D8D7D7]'>
        <header className='text-center'>
          <h1 className='text-4xl text-[#11465E]'>
            YOUR CART
          </h1>
        </header>
        <div className='space-y-20 mt-4 bg-[#D8D7D7] p-8 rounded'>
          <div className='grid grid-row-2 grid-flow-col space-x-12 text-2xl text-center'>
            <div>
              {cartData.car.make}{' '}
              {cartData.car.model}{' '}
              {cartData.car.year}
            </div>
            <div className='pl-2 py-8'>
              {cartData.car.rentalCompany}
            </div>
            <div className='col-span-2 text-center px-6'>
              <div>
                {cartData.car.pickupDate}
              </div>
              <div className='text-lg'>
                to
              </div>
              <div>
                {cartData.car.returnDate}
              </div>
            </div>
            <div>
              {cartData.car.pickupLocation}
            </div>
            <div className='flex flex-col items-start'>
              <span className='font-semibold'>
                Insurance Opt-In:
              </span>
              <div className='flex items-center ml-12 mt-2'>
                <input 
                  type='checkbox' 
                  id='insuranceOptIn' 
                  checked={isInsuranceOptedIn}
                  onChange={handleCheckboxChange}
                  className='mr-2'
                />
              </div>
            </div>
            <div>
              <span className='font-semibold'>
                Rate:
              </span>
              {' '}{cartData.car.rateOption}
            </div>
          </div>
          <div className='text-2xl mt-4 grid grid-cols-2'>
            <div className='font-semibold'>
              Subtotal:
            </div>
            <div className='ml-[-180px]'>
              {cartData.pricing.subtotal}
            </div>  
            <div className='font-semibold'>
              Insurance Cost:
            </div>
            <div className='ml-[-180px]'>
              {cartData.pricing.insuranceCost}
            </div>
            <div className='font-semibold'>
              Tax:
            </div>
            <div className='ml-[-180px]'>
              {cartData.pricing.tax}
            </div>
            <div className='font-semibold'>
              Total Due:
            </div>
            <div className='ml-[-180px]'>
              {cartData.pricing.totalDue}
            </div>
          </div>
          <div className='flex items-center justify-center mt-6'>
            <button 
              className='w-1/3 p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400' 
              type='submit'
            >
              Checkout
            </button>
          </div>
        </div>
        <footer className='text-center text-sm mt-6'>
          Once your order has been placed, you will receive an email and text with your confirmation and QR code that you will need to present on day of pick up.
        </footer>
      </div>
    </div>
  )
}
export default Cart