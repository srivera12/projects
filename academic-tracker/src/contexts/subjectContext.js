import React, { createContext, useState } from 'react';

export const SubjectContext = createContext();

export function SubjectProvider(props) {
  // checking local storage
  const initialSubjects = JSON.parse(window.localStorage.getItem('subjects')) || [
    { name: 'emptySubject', completeAssignments: 0 },
  ];
  const initialTotalAssignments = JSON.parse(window.localStorage.getItem('totalAssignments')) || 0;
  const initialHasStartedWeek = JSON.parse(window.localStorage.getItem('hasStartedWeek')) || false;

  // creating stateful variables
  const [subjects, setSubjects] = useState(initialSubjects);
  const [totalAssignments, setTotalAssignments] = useState(initialTotalAssignments);
  const [hasStartedWeek, setHasStartedWeek] = useState(initialHasStartedWeek);

  const addSubject = (subject) => {
    const updatedSubjects = subjects.filter((subject) => subject.name !== 'emptySubject');
    setSubjects([...updatedSubjects, subject]);
    setHasStartedWeek(true);
  };

  const completeAssignment = (id) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, assignmentsCompleted: subject.assignmentsCompleted + 1 } : subject
    );
    setSubjects(updatedSubjects);
    if (hasStartedWeek === false) {
      setHasStartedWeek(true);
    }
  };

  const removeAssignment = (id) => {
    const updatedSubjects = subjects.map((subject) =>
      subject.id === id ? { ...subject, assignmentsCompleted: subject.assignmentsCompleted - 1 } : subject
    );
    setSubjects(updatedSubjects);
  };

  const resetWeek = () => {
    const updatedSubjects = subjects.map((subject) => ({ ...subject, assignmentsCompleted: 0 }));
    setSubjects(updatedSubjects);
    setHasStartedWeek(false);
    window.location.reload();
  };

  const resetSubjects = () => {
    window.localStorage.clear();
    window.location.reload();
  };

  return (
    <SubjectContext.Provider
      value={{
        subjects,
        addSubject,
        completeAssignment,
        removeAssignment,
        resetSubjects,
        resetWeek,
        totalAssignments,
        setTotalAssignments,
        hasStartedWeek,
      }}
    >
      {props.children}
    </SubjectContext.Provider>
  );
}
