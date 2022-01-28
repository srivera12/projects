import { NextPage } from 'next';
import { useRouter } from 'next/router';
import projectData from '../../public/data/projectData';
import { Grid, Typography, List, ListItem, Button } from '@mui/material';
import Link from 'next/link';
import styles from '../../styles/[projectName].module.css';
import Image from 'next/image';
import { v4 } from 'uuid';

const ProjectPage: NextPage = () => {
  const router = useRouter();
  const pathName = router.query.projectName;
  return (
    <>
      {projectData
        .filter((project) => project.pathName === pathName)
        .map((p) => (
          <Grid container justifyContent="center" spacing={1} className={styles.project} key={parseInt(v4())}>
            <Grid item xs={11}>
              <h1>{p.name}</h1>
            </Grid>
            <Grid item xs={10} md={6}>
              <img src={p.picPath} alt={`${p.name} in use`} />
            </Grid>
            <Grid item xs={11}>
              <Typography>{p.blurb}</Typography>
            </Grid>
            <Grid item xs={11}>
              <Typography>{p.approach}</Typography>
            </Grid>
            <Grid item xs={10} md={8}>
              <h4>Challenges:</h4>
              <List>
                {p.challenges.map((challenge) => (
                  <ListItem key={parseInt(v4())}>{challenge}</ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={10} md={8}>
              <h4>Reflections:</h4>
              <Typography>{p.reflections}</Typography>
            </Grid>
            <Grid item xs={10}>
              <div className={styles.projectButtons}>
                <Button variant="contained" color="secondary">
                  <Link href={p.projectLink} passHref>
                    <a target="_blank">See Project</a>
                  </Link>
                </Button>
                <Button variant="contained" color="secondary">
                  <Link href={p.githubLink} passHref>
                    <a target="_blank">See Code</a>
                  </Link>
                </Button>
                <Link href="/projects">
                  <Button variant="outlined">Back to All Projects</Button>
                </Link>
              </div>
            </Grid>
          </Grid>
        ))}
    </>
  );
};

export default ProjectPage;
