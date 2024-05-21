import React, {FC, createContext, useContext, useEffect, useState} from 'react';
import {CourseType, courses as coursesJson} from '../../Assets/data';

interface CoursesContextType {
  courses: Array<CourseType>;
  updateCourseProgress: (course: object) => void;
  selectedCourse: CourseType | null;
  updateSelectedCourse: (courseName: string) => void;
  addQuery: (courseName: string, query: string) => void;
}

type Props = {
  children?: React.ReactNode;
};

const CoursesContext = createContext<CoursesContextType>({
  courses: [],
  updateCourseProgress: () => {},
  selectedCourse: null,
  updateSelectedCourse: () => {},
  addQuery: () => {},
});

export const CoursesProvider: FC<Props> = ({children}) => {
  const [courses, setCourses] = useState(coursesJson);
  const [selectedCourse, setSelectedCourse] = useState<CourseType | null>(null);

  const generateUniqueId = () => {
    return (
      Math.random().toString(36).substring(2, 10) + // Random string
      new Date().getTime().toString(36) // Timestamp
    );
  };

  const updateCourseProgress = (course: object) => {
    console.log('COURRSE', course);
  };

  const updateSelectedCourse = (courseName: string) => {
    console.log('COURRSE___NAMEEE', courseName);
    const courseFound = courses.filter(course => course.name === courseName);
    console.log('FOURRR', courseFound[0]);
    if (courseFound.length) setSelectedCourse(courseFound[0]);
  };

  const addQuery = (courseName: string, query: string) => {
    const queryToBeAdded = {
      queryId: generateUniqueId(),
      query,
      replies: [],
    };
    let selectedCourseCopy: CourseType = JSON.parse(
      JSON.stringify(selectedCourse),
    );
    selectedCourseCopy.queries.push(queryToBeAdded);
    setSelectedCourse(selectedCourseCopy);
    let coursesCopy: Array<CourseType> = JSON.parse(JSON.stringify(courses));
    coursesCopy.forEach((course, index) => {
      console.log('ARRARTT');
      if (courseName === course.name) {
        coursesCopy[index] = selectedCourseCopy;
        console.log('COU_FOURRR', course, courseName);
      }
    });
    console.log('COURSESS', coursesCopy);
    setCourses(coursesCopy);
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        updateCourseProgress,
        selectedCourse,
        updateSelectedCourse,
        addQuery,
      }}>
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesContext;

export function useCourses() {
  const context = useContext(CoursesContext);
  return context;
}
