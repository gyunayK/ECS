import { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "@/Redux/Slice/userSlice";

import { supabase } from "@/lib/supabaseClient";

function ProfilePageUpdate() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const postalCodeRef = useRef();
  const countryRef = useRef();
  const usernameRef = useRef();
  const phoneRef = useRef();

  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.user.user);
  const { user_metadata } = useSelector((state) => state.user.user);

  useEffect(() => {
    const getUserData = async () => {
      const data = await supabase.auth.getUser();
      console.log(data);
    };
    getUserData();
  }, []);

  const updateProfileState = () => {
    dispatch(
      updateUserProfile({
        id,
        UserName: usernameRef.current.value,
        FirstName: firstNameRef.current.value,
        LastName: lastNameRef.current.value,
        address: addressRef.current.value,
        City: cityRef.current.value,
        PostalCode: postalCodeRef.current.value,
        Country: countryRef.current.value,
        Phone: phoneRef.current.value,
      })
    );
  };

  const updateUserData = async () => {
    const { data, error } = await supabase.auth.updateUser({
      data: {
        id,
        UserName: usernameRef.current.value,
        FirstName: firstNameRef.current.value,
        LastName: lastNameRef.current.value,
        address: addressRef.current.value,
        City: cityRef.current.value,
        PostalCode: postalCodeRef.current.value,
        Country: countryRef.current.value,
      },
    });

    if (error) {
      console.log(error);
      return;
    } else {
      updateProfileState();
    }
  };

  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center">Profile Page</h1>
      <div className="md:flex md:justify-center mt-5  lg:max-w-[700px] lg:mx-auto ">
        <div className="w-full sm:w-full md:w-1/2 px-4">
          <div className="mb-4  sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              ref={firstNameRef}
              placeholder="First Name"
              defaultValue={user_metadata.FirstName}
            />
          </div>
          <div className="mb-4 sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              ref={lastNameRef}
              type="text"
              placeholder="Last Name"
              defaultValue={user_metadata.LastName}
            />
          </div>
          <div className="mb-4 sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl mb-2">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              ref={phoneRef}
              defaultValue={user_metadata.Phone}
              placeholder="Phone"
            />
          </div>
          <div className="mb-4 sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl mb-2">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="address"
              type="text"
              ref={addressRef}
              placeholder="Address"
              defaultValue={user_metadata.address}
            />
          </div>
        </div>
        <div className="w-full sm:w-full md:w-1/2 px-4">
          <div className="mb-4 sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl mb-2">
              City
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="city"
              type="text"
              ref={cityRef}
              placeholder="City"
              defaultValue={user_metadata.City}
            />
          </div>
          <div className="mb-4 sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl mb-2">
              Postal Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="postalCode"
              type="text"
              ref={postalCodeRef}
              placeholder="Postal Code"
              defaultValue={user_metadata.PostalCode}
            />
          </div>
          <div className="mb-4 sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl   mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              ref={usernameRef}
              type="text"
              placeholder="Username"
              defaultValue={user_metadata.UserName}
            />
          </div>

          <div className="mb-4 sm:px-3  ">
            <label className="block text-gray-700 md:text-lg sm:text-2xl xs:text-2xl   mb-2 ">
              Country
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="country"
              ref={countryRef}
              name="country"
              defaultValue={user_metadata.Country}
            >
              <option value="">Select a country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
              {/* Add more countries here */}
            </select>
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 sm:w-[80%] sm:ml-[10%] md:mx-[37%] md:max-w-[25%] hover:bg-blue-700  text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline "
        type="button"
        onClick={updateUserData}
      >
        Update
      </button>
    </div>
  );
}

export default ProfilePageUpdate;
