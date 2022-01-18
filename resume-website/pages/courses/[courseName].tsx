import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import coursePageData from '../../public/coursePageData';
import { Grid, List, ListItem, Typography } from '@mui/material';
import styles from '../../styles/[courseName].module.css';
import Link from 'next/link';
import { Button } from '@mui/material';

const CoursePage: NextPage = () => {
  const router = useRouter();
  const pathName = router.query.courseName;
  return (
    <>
      {coursePageData
        .filter((course) => course.pathName === pathName)
        .map((c) => (
          <Grid container justifyContent="center" spacing={1} className={styles.course}>
            <Grid item xs={11}>
              <h1>{c.name}</h1>
            </Grid>
            <Grid item xs={11}>
              <h3>Taught By: {c.instructor}</h3>
            </Grid>
            <Grid item xs={6}>
              <img src={c.certPath} />
            </Grid>
            <Grid item xs={11}>
              <Typography>{c.blurb}</Typography>
            </Grid>
            <Grid item xs={8}>
              <h4>Skills Learned:</h4>
              <List>
                {c.skillsLearned.map((skill) => (
                  <ListItem>{skill}</ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={8}>
              <h4>Project Highlights:</h4>
              <List>
                {c.projectHighligts.map((project) => (
                  <ListItem>
                    <Link href={project.link}>
                      <a target="_blank">{project.name}</a>
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={10}>
              <Button variant="contained">
                <Link href={c.githubLink}>
                  <a target="_blank">See course code on GitHub</a>
                </Link>
              </Button>
              <Link href="/skills">Back to Skills</Link>
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default CoursePage;
