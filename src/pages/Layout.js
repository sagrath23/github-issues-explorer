import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { IssuesSearchPage } from './IssuesSearchPage';
import { IssueDetailPage } from './IssueDetailPage';

export const Layout = () => (
  <Switch>
    <Route exact path="/issues/:issueId" component={IssueDetailPage} />
    <Route exact path="/issues" component={IssuesSearchPage} />
    <Redirect to="/issues" />
  </Switch>
)