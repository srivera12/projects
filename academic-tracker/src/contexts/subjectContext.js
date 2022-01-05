import React, { createContext, useState } from 'react';

export const SubjectContext = createContext();

export function SubjectProvider(props) {
  // checking local storage
  const initialSubjects = JSON.parse(window.localStorage.getItem('subjects')) || [];

  // creating stateful variable
  const [subjects, setSubjects] = useState(initialSubjects);

  const addSubject = (subject) => {
    setSubjects([...subjects, subject]);
  };

  const decrementAssignments = (id) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, assignmentsLeft: subject.assignmentsLeft - 1 } : subject
    );
    setSubjects(updatedSubjects);
  };

  const resetSubjects = () => {
    setSubjects([]);
    window.location.reload();
  };

  // marks that a subject as been "celebrated" so the confetti only happens once
  const completeCelebration = (id) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, hasCelebrated: true } : subject
    );
    setSubjects(updatedSubjects);
  };

  return (
    <SubjectContext.Provider value={{ subjects, addSubject, decrementAssignments, resetSubjects, completeCelebration }}>
      {props.children}
    </SubjectContext.Provider>
  );
}
