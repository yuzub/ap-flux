import React from 'react';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Header from '../components/common/Header';
import CoursesPage from './CoursesPage';
import CoursesFunctionPage from './CoursesFunctionPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  //   function getPage() {
  //     const route = window.location.pathname;
  //     if (route === '/about') return <AboutPage />;
  //     if (route === '/courses') return <CoursesPage />;
  //     if (route === '/function') return <CoursesFunctionPage />;
  //     return <HomePage />;
  //   }
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      {/* {getPage()} */}
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/function" component={CoursesFunctionPage} />
        <Route path="/course/:slug" component={ManageCoursePage} />
        <Route path="/course" component={ManageCoursePage} />
        <Redirect from="/about-page" to="about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
