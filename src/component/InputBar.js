import React, { useState } from "react";

const InputBar = ({ list, setList, setPercent, isChecked, percent }) => {
  const [value, setValue] = useState("");

  //紀錄我們在Input_bar裡輸入的value
  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const addHandler = () => {
    let newItem = {
      content: value,
    };

    let updateList = [...list];
    updateList.push(newItem);
    console.log(updateList);
    setList(updateList);
    setPercent(Math.round((isChecked / updateList.length) * 100));
    console.log(updateList.length);
    console.log(isChecked);
    console.log(percent);
  };

  //將Input裡的value儲存，並在儲存後將Value變回空字串
  const saveHandler = () => {
    value === "" ? alert("請輸入內容") : addHandler(value);
    setValue("");
  };

  return (
    <div className="inputBar">
      <input onChange={changeHandler} value={value} />
      <button onClick={saveHandler}></button>
    </div>
  );
};

export default InputBar;
