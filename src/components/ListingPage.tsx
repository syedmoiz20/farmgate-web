import { FieldErrors, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import "./ListingPage.css";


const list = async (data: any): Promise<Boolean> => {
  const listData = {
    ...data,
    date: Date.now(),
  };
  console.log(`sending this data for listing: ${JSON.stringify(listData)}`);
  let listSuccess: boolean = false;
  await fetch("http://localhost:7000/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(listData),
  })
    .then((response) => {
      if (response.ok) {
        // Display success message
        console.debug(`success path`);
        listSuccess = true;
      } else {
        // Handle unsuccessful submission
        console.debug(`unsuccess path`);
        listSuccess = false;
      }
      // return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return listSuccess;
};

export default function ListingPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    console.log(`data received: ${JSON.stringify(data)}`);
    const listSuccess: Boolean = await list(data);
    console.log(`listing result: ${listSuccess}`)
    if (listSuccess) {
      toast.success('Listing was submitted successfully!');
    }
    else {
      toast.error('The listing could not be submitted');
    }
    reset();
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
        <input type="number" {...register("quantity")} placeholder="Quantity" />
        <input {...register("unit")} placeholder="Unit" />
        <input type="file" {...register('image')} />
        <input type="submit" className="submit-button" />
      </form>
      <ToastContainer />
    </div>
  );
}

// // import { readFileSync } from 'fs';
// import { useForm } from 'react-hook-form';

// // function fileToBuffer(file: any): Promise<Buffer> {
// //   return new Promise((resolve, reject) => {
// //     const reader = new FileReader();
// //     reader.onload = () => {
// //       const arrayBuffer = reader.result as ArrayBuffer;
// //       resolve(Buffer.from(arrayBuffer));
// //     };
// //     reader.onerror = reject;
// //     reader.readAsArrayBuffer(file);
// //   });
// // }

// export default function MyForm() {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data: any) => {
//     // Access the FileList object
//     const fileList = data.image;
//     // readFileSync(data.image)
//     // Access the selected File objects
//     for (let i = 0; i < fileList.length; i++) {
//       const file = fileList.item(i);
//       console.log(file);
//     }
//   };

//   return (
//     <div className="page-content">
//       <form onSubmit={handleSubmit(onSubmit)}>
//         {/* Register the file input element with React Hook Form */}
//         <input {...register("title")} placeholder="Title" />
//         <input type="number" {...register("quantity")} placeholder="Quantity" />
//         <input {...register("location")} placeholder="Location" />
//         <input type="file" {...register('image')} />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }
