import { FormEvent } from "react";
import client from "../lib/prisma";

import { toast } from "react-toastify";
import { redirect } from "next/navigation";

export async function getCities() {
  const cities = await client.location.findMany();

  return cities;
}
export async function getCabins() {
  const cabins = await client.cabin.findMany();

  return cabins;
}
export async function getBlogs() {
  const blogs = await client.blog.findMany();
  return blogs;
}

export async function getUsers() {
  const users = await client.user.findMany();
  return users;
}

export async function createCabin(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  try {
    const res = await fetch("/api/newCabin", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data = await res.json();

    if (res.ok) {
      toast.success(`${data.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
      setTimeout(() => {
        redirect("/dashboard");
      }, 3000);
    } else {
      toast.error(`${data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }

    // You can show a success toast here
  } catch (error) {
    console.log(error);
  }
}
export async function createNewBlog(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  try {
    const formData = new FormData(e.currentTarget);

    const res = await fetch("/api/newBlog", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      throw new Error("Failed to get response from server");
    }
    const data = await res.json();

    if (res.ok) {
      toast.success(`${data.message}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
      setTimeout(() => {
        redirect("/dashboard");
      }, 3000);
    } else {
      toast.error(`${data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  } catch (error) {
    console.error(error);
  }
}
