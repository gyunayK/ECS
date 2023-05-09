import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { supabase } from "@/lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import CartButton from "@/components/buttons/CartButton";

function ProfilePage() {
  const navigate = useNavigate();
  const { user_metadata } = useSelector((state) => state.user.user);
  console.log(user_metadata);

  return (
    <>
      <div className="mx-auto md:mt-[10%] sm:mt-[20%] md:w-[300px] sm:w-full ">
        <div className="sm:text-3xl md:text-2xl font-thin text-[#000000d2]">
          <h1 className="sm:pb-10 sm:text-4xl sm:p-[9px] sm:ml-[5%] ">Profile Page</h1>
          <p className="pb-2 sm:p-[9px] sm:ml-[5%] ">
            First Name: {user_metadata.FirstName}{" "}
          </p>
          <p className="pb-2 sm:p-[9px] sm:ml-[5%] ">
            Last Name: {user_metadata.LastName}
          </p>
          <p className="pb-2 sm:p-[9px] sm:ml-[5%] ">Address: {user_metadata.address}</p>
          <p className="pb-2 sm:p-[9px] sm:ml-[5%] ">City: {user_metadata.City}</p>
          <p className="pb-2 sm:p-[9px] sm:ml-[5%] ">
            Postal Code: {user_metadata.PostalCode}
          </p>
          <p className="pb-2 sm:p-[9px] sm:ml-[5%] ">Country: {user_metadata.Country}</p>
          <p className="pb-2 sm:p-[9px] sm:ml-[5%] ">Phone: {user_metadata.Phone}</p>
        </div>

        <div className="absolute md:bottom-[360px] md:right-[100px] sm:bottom-[10%] sm:right-[10%]">
          <button
            onClick={() => navigate("/profileUpdate")}
            className="button-36  "
          >
            Eddit Profile
          </button>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
