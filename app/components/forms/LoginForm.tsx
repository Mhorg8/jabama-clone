"use client";
// IMPORTS
import React, { FormEvent, useRef } from "react";
import Input from "@/app/components/Input";
import LoginOptions from "./LoginOptions";
import WhiteButton from "../WhiteButton";
import { useRouter } from "next/navigation";
import Toast from "../Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  // VARIABLES
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // HANDLERS
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      redirect: false, // Prevent automatic redirect
    });

    if (result?.ok) {
      toast.success("Welcome!", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push("/"); // Navigate to home or desired page
      }, 3000); // Match the autoClose time for the toast
    } else {
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  //   JSX
  return (
    <form className="form " onSubmit={handleSubmit}>
      <Input ref={emailRef} type="email" placeholder="example" label="Email" />
      <Input
        ref={passwordRef}
        type="password"
        placeholder="*******"
        label="Password"
      />

      <LoginOptions />
      <WhiteButton
        type="submit"
        text="Login"
        bgColor="bg-white"
        customStyle="hover:bg-orangeColor hover:text-white transition duration-200"
      />
      <div className="text-sm flex items-center justify-center flex-col text-neutral-700 leading-none">
        <p>
          Already have an account?{" "}
          <Link className="text-black font-medium" href="/sign-up">
            Register
          </Link>
        </p>
        <p className="mt-1">Privacy & Policy</p>
      </div>
      <Toast />
    </form>
  );
};

export default LoginForm;
