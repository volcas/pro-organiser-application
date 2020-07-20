import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faList, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

import Boards from "./Pages/Boards/Boards";
import CreateBoard from "./Pages/CreateBoard/CreateBoard";
import Layout from "./Pages/Layout/Layout";
import Board from "./Pages/Board/Board";

library.add(faList, faTrashAlt);

function App() {
  let routes = (
    <Switch>
      <Route path="/createboard" component={CreateBoard}></Route>
      <Route path="/board/:boardId" component={Board}></Route>
      <Route path="/" component={Boards}></Route>
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>{routes}</Layout>
    </div>
  );
}

export default withRouter(App);
