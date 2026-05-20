import React from 'react';
import CourseItem from './CourseItem';

function App() {
  const courses = [
    { courseName: 'Web Development', instructor: 'Dr. Ahmed', duration: '16 Weeks', courseType: 'Online' },
    { courseName: 'Data Structures', instructor: 'Prof. Sara', duration: '14 Weeks', courseType: 'Offline' },
    { courseName: 'Machine Learning', instructor: 'Dr. Usman', duration: '12 Weeks', courseType: 'Online' },
    { courseName: 'Database Systems', instructor: 'Prof. Fatima', duration: '15 Weeks', courseType: 'Offline' },
    { courseName: 'Mobile App Dev', instructor: 'Dr. Bilal', duration: '10 Weeks', courseType: 'Online' },
  ];

  const containerStyle = {
    padding: '40px 20px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '24px',
    color: '#333',
  };

  const listStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Course List</h1>
      <div style={listStyle}>
        {courses.map((course, index) => (
          <CourseItem
            key={index}
            courseName={course.courseName}
            instructor={course.instructor}
            duration={course.duration}
            courseType={course.courseType}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
