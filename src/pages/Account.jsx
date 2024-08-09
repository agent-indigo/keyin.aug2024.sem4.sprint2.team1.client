import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { contactId } = location.state || {};
  const [accountInfo, setAccountInfo] = useState({
    first: '',
    last: '',
    email: '',
    number: '',
    street: '',
    city: '',
    prov: '',
    postal: '',
  });

useEffect(() => {
  const fetchAccountInfo = async () => {
    try {
      const contactResponse = await axios.get(`/contacts/${contactId}`);
      const contact = contactResponse.data;

      const phoneResponse = await axios.get(`/phones/${contactId}`);
      const phone = phoneResponse.data;

      const addressResponse = await axios.get(`/addresses/${contactId}`);
      const address = addressResponse.data;

      setAccountInfo({
        first: contact.first,
        last: contact.last,
        email: contact.email,
        number: phone.number,
        street: address.street, 
        city: address.city, 
        prov: address.prov, 
        postal: address.postal, 
      });
    } catch (error) {
      console.error("Failed to fetch account info:", error);
    }
  };
  fetchAccountInfo();
}, [contactId]);


const handleInputChange = (e) => {
  const { id, value } = e.target;
  setAccountInfo((prevState) => ({
    ...prevState,
    [id]: value,
  }));
};

const handleEdit = async () => {
  navigate('/update', { state: { contactId } });
};

const handleDelete = async () => {
  try {
    await axios.delete(`/contacts/${contactId}`);
    await axios.delete(`/phones/${contactId}`);
    await axios.delete(`/addresses/${contactId}`);
    alert('Account deleted successfully');
  } catch (error) {
    console.error("Failed to delete account:", error);
  }
};


  return (
    <div className='flex justify-center items-center min-h-screen bg-[#D8D7D7]'>
      <div className='w-full max-w-4xl p-10 pt-16 space-y-10 bg-[#D8D7D7]'>
        <div className='px-60'>
          <h2 className='text-4xl text-[#040200] text-center'>
            MY ACCOUNT
          </h2>
          <form className='space-y-6 mt-8'>
            {[
              {
                id: 'first',
                label: 'First Name',
                value: accountInfo.first
              },
              {
                id: 'last',
                label: 'Last Name',
                value: accountInfo.last
              },
              {
                id: 'email',
                label: 'Email',
                type: 'email',
                value: accountInfo.email
              },
              {
                id: 'number',
                label: 'Phone Number',
                type: 'tel',
                value: accountInfo.number
              },
              {
                id: 'street',
                label: 'Street Address',
                value: accountInfo.street
              },
              {
                id: 'city',
                label: 'City',
                value: accountInfo.city
              },
              {
                id: 'prov',
                label: 'Province',
                value: accountInfo.prov
              },
              {
                id: 'postal',
                label: 'Postal Code',
                value: accountInfo.postal
              },
            ].map(({
              id,
              label,
              type = 'text',
              value
            }) => (
              <div
                key={id}
                className='flex items-center'
              >
                <label
                  htmlFor={id}
                  className='w-1/3 text-xl text-[#040200]'
                >
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  value={value}
                  className='w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400'
                  disabled
                />
              </div>
            ))}
          </form>
          <div className='flex justify-center space-x-4 mt-6'>
            <button
              onClick={handleEdit}
              className='w-32 px-4 py-2 text-[#5595AC] bg-[#040200] rounded'
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className='w-32 px-4 py-2 text-[#5595AC] bg-[#040200] rounded'
            >
              Delete
            </button>
          </div>
        </div>
        
        {/* Order History Section */}
        <div>
          <h3 className='text-3xl text-[#040200] text-center'>
            MY HISTORY
          </h3>
          <table className='min-w-full mt-8 bg-white'>
            <thead>
              <tr>
                <th className='px-4 py-2 border'>
                  Rental Company
                </th>
                <th className='px-4 py-2 border'>
                  Car Make
                </th>
                <th className='px-4 py-2 border'>
                  Car Model
                </th>
                <th className='px-4 py-2 border'>
                  Pickup Date
                </th>
                <th className='px-4 py-2 border'>
                  Return Date
                </th>
                <th className='px-4 py-2 border'>
                  Total Cost
                </th>
                <th className='px-4 py-2 border'>
                  Transaction #
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='px-4 py-2 border'>
                  Budget
                </td>
                <td className='px-4 py-2 border'>
                  Honda
                </td>
                <td className='px-4 py-2 border'>
                  Civic
                </td>
                <td className='px-4 py-2 border'>
                  2023-07-31
                </td>
                <td className='px-4 py-2 border'>
                  2023-08-07
                </td>
                <td className='px-4 py-2 border'>
                  $600
                </td>
                <td className='px-4 py-2 border'>
                  123456
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Account