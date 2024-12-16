import EditorNav from "../components/EditorNav";
import InnerNav from "../components/InnerNav";

const EditorPage = () => {
  return (
    <div className="relative bg-[#353434] pb-10 ">
      <InnerNav/>
      <div className="flex justify-center pt-10">
        <div className="rounded-t-xl">
          <EditorNav/>
          <textarea
            className="p-20 h-[900px] w-[800px] outline-none bg-white"
            name=""
            id=""
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
