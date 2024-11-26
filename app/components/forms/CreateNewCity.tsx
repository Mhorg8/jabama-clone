"use client";
import WhiteButton from "../WhiteButton";
import Toast from "../Toast";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoCloseSharp } from "react-icons/io5";
import { useRouter } from "next/navigation"; // Import useRouter
import { FormEvent } from "react";

interface Props {
  closeModal: () => void;
}

const CreateNewCity = ({ closeModal }: Props) => {
  const router = useRouter(); // Use the router for navigation

  const createCity = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/newCity", {
        method: "POST",
        body: formData,
      });

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
          closeModal();
          router.push("/dashboard/cities");
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
      toast.error("Failed to create city", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    }
  };

  return (
    <>
      <form
        onSubmit={createCity}
        className="w-full h-[100dvh] absolute bg-black/20 top-0 z-40 flex items-center justify-center">
        <div className="w-[350px] md:w-[400px] bg-white rounded-lg min-h-[3px] p-5 flex flex-col gap-5 relative">
          <button
            type="button"
            className="absolute top-3 right-3"
            onClick={closeModal}>
            <IoCloseSharp size={20} />
          </button>
          <div className="flex flex-col">
            <label htmlFor="name">City Name:</label>
            <input
              name="name"
              className="bg-neutral-200 py-1.5 px-3 rounded-md placeholder:text-neutral-600"
              type="text"
              placeholder="Tehran"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="image">City Image</label>
            <input name="image" type="file" className="mt-2 text-sm" required />
          </div>

          <WhiteButton
            text="Create"
            type="submit"
            customStyle="hover:bg-orangeColor hover:text-white transition duration-200"
          />
        </div>
      </form>
      <div className="absolute">
        <Toast />
      </div>
    </>
  );
};

export default CreateNewCity;
