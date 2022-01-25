import type { NextPage } from 'next';
import styles from '../styles/Projects.module.css';
import { Button, Grid, List, Typography } from '@mui/material';
import projectData from '../public/data/projectData';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsPage: NextPage = () => {
  return (
    <div className={styles.projects}>
      <Grid container justifyContent="center">
        <Grid item container xs={12} justifyContent="space-between" alignItems="center">
          <Grid item xs={3}></Grid>
          <Grid item xs={3.5}>
            <h1>My Projects</h1>
          </Grid>
          <Grid item xs={3}>
            <a href="">
              <Button variant="contained" color="secondary">
                Website Design Plan
              </Button>
            </a>
          </Grid>
        </Grid>
        <Grid container item justifyContent="center" spacing={3} xs={11}>
          {projectData.map((project, i) => (
            <Grid item xs={4} key={i}>
              <div className={styles.idvProject}>
                <div className={styles.projectName}>
                  <h2>{project.name}</h2>
                </div>
                <div className={styles.projectImg}>
                  <Image src={project.pic} height={250} width={350} />
                </div>
                <div className={styles.seeButtons}>
                  <Link href={project.projectLink}>
                    <a target="_blank">
                      <Button variant="contained" color="secondary">
                        See Project
                      </Button>
                    </a>
                  </Link>
                  <Link href={project.githubLink}>
                    <a target="_blank">
                      <Button variant="contained" color="secondary">
                        See Code
                      </Button>
                    </a>
                  </Link>
                </div>
                <Typography>{project.blurb}</Typography>
                <Link href={`/project-pages/${project.pathName}`}>
                  <Button variant="outlined" color="primary">
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
