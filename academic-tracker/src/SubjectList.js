import { List } from '@mui/material';
import React, { useContext } from 'react';
import uuid from 'uuid/dist/v4';
import { Subject } from './Subject';
import { SubjectContext } from './subjectContext';

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
