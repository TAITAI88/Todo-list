import React from "react";

const ItemList = (props) => {
  //用 props.children 將包在標籤裡的東西印出來
  return <div className="itemList">{props.children}</div>;
};

export default ItemList;
