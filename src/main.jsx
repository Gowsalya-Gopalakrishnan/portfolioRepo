

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';  
import App from './App'; 
// import { Provider } from "@/components/ui/provider"

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <Router> 
      {/* <Provider> */}

    <App />
    {/* </Provider> */}

  </Router>

);
