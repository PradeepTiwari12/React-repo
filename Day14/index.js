import React from 'react';
import ReactDom from 'react-dom/client';
import { Provider } from 'react-redux';
import stores from './Stores';
import Counting from './Counting';
function App(){
  console.log(stores);
  return(
    
    <Provider store={stores}>
      <Counting/>
    </Provider>
    
  )
}
const Reactroot=ReactDom.createRoot(document.getElementById("root"));
Reactroot.render(<App/>);