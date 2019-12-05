import React from "react";
import './icon.scss';
import './importAllIcons';

interface iconProps {
  name: string
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <svg className="tz-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};
export default Icon;
