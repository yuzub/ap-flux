import React from 'react';
import AboutPage from './AboutPage';
import HomePage from './HomePage';
import Header from '../components/common/Header';
import CoursesPage from './CoursesPage';

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === '/about') return <AboutPage />;
    if (route === '/courses') return <CoursesPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
