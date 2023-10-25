import React from 'react';
import './App.css'
import BKlist from './component/bklist';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter,Routes } from 'react-router-dom';
import Login from './component/login';
import ZmanBK from './component/zmanBK';


function App() {
  return <>
     
      <Provider store={store}>
       <Login></Login>
      <BrowserRouter>
    
     {/* <ZmanBK></ZmanBK> */}
         {/* <BKlist></BKlist> */}
        {/* <Routes>
        
      </Routes>*/}
      </BrowserRouter> 
      </Provider> 
      </>
}

export default App;
