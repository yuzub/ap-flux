import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';
import CourseForm from '../components/CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';

const ManageCoursePage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  //   function handleChange(event) {
  //     const updatedCourse = {
  //       ...course,
  //       [event.target.name]: event.target.value,
  //     };
  //     // updatedCourse.title = event.target.value;
  //     setCourse(updatedCourse);
  //   }

  function handleChange({ target }) {
    // const target = event.target;
    // const { target } = event;
    const updatedCourse = {
      ...course,
      [target.name]: target.value,
    };
    setCourse(updatedCourse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push('/function');
      toast.success('Course saved.');
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      <CourseForm
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
