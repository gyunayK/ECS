import { useEffect, useRef } from "react";

import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "@/Redux/Slice/userSlice";
import { toast } from "react-toastify";

import { supabase } from "@/lib/supabaseClient";

function UserAccountUpdate() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();


  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.user.user);
  const { user_metadata } = useSelector((state) => state.user.user);
  const { email, phone } = useSelector((state) => state.user.user);

  useEffect(() => {
    const getUserData = async () => {
      const data = await supabase.auth.getUser();
      console.log(data);
    };
    getUserData();
  }, []);

  const checkPasswordBeforeUpdate = () => {
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return toast.error("Passwords do not match");
    } else {
      updateUserEmail();
      toast.success("Email and password updated successfully");
    }
  };

  const updateUserEmail = async () => {
    const { data, error } = await supabase.auth.updateUser({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      
    });

    if (error) {
      console.log(error);
      return;
    }
  };

  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <div className="w-1/2">
          <div className="flex justify-between max-w-[700px] "></div>
          <h1 className="text-3xl text-center">User Page</h1>
          <div className="w-1/2">
            <label
              className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              ref={emailRef}
              defaultValue={email}
              placeholder="Email"
            />
          

            <label
              className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              ref={passwordRef}
              placeholder="Password"
            />

            <label
              className="block text-gray-700 md:text-lg sm:text-2xl   mb-2 mt-4"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              ref={confirmPasswordRef}
              placeholder="Confirm Password"
            />

            <button
              className="bg-blue-500 hover:bg-blue-700 w-full text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
              type="button"
              onClick={checkPasswordBeforeUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAccountUpdate;
