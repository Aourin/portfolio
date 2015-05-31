//Get React
import React from 'react';

//Polyfill and base welcome Component
import 'babel/polyfill';
import Welcome from 'lib/welcome';
import AppContainer from 'lib/app-container';
//Import Base Style
import 'styles/app.scss';

//Grab the Application Element to build on
const appElement = document.getElementById('app');

//Render Default
React.render(
  <div>
    <AppContainer />
  </div>
  , appElement);