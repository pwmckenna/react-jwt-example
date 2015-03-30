'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

let App = React.createClass({

  render() {
    return (
      <div>
        <header>
          header
        </header>
        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }
});
export default App;
