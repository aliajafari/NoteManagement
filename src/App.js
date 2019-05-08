import React from 'react';
import { BrowserRouter as Router, Route, BrowserRouter } from "react-router-dom";
import './assets/scss/App.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Layout from './components/Layout';
import NoteList from './components/pages/Index';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';
const store = createStore(reducer);

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <BrowserRouter>
          <Router>
            <Layout>

              <Route exact path="/" component={NoteList} />
              <Route path="/create" component={Create} />
              <Route path="/item/:id" component={Edit} />

            </Layout>
          </Router>
        </BrowserRouter>
      </Provider>

    </div>

  );
}

export default App;
