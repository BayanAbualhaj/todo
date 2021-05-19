import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './app.js';
import LoginProvider from './components/auth/context.js';


const Main =()=><App/>

const rootElement = document.getElementById('root');

ReactDOM.render(
<LoginProvider>
    <Main />
</LoginProvider>,
 rootElement);
