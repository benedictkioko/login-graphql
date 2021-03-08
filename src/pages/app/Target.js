import React from "react";
import Form from "../../components/search/Form";

export default function Target() {
  return (
    <>
      <div className="min-h-screen p-5 bg-gray-200 flex flex-col justify-center">
        <div className="max-w-md min-h-1/2 w-full mx-auto">
          <div className="items-center">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
}
