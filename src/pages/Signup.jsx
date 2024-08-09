import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
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
      const contactResponse = await axios.post("/contacts", {
        first: formData.first,
        last: formData.last,
        active: formData.active,
        email: formData.email,
        role: formData.role,
      });
  
      // Log the entire response to verify the structure
      console.log("Contact Response:", contactResponse);
  
      const href = contactResponse.data._links.self.href;
  
      const contactId = href.substring(href.lastIndexOf('/') + 1);
      console.log("Contact ID:", contactId);
  
      // const emailResponse = await axios.post("/emails", {
      //   address: formData.address,
      //   category: formData.category,
      //   active: formData.active,
      //   contact_id: contactId,
      // });
  
      const phoneResponse = await axios.post("/phones", {
        number: formData.number,
        category: formData.category,
        active: formData.active,
      });
  
      const addressResponse = await axios.post("/addresses", {
        street: formData.street,
        city: formData.city,
        prov: formData.prov,
        postal: formData.postal,
        active: formData.active,
        category: formData.category,
      });

      const href1 = addressResponse.data._links.self.href;
  
      const addressId = href1.substring(href1.lastIndexOf('/') + 1);
      console.log("Address ID:", addressId);
  
      console.log("Form Data after submission:", {
        contact: contactResponse.data,
        // email: emailResponse.data,
        phone: phoneResponse.data,
        address: addressResponse.data,
      });
  
      navigate('/account', { state: { contactId } });
    } catch (err) {
      console.error("Failed to sign up:", err);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#D8D7D7]">
      <div className="w-full max-w-2xl p-10 pt-16 space-y-10 bg-[#D8D7D7]">
        <div className="space-y-0">
          <h2 className="text-4xl text-[#040200] text-center">SIGN UP</h2>
          <p className="text-md text-[#040200] text-center">
            Please complete all fields below to create your account
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
            Sign Up
          </button>
        </form>
        <p className="text-md text-center text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#5595AC] hover:underline">
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Signup;
