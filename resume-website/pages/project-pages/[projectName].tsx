import { Button, Grid, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import { useContext } from 'react';
import { v4 } from 'uuid';
import { IsMobileContext } from '../../contexts/isMobileContext';
import projectData, { ProjectData } from '../../public/data/projectData';
import styles from '../../styles/[projectName].module.css';

type ProjectPage = {
  children: React.ReactNode;
  projectPageData: ProjectPageProps;
};

interface ProjectPageProps {
  projectName: string;
  singleProjectData: ProjectData;
}

const ProjectPage = ({ projectPageData }: ProjectPage) => {
  const pageData = projectPageData.singleProjectData;
  const { isMobile } = useContext(IsMobileContext);

  return (
    <>
      <Grid
        container
        justifyContent="center"
        spacing={1}
        className={!isMobile ? styles.project : styles.mobileProject}
        key={parseInt(v4())}
      >
        <Grid item xs={11}>
          <h1>{pageData.name}</h1>
        </Grid>
        <Grid item xs={10} md={6}>
          <img src={pageData.picPath} alt={`${pageData.name} in use`} />
        </Grid>
        <Grid item xs={11}>
          <Typography>{pageData.blurb}</Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography>{pageData.approach}</Typography>
        </Grid>
        <Grid item xs={10} md={8}>
          <h4>Challenges:</h4>
          <List>
            {pageData.challenges.map((challenge) => (
              <ListItem key={parseInt(v4())}>{challenge}</ListItem>
            ))}
          </List>
        </Grid>
        <Grid item xs={10} md={8}>
          <h4>Reflections:</h4>
          <Typography>{pageData.reflections}</Typography>
        </Grid>
        <Grid item xs={10}>
          <div className={!isMobile ? styles.projectButtons : styles.mobileProjectButtons}>
            <Button variant="contained" color="secondary">
              <Link href={pageData.projectLink} passHref>
                <a target="_blank" data-cy={`${pageData.pathName}-project-button`}>
                  See Project
                </a>
              </Link>
            </Button>
            <Button variant="contained" color="secondary">
              <Link href={pageData.githubLink} passHref>
                <a target="_blank" data-cy={`${pageData.pathName}-github-button`}>
                  See Code
                </a>
              </Link>
            </Button>
            <Link href="/projects">
              <a data-cy="projects-button">
                <Button variant="outlined">Back to All Projects</Button>
              </a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectPage;

function getAllProjectPageIds() {
  return projectData.map((project) => ({
    params: {
      projectName: project.pathName,
    },
  }));
}

export async function getStaticPaths() {
  const paths = getAllProjectPageIds();
  return {
    paths,
    fallback: false,
  };
}

function getProjectPageData(projectName: string) {
  const singleProjectData = projectData.filter((project) => projectName === project.pathName).pop();
  return {
    projectName,
    singleProjectData,
  };
}

interface ProjectStaticProps {
  params: ProjectParams;
}

interface ProjectParams {
  projectName: string;
}

export async function getStaticProps({ params }: ProjectStaticProps) {
  const projectPageData = getProjectPageData(params.projectName);
  return {
    props: {
      projectPageData,
    },
  };
}
