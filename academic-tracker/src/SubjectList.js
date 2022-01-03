import React from 'react';
import { Subject } from './Subject';
import { List } from '@mui/material';
import uuid from 'uuid/dist/v4';

export function SubjectList({ subjects, decrementAssignments, completeCelebration }) {
  return (
    <List>
      {subjects.map((subject) => (
        <Subject
          key={uuid()}
          name={subject.name}
          id={subject.id}
          assignments={subject.assignments}
          assignmentsLeft={subject.assignmentsLeft}
          decrementAssignments={decrementAssignments}
          completeCelebration={completeCelebration}
          hasCelebrated={subject.hasCelebrated}
        />
      ))}
    </List>
  );
}
