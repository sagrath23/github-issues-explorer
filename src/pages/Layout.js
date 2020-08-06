import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { IssuesSearchPage } from './IssuesSearchPage';
import { IssueDetailPage } from './IssueDetailPage';

export const Layout = () => (
  <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <header className="masthead mb-auto">
      <div className="inner">
        <h3 className="masthead-brand">Github issue explorer</h3>
        <nav className="nav nav-masthead justify-content-center" />
      </div>
    </header>
    <main role="main" className="inner cover">
      <Switch>
        <Route exact path="/issues/:issueId" component={IssueDetailPage} />
        <Route exact path="/issues" component={IssuesSearchPage} />
        <Redirect to="/issues" />
      </Switch>
    </main>
    <footer className="mastfoot mt-auto">
      <div className="inner">
        <p>Written by <a href="https://www.linkedin.com/in/stevenvillegascastellanos">Steven A. Villegas C.</a> A.K.A <a href="https://github.com/sagrath23">@sagrath23</a>.</p>
      </div>
    </footer>
  </div>
)