import Ract from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import Coincreate from './Coincreate';

function App(){
  return(
    <Provider store={store}>
     <Coincreate/>
    </Provider>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)