import React from "react";

function ProfilePage() {
  return (
    <div className="mt-20">
      <h1 className="text-3xl text-center">Profile Page</h1>

      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="flex justify-between">
            <div className="w-1/2 mr-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                type="text"
                placeholder="First Name"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="lastName"
                type="text"
                placeholder="Last Name"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Address"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="city"
              >
                City
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="city"
                type="text"
                placeholder="City"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="postalCode"
              >
                Postal Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="postalCode"
                type="text"
                placeholder="Postal Code"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="country"
              >
                Country
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="country"
                name="country"
              >
                <option value="">Select a country</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                <option value="MEX">Mexico</option>
                {/* Add more countries here */}
              </select>
            </div>
            <div className="w-1/2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
              />

              <label
                className="block text-gray-700 text-sm font-bold mb-2 mt-4"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
              />

              <button
                className="bg-blue-500 hover:bg-blue-700 w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                type="button"
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

export default ProfilePage;
