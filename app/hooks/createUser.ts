import { redirect } from "next/navigation";
import { toast } from "react-toastify";

interface User {
  email: string | undefined;
  username: string | undefined;
  password: string | undefined;
  isLogin?: boolean | null;
}
export const createUser = async (user: User) => {
  try {
    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (!res.ok) {
      toast.error(`${data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
    } else {
      toast.success(`${data.message}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        theme: "light",
      });
      setTimeout(() => {
        redirect("/sign-in");
      }, 3000);
    }

    return data;
  } catch (error) {
    throw new Error(`something went wrong, ${error}`);
  }
};
