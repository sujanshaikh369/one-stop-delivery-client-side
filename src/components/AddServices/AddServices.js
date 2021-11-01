import React, { useState } from "react";
import "./AddServices.css";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const [addServices, setAddServices] = useState([]);
  console.log(addServices);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://glacial-citadel-29064.herokuapp.com/deliver`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setAddServices();
        }
      });
  };
  return (
    <div className="order text-center py-5">
      <h2 className="text-center pb-4">Add Packages</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title")}
          placeholder="Title"
          className="p-2 m-2 w-50"
        />

        <br />

        <input
          {...register("price")}
          placeholder="price"
          className="p-2 m-2 w-50"
        />
        <input
          {...register("des")}
          placeholder="Description"
          className="p-2 m-2 w-50"
        />
        <br />
        <input
          {...register("image")}
          placeholder="ImageUrl"
          className="p-2 m-2 w-50"
        />
        <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input
          type="submit"
          value="Post Package"
          className="btn btn-success w-25"
        />
      </form>
    </div>
  );
};

export default AddServices;
