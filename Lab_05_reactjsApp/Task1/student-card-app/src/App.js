import React from 'react';
import StudentCard from './StudentCard';

function App() {
  const students = [
    { name: 'Ali Ahmed', rollNo: 'CS-2001', department: 'Computer Science', university: 'FAST NUCES', color: '#e3f2fd' },
    { name: 'Sara Khan', rollNo: 'SE-3045', department: 'Software Engineering', university: 'COMSATS', color: '#fce4ec' },
    { name: 'Usman Tariq', rollNo: 'IT-1023', department: 'Information Technology', university: 'NUST', color: '#e8f5e9' },
  ];

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '40px 20px',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    fontFamily: 'Arial, sans-serif',
  };

  const titleStyle = {
    width: '100%',
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '20px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Student Information Cards</h1>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          rollNo={student.rollNo}
          department={student.department}
          university={student.university}
          color={student.color}
        />
      ))}
    </div>
  );
}

export default App;
