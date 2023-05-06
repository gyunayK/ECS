import { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { supabase } from "@/lib/supabaseClient";
import { setUser } from "@/Redux/Slice/userSlice";

function LogIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);

   
    const {
      data: { user },
      error,
    } = await supabase.auth.signInWithPassword({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    
   

    if (error) {
      toast.error(error.message);
      return;
    }

    if (user) {
      toast.success("Login successful");
      navigate("/");
      dispatch(setUser(user));
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 mt-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl md:text-2xl sm:text-3xl leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium md:text-lg sm:text-2xl leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                ref={emailRef}
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 pl-3"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium md:text-lg sm:text-2xl leading-6 text-gray-900"
              >
                Password
              </label>
              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                ref={passwordRef}
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6 pl-3"
              />
            </div>
          </div>

          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 md:text-lg sm:text-2xl leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </div>

        <p className="mt-10 text-center md:text-lg sm:text-2xl text-sm text-gray-800">
          Not a member?{" "}
          <Link
            to="/register"
            className="leading-6 md:text-lg sm:text-2xl text-indigo-600 hover:text-indigo-500"
          >
            {" "}
            Regiaster Now!!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
