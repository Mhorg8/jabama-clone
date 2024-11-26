import WhiteButton from "../WhiteButton";
import Toast from "../Toast";
import { IoCloseSharp } from "react-icons/io5";
import Input from "../Input";

import { createNewBlog } from "@/app/actions";

interface Props {
  closeModal: () => void;
}
const CreateNewBlog = ({ closeModal }: Props) => {
  return (
    <>
      <form
        onSubmit={createNewBlog}
        className="w-full h-[calc(100dvh-20dvh)] absolute bg-black/20 left-0 top-0 z-40 flex items-center justify-center">
        <div className="w-[350px] md:w-[400px] bg-white rounded-lg min-h-[3px] p-5 flex flex-col gap-5 relative">
          {/* close button */}
          <button
            type="button"
            className="absolute top-3 right-3"
            onClick={closeModal}>
            <IoCloseSharp size={20} />
          </button>
          <div className="">
            <Input
              type="text"
              placeholder="example"
              label="Title"
              name="title"
            />
            <Input
              type="text"
              placeholder="going to nature with team"
              label="Subtitle"
              name="subtitle"
            />
            {/* textarea */}
            <div>
              <label htmlFor="">Description</label>
              <textarea name="desc" id="" rows={3} className="input"></textarea>
            </div>
            <input type="file" name="image" />
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

export default CreateNewBlog;
