import { Provider } from "mobx-react";
import React from "react";
import AppNavigator from "./routes/routes";
import RootStore, { routingStore } from "./store/RootStore";
import { GlobalStyle } from "./styled/global";
import { ToastContainer } from "react-toastify";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "mobx-react-router";

const store = new RootStore();

const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);
const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Router history={history}>
          <AppNavigator />
        </Router>
      </Provider>
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
