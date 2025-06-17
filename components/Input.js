import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const HandleInput = ({handle, setHandle}) => {
  const searchParams = useSearchParams();
  // const [handle, setHandle] = useState("");

  useEffect(() => {
    // Fetch query param only when component mounts
    setHandle(searchParams.get("handle") || "");
  }, [searchParams]); // Add dependency to ensure correct updates

  const changeHandle = (e) => {
    setHandle(e.target.value);
    console.log(e.target.value); // Logs updated value correctly
  };

  return (
    <input
      type="text"
      placeholder="Choose a Handle"
      onChange={(e)=>changeHandle(e)}
      value={handle}
      className="px-6 py-3 rounded-full focus:outline-gray-400"
    />
  );
};

export default HandleInput;
