import type { NextPage } from 'next';
import styles from '../styles/Projects.module.css';
import { Button, Grid, List, Typography } from '@mui/material';
import projectData from '../public/projectData';
import Link from 'next/link';

const ProjectsPage: NextPage = () => {
  return (
    <div className={styles.projects}>
      <Grid container justifyContent="center">
        <Grid item xs={2}>
          <h1>My Projects</h1>
        </Grid>
        <Grid container item justifyContent="center" spacing={3}>
          {projectData.map((project, i) => (
            <Grid item xs={4} key={i}>
              <div className={styles.idvProject}>
                <h3>{project.name}</h3>
                <img src={project.picPath} />
                <div>
                  <Link href={project.projectLink}>
                    <a target="_blank">
                      <Button variant="contained" color="info">
                        See Project
                      </Button>
                    </a>
                  </Link>
                  <Link href={project.githubLink}>
                    <a target="_blank">
                      <Button variant="contained" color="info">
                        See Code
                      </Button>
                    </a>
                  </Link>
                </div>
                <Typography>{project.blurb}</Typography>
                <Link href={`/project-pages/${project.pathName}`}>
                  <Button variant="outlined" color="warning">
                    Read More
                  </Button>
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectsPage;
