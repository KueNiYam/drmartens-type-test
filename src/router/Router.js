import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../components/home/Home";
import Questions from "../components/question/Questions";
import Results from "../components/result/Results";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/questions" component={Questions} />
        <Route path="/results/:id" component={Results} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;