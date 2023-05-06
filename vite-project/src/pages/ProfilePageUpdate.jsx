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
      <button>GetUserData</button>
      <br />
      <button onClick={updateUserData}>UpdateUserData</button>

      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="flex justify-between max-w-[700px] ">
            <div className="w-1/2 mr-5">
              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                ref={firstNameRef}
                placeholder="First Name"
                defaultValue={user_metadata.FirstName}
              />

              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
                htmlFor="lastName"
              >
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
              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                ref={phoneRef}
                defaultValue={user_metadata.phone}
                placeholder="Phone"
              />

              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
                htmlFor="address"
              >
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

              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
                htmlFor="city"
              >
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

              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
                htmlFor="postalCode"
              >
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
              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2"
                htmlFor="username"
              >
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

              <label
                className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
                htmlFor="country"
              >
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
              <button
                className="bg-blue-500 hover:bg-blue-700 w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                type="button"
                onClick={updateUserData}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePageUpdate;
