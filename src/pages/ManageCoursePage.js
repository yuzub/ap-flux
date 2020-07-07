import React, { useState, useEffect } from 'react';
import { Prompt } from 'react-router-dom';
import CourseForm from '../components/CourseForm';
// import * as courseApi from '../api/courseApi';
import courseStore from '../stores/courseStore';
import { toast } from 'react-toastify';
import * as courseActions from '../actions/courseActions';

const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: '',
    title: '',
    authorId: null,
    category: '',
  });

  useEffect(() => {
    const slug = props.match.params.slug; // from the path '/courses/:slug'
    if (slug) {
      // courseApi.getCourseBySlug(slug).then((_course) => setCourse(_course));
      setCourse(courseStore.getCourseBySlug(slug));
    }
  }, [props.match.params.slug]);

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

  function formIsValid() {
    const _errors = {};

    if (!course.title) {
      _errors.title = 'Title is required.';
    }
    if (!course.authorId) {
      _errors.authorId = 'Author ID is required.';
    }
    if (!course.category) {
      _errors.category = 'Category is required.';
    }

    setErrors(_errors);
    // Form is valid if the _errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) {
      return;
    }

    // courseApi.saveCourse(course).then(() => {
    //   props.history.push('/function');
    //   toast.success('Course saved.');
    // });

    courseActions.saveCourse(course).then(() => {
      props.history.push('/function');
      toast.success('Course saved.');
    });
  }

  return (
    <>
      <h2>Manage Course</h2>
      <Prompt when={true} message="Are you sure you want to leave?" />
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      {props.match.params.slug}
    </>
  );
};

export default ManageCoursePage;
