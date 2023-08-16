import React from 'react';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div id='main'>
      <h1>Welcome to My  App</h1>
      <Tooltip text="Thanks for hovering! I'm a tooltip" position="left">
        <button>Left tooltip</button>
      </Tooltip>
      <Tooltip text="Thanks for hovering! I'm a tooltip" position="right">
        <button>Right tooltip</button>
      </Tooltip>
      <Tooltip text="Thanks for hovering! I'm a tooltip" position="top">
        <button>Top tooltip</button>
      </Tooltip>
      <Tooltip text="Thanks for hovering! I'm a tooltip" position="bottom">
        <button>Bottom tooltip</button>
      </Tooltip>
    </div>
  );
  
};

export default App;
