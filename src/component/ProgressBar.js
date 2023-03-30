import React from "react";
import { Progress } from "antd";

const ProgressBar = ({ percent }) => {
  return (
    <div className="progressBar">
      <Progress percent={percent} />
    </div>
  );
};

export default ProgressBar;
