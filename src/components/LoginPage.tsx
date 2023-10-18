import { FieldErrors, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const login = async (email: string, password: string): Promise<Boolean> => {
  let authSuccess: boolean = false;
  await fetch("http://localhost:7000/auth", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.text())
    .then((body) => {
      console.log(`body: ${body}`);
      if (body === "true") {
        console.debug(`success path`);
        authSuccess = true;
      } else {
        console.debug(`unsuccess path`);
        authSuccess = false;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  return authSuccess;
};

export default function LoginPage() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const authSuccess: Boolean = await login(data.email, data.password);
    if (authSuccess) {
      toast.success("User authenticated!");
    } else {
      toast.error("Email / password could not be authenticated");
    }
    reset();
  };

  const onErrors = (errors: FieldErrors) => {
    console.error(`erorr: ${errors}`);
  };

  return (
    <div className="page-content">
      <form onSubmit={handleSubmit(onSubmit, onErrors)}>
        <input {...register("email")} placeholder="enter email" />
        <input
          type="password"
          {...register("password")}
          placeholder="password"
        />
        <input type="submit" className="submit-button" />
      </form>
      <ToastContainer />
    </div>
  );
}
