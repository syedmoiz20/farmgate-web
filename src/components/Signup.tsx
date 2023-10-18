import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import "./Signup.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const signup = async (email: string, password: string): Promise<Boolean> => {
  let authSuccess: boolean = false;
  await fetch("http://localhost:7000/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.ok) {
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

export default function SignupPage() {
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data: any) => {
    const authSuccess: Boolean = await signup(data.email, data.password);
    if (authSuccess) {
      toast.success("Account created!");
    } else {
      toast.error("Account could not be created");
    }
    reset();
  };

  return (
    <div className="page-content">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("email")}
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="enter email"
        />
        <input
          type="password"
          {...register("password")}
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="password"
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
        <input
          type="password"
          {...register("confirmPassword")}
          className={`form-control ${
            errors.confirmPassword ? "is-invalid" : ""
          }`}
          placeholder="confirm password"
        />
        <div className="invalid-feedback">
          {errors.confirmPassword?.message}
        </div>
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
