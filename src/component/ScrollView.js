import React from "react";

const ScrollView = (props) => {
  //用 props.children 將包在標籤裡的東西印出來
  return <div className="scrollView">{props.children}</div>;
};

export default ScrollView;
