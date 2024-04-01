import { ImSpinner10 } from "react-icons/im";

function Loader() {
  return (
    <div className="w-full h-full justify-center items-center flex flex-col">
      <ImSpinner10
        size={30}
        className="mx-auto animate-spin text-violet-600 "
      />
    </div>
  );
}

export default Loader;
