import React from "react";
import './icon.scss';
import './importAllIcons';

interface iconProps {
  name: string,
  onClick?: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<iconProps> = (props) => {
  return (
    <svg onClick={props.onClick} className="tz-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};
export default Icon;
