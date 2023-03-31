import React from "react";
import { Progress } from "antd";

const ProgressBar = ({ percent }) => {
  return (
    <div className="progressBar">
      <Progress
        percent={percent}
        size={[540, 25]}
        strokeColor={" rgb(112, 164, 233)"}
      />
    </div>
  );
};

export default ProgressBar;
