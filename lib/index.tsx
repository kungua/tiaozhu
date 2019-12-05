import React from 'react';
import ReactDOM from 'react-dom';
import Icon from "./icon";

const fn: React.MouseEventHandler = (e) => {
};

ReactDOM.render(<div>
  <Icon name="taobao" onClick={fn}/>
  <Icon name="wechat"/>
  <Icon name="alipay"/>
</div>, document.querySelector('#root'));
