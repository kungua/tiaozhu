import React from "react";
import './importAllIcons';

interface iconProps {
  name: string
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <svg>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};
export default Icon;
