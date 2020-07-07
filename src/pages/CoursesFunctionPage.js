import React, { useState, useEffect } from 'react';
// import { getCourses } from '../api/courseApi';
import courseStore from '../stores/courseStore';
import CourseList from '../components/CourseList';
import { Link } from 'react-router-dom';

export default function CoursesFunctionPage() {
  console.log('CoursesFunctionPage');

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // getCourses().then((_courses) => setCourses(_courses));
    setCourses(courseStore.getCourses());
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} />
    </>
  );
}
