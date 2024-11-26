import Toast from "../Toast"; // Ensure this component shows success or error notifications
import Input from "../Input";
import WhiteButton from "../WhiteButton";
import { FaTimes } from "react-icons/fa";

import { createCabin } from "@/app/actions";

interface Props {
  closeModal: () => void;
}

const CreateNewCabin = ({ closeModal }: Props) => {
  return (
    <>
      <form
        onSubmit={(e) => createCabin(e)}
        className="w-full h-[100dvh] absolute bg-black/20 top-0 left-0 z-40 flex items-center justify-center">
        <div className="bg-neutral-300 p-3 rounded-xl flex flex-col gap-3 relative mt-4">
          <button
            className="absolute top-3 right-3"
            onClick={() => closeModal()}>
            <FaTimes />
          </button>
          <div className="flex items-center gap-x-2">
            <Input
              label="Location"
              name="location"
              type="text"
              placeholder="Tehran"
            />
            <Input label="Name" name="name" type="text" placeholder="Tehran" />
          </div>
          <div className="flex items-center gap-x-2">
            <Input label="Room" name="room" type="number" placeholder="1" />
            <Input label="Bed" name="bed" type="number" placeholder="2" />
          </div>
          <div className="flex items-center gap-x-2">
            <Input
              label="Price"
              name="price"
              type="number"
              placeholder="2500"
            />
            <Input label="Rate" name="rate" type="number" placeholder="4.5/5" />
          </div>
          <input type="file" name="image" />
          <WhiteButton
            text="Create"
            type="submit"
            customStyle="hover:bg-orangeColor hover:text-white transition-all duration-200"
          />
        </div>
      </form>

      <div className="absolute ">
        <Toast />
      </div>
    </>
  );
};

export default CreateNewCabin;
