import React from 'react';

import classes from './HelloWorld.module.scss';

const HelloWorld = () => {
  return (
    <div>
      <h1 className={classes.title}>Hello world</h1>
    </div>
  );
};

export default HelloWorld;
