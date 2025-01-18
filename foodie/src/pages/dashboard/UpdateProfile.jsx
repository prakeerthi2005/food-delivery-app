import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext); // Destructure user and updateUserProfile
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


  const onSubmit = (data) => {
    const { name, photoURL } = data;
    updateUserProfile(name, photoURL)
      .then(() => {
        // Handle success (optional)
        console.log("Profile updated successfully");
        navigate(from, {replace: true})

      })
      .catch((error) => {
        // Handle error (optional)
        console.log("Error updating profile", error);
      });
  };
 
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Update Profile</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photoURL", { required: "Photo URL is required" })}
            />
            {errors.photoURL && <span className="text-red-500">{errors.photoURL.message}</span>}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-green text-white">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
