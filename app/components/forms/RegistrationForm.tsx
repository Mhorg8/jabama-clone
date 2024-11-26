"use client";
import Input from "@/app/components/Input";
import WhiteButton from "@/app/components/WhiteButton";
import Link from "next/link";
import { createUser } from "@/app/hooks/createUser";
import { FormEvent, useRef } from "react";
import LoginOptions from "./LoginOptions";
import Toast from "../Toast";

const RegistrationForm = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const user = {
        email: emailRef.current?.value,
        username: usernameRef.current?.value,
        password: passwordRef.current?.value,
        isLogin: false,
      };
      const data = await createUser(user);
      console.log(data);
    } catch (error) {
      throw new Error("something went wrong" + error);
    }
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="form shadow-xl">
        <Input
          ref={emailRef}
          type="email"
          placeholder="example@gmail.com"
          label="Email"
          required
        />

        <Input
          ref={usernameRef}
          type="text"
          placeholder="Mhorg8"
          label="Username"
        />

        <Input
          ref={passwordRef}
          type="password"
          placeholder="******"
          label="Password"
        />
        {/* login options */}
        <LoginOptions />
        <WhiteButton
          type="submit"
          text="Create"
          bgColor="bg-white"
          customStyle="hover:bg-orangeColor hover:text-white transition duration-200"
        />
        <div className="text-sm flex items-center justify-center flex-col text-neutral-700 leading-none">
          <p>
            Already have an account?{" "}
            <Link className="text-black font-medium" href="/sign-in">
              Login
            </Link>
          </p>
          <p className="mt-1">Privacy & Policy</p>
        </div>
      </form>
      <div className="absolute">
        <Toast />
      </div>
    </div>
  );
};

export default RegistrationForm;
