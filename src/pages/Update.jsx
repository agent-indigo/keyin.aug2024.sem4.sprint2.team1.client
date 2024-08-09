import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const location = useLocation();
  const { contactId } = location.state || {};
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    active: true,
    role: "customer",
    number: "",
    street: "",
    city: "",
    prov: "",
    postal: "",
    category: "customer",
    // password: '',
    // confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log("Form Data before submission:", formData);
  
      // Make the POST request to create a contact
      const contactResponse = await axios.put(`/contacts/${contactId}`, {
        first: formData.first,
        last: formData.last,
        active: formData.active,
        email: formData.email,
        role: formData.role,
      });
  
      // // Log the entire response to verify the structure
      // console.log("Contact Response:", contactResponse);
  
      // const href = contactResponse.data._links.self.href;
  
      // const contactId = href.substring(href.lastIndexOf('/') + 1);
      // console.log("Contact ID:", contactId);
  
      const phoneResponse = await axios.put(`/phones/${contactId}`, {

        number: formData.number,
        category: formData.category,
        active: formData.active,
      });
  
      const addressResponse = await axios.put(`/addresses/${contactId}`, {
        street: formData.street,
        city: formData.city,
        prov: formData.prov,
        postal: formData.postal,
        active: formData.active,
        category: formData.category,
      });

      // const href1 = addressResponse.data._links.self.href;
      // const addressId = href1.substring(href1.lastIndexOf('/') + 1);
      // console.log("Address ID:", addressId);
  
      console.log("Form Data after submission:", {
        contact: contactResponse.data,
        phone: phoneResponse.data,
        address: addressResponse.data,
      });
  
      navigate('/account', { state: { contactId } });
      alert('Account information updated successfully');
    } catch (err) {
      console.error("Failed to update account info:", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D8D7D7]">
      <div className="w-full max-w-2xl p-10 pt-16 space-y-10 bg-[#D8D7D7]">
        <div className="space-y-0">
          <h2 className="text-4xl text-[#040200] text-center">Update Account</h2>
          <p className="text-md text-[#040200] text-center">
            Please complete all fields below to update your account
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {[
            { id: "first", label: "First Name" },
            { id: "last", label: "Last Name" },
            { id: "email", label: "Email", type: "email" },
            { id: "number", label: "Phone Number", type: "tel" },
            { id: "street", label: "Street Address" },
            { id: "city", label: "City" },
            { id: "prov", label: "Province" },
            { id: "postal", label: "Postal Code" },
            // { id: 'password', label: 'Password', type: 'password' },
            // { id: 'confirmPassword', label: 'Confirm Password', type: 'password' },
          ].map(({ id, label, type = "text" }) => (
            <div key={id} className="flex items-center">
              <label htmlFor={id} className="w-1/3 text-xl text-[#040200]">
                {label}
              </label>
              <input
                type={type}
                id={id}
                value={formData[id]}
                onChange={handleChange}
                className="w-2/3 p-1 ml-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
                required
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full p-2 text-xl text-[#5595AC] bg-[#040200] rounded focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            Update Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default Update;