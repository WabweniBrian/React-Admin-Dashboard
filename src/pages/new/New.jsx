import React, { useRef, useState } from "react";
import "./new.css";

const New = ({ inputs }) => {
  const [image, setImage] = useState("");
  const imageRef = useRef("");

  return (
    <div>
      <h1 className="text-18 opacity-7 mb-1">Add new User</h1>
      <div className="form bg-white rounded-sm p-2 border">
        <form action="" className="flex flex-wrap gap-6">
          <div className="img">
            <img
              src={
                image ? URL.createObjectURL(image) : "/images/placeholder.png"
              }
              alt=""
              className="image cursor-pointer"
              onClick={() => imageRef.current.click()}
            />
          </div>
          <div className="inputs">
            <input
              type="file"
              name="file"
              id="file"
              ref={imageRef}
              onChange={(e) => setImage(e.target.files[0])}
              hidden
            />

            <div className="mt-2 flex flex-wrap gap-4">
              {inputs.map((input) => {
                const { id, type, label, name } = input;
                return (
                  <div className="input" key={id}>
                    <input type={type} id={name} name={name} required />
                    <label htmlFor={name}>{label}</label>
                  </div>
                );
              })}
            </div>
            <button className="btn btn-primary my-2 mx-auto">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
