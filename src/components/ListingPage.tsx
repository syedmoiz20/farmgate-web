import { FieldErrors, useForm } from "react-hook-form";
import "./ListingPage.css";

type Inputs = {
  title: string;
  user: string;
  location: string;
  type: string;
  quantity: number;
  unit: string;
};

const list = (data: Inputs) => {
  const listData = {
    ...data,
    image: "mock image data",
    date: Date.now(),
  };
  console.log(`sending this data for listing: ${JSON.stringify(listData)}`);

  fetch("http://localhost:7000/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default function ListingPage() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(`data received: ${JSON.stringify(data)}`);
    list(data);
  };

  const onErrors = (errors: FieldErrors) => {
    console.error(`erorr: ${errors}`);
  };
  return (
    <div className="page-content">
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <input {...register("title")} placeholder="Title" />
        <input {...register("user")} placeholder="User" />
        <input {...register("location")} placeholder="Location" />
        <input {...register("type")} placeholder="Type" />
        <input {...register("quantity")} placeholder="Quantity" />
        <input {...register("unit")} placeholder="Unit" />

        {/* {errors.title && <span>This field is required</span>}
        {errors.user && <span>This field is required</span>}
        {errors.location && <span>This field is required</span>}
        {errors.type && <span>This field is required</span>}
        {errors.quantity && <span>This field is required</span>}
        {errors.unit && <span>This field is required</span>} */}

        <input type="submit" className="submit-button" />
      </form>
    </div>
  );
}
