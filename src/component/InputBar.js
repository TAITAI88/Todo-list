import React, { useState } from "react";

const InputBar = ({ addItem }) => {
  const [value, setValue] = useState("");

  //紀錄我們在Input_bar裡輸入的value
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  //將Input裡的value儲存，並在儲存後將Value變回空字串
  const addHandler = () => {
    value === "" ? alert("請輸入內容") : addItem(value);
    setValue("");
  };

  return (
    <div className="inputBar">
      <input onChange={changeHandler} value={value} />
      <button onClick={addHandler}></button>
    </div>
  );
};

export default InputBar;
