import { Router } from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";

import Routes from './routes';
import Header from "./components/Header";
import history from './services/history'
import store from './store'

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ToastContainer />
        <Router history={history}>
          <Header />
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
