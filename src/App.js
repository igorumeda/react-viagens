import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Routes from './routes';
import Header from "./components/Header";
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
