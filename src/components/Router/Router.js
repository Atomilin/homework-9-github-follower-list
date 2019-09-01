// Реализуйте роутер

// Роутер должен иметь роуты для компонентов Login и Search
// Вам потребуется использовать PrivateRoute для Search
// По умолчанию нужно перенаправлять на страницу логина
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PrivateRoute from '../PrivateRoute';
import Login from '../Login';
import Search from '../Search';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <PrivateRoute path="/search" component={Search} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}