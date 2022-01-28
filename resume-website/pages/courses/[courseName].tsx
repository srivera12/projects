import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import courseData from '../../public/data/courseData';
import { Grid, List, ListItem, Typography } from '@mui/material';
import styles from '../../styles/[courseName].module.css';
import Link from 'next/link';
import { Button } from '@mui/material';
import Image from 'next/image';
import { v4 } from 'uuid';

const CoursePage: NextPage = () => {
  const router = useRouter();
  const pathName = router.query.courseName;
  return (
    <>
      {courseData
        .filter((course) => course.pathName === pathName)
        .map((c) => (
          <Grid container justifyContent="center" spacing={1} className={styles.course} key={parseInt(v4())}>
            <Grid item xs={11}>
              <h1>{c.name}</h1>
            </Grid>
            <Grid item xs={11}>
              <h3>Taught By: {c.instructor}</h3>
            </Grid>
            <Grid item xs={10} md={6}>
              <img src={c.certPath} alt={`certification of completion for ${c.name}`} />
            </Grid>
            <Grid item xs={11}>
              <Typography>{c.blurb}</Typography>
            </Grid>
            <Grid item xs={10} md={8}>
              <h4>Skills Learned:</h4>
              <List>
                {c.skillsLearned.map((skill) => (
                  <ListItem key={parseInt(v4())}>{skill}</ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={10} md={8}>
              <h4>Project Highlights:</h4>
              <List>
                {c.projectHighlights.map((project) => (
                  <ListItem key={parseInt(v4())}>
                    <Link href={project.link} passHref>
                      <a target="_blank">{project.name}</a>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={10}>
              <div className={styles.courseButtons}>
                <Button variant="contained" color="secondary">
                  <Link href={c.githubLink} passHref>
                    <a target="_blank">See course code on GitHub</a>
                  </Link>
                </Button>
                <Link href="/skills">
                  <Button variant="outlined">Back to Skills</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default CoursePage;
