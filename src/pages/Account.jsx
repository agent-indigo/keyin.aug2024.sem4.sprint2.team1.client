import React from 'react';

const MyAccount = () => {
  const accountInfo = {
    firstName: 'Kyla',
    lastName: 'Leaman',
    email: 'kyla.leaman@keyin.com',
    phoneNumber: '709-555-0528',
    streetAddress: '123 Main St',
    city: 'Paradise',
    province: 'Newfoundland',
    postalCode: 'A1L 0H1',
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D8D7D7]">
      <div className="w-full max-w-4xl p-10 pt-16 space-y-10 bg-[#D8D7D7]">
        <div className="px-60">
          <h2 className="text-4xl text-[#040200] text-center">MY ACCOUNT</h2>
          <form className="space-y-6 mt-8">
            {[
              { id: 'firstName', label: 'First Name', value: accountInfo.firstName },
              { id: 'lastName', label: 'Last Name', value: accountInfo.lastName },
              { id: 'email', label: 'Email', type: 'email', value: accountInfo.email },
              { id: 'phoneNumber', label: 'Phone Number', type: 'tel', value: accountInfo.phoneNumber },
              { id: 'streetAddress', label: 'Street Address', value: accountInfo.streetAddress },
              { id: 'city', label: 'City', value: accountInfo.city },
              { id: 'province', label: 'Province', value: accountInfo.province },
              { id: 'postalCode', label: 'Postal Code', value: accountInfo.postalCode },
            ].map(({ id, label, type = 'text', value }) => (
              <div key={id} className="flex items-center">
                <label htmlFor={id} className="w-1/3 text-xl text-[#040200]">{label}</label>
                <input
                  type={type}
                  id={id}
                  value={value}
                  className="w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
                  disabled
                />
              </div>
            ))}
          </form>
        </div>
        <div>
          <h3 className="text-3xl text-[#040200] text-center">MY HISTORY</h3>
          <table className="min-w-full mt-8 bg-white">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Rental Company</th>
                <th className="px-4 py-2 border">Car Make</th>
                <th className="px-4 py-2 border">Car Model</th>
                <th className="px-4 py-2 border">Pickup Date</th>
                <th className="px-4 py-2 border">Return Date</th>
                <th className="px-4 py-2 border">Total Cost</th>
                <th className="px-4 py-2 border">Transaction #</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Budget</td>
                <td className="px-4 py-2 border">Honda</td>
                <td className="px-4 py-2 border">Civic</td>
                <td className="px-4 py-2 border">2023-07-31</td>
                <td className="px-4 py-2 border">2023-08-07</td>
                <td className="px-4 py-2 border">$600</td>
                <td className="px-4 py-2 border">123456</td>
              </tr>
              {/* Add more rows when retrieving information from db */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;

