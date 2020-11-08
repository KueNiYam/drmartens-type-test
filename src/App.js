import React from 'react';
import Router from "./router/Router";
import Alert from 'react-s-alert';
import './css/alert.css'
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

const App = () => {
  return (
    <>
      <Router/>
      <Alert stack={{limit: 1}} />
    </>
  );
};

export default App;