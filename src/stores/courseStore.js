// Store needs to emit an event each time a change occurs
import { EventEmitter } from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from '../actions/actionTypes';

const CHANGE_EVENT = 'change';
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    console.log('courseStore.js in addChangeListener()');
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    console.log('courseStore.js in removeChangeListener()');
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    console.log('courseStore.js in emitChange()');
    this.emit(CHANGE_EVENT);
  }

  // handy functions that return data from the Flux store
  getCourses() {
    console.log('courseStore.js in getCourses()');
    return _courses;
  }

  getCourseBySlug(slug) {
    console.log('courseStore.js in getCourseBySlug()');
    return _courses.find((course) => course.slug === slug);
  }
}

const store = new CourseStore();

// Register the store with the dispatcher
Dispatcher.register((action) => {
  console.log('courseStore.js in Dispatcher.register()');

  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      store.emitChange();
      break;
    default:
  }
});

export default store;
