import React from 'react';
import { render } from 'react-dom';

const App: React.SFC = () => <div>App</div>;

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root'));
