import { List } from '@mui/material';
import React, { useContext } from 'react';
import uuid from 'uuid/dist/v4';
import { SubjectContext } from './contexts/subjectContext';
import { Subject } from './Subject';

export function SubjectList() {
  const { subjects } = useContext(SubjectContext);

  return (
    <List>
      {subjects.map((subject) => (
        <Subject
          key={uuid()}
          name={subject.name}
          id={subject.id}
          assignments={subject.assignments}
          assignmentsLeft={subject.assignmentsLeft}
          hasCelebrated={subject.hasCelebrated}
        />
      ))}
    </List>
  );
}
