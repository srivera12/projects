import { Button, Grid, Typography } from '@mui/material'; 
import type { NextPage } from 'next'; 
import Link from 'next/link'; 
import { useContext } from 'react'; 
import { IsMobileContext } from '../contexts/isMobileContext'; 
import projectData from '../public/data/projectData'; 
import styles from '../styles/Projects.module.css'; 

const ProjectsPage: NextPage = () => { 
  const { isMobile } = useContext(IsMobileContext); 

  return ( 
    <div className={!isMobile ? styles.projects : styles.mobileProjects}> 
      <Grid container justifyContent="center"> 
        <Grid 
          item 
          container 
          xs={12} 
          justifyContent="space-between" 
          alignItems="center" 
          flexDirection={isMobile ? 'column' : 'row'} 
        > 
          {!isMobile ? <Grid item xs={3} md={3} lg={4} xl={5}></Grid> : null} 
          <Grid item xs={11} md={6} lg={5} xl={4}> 
            <h1>MY PROJECTS</h1> 
          </Grid> 
          <Grid item xs={11} md={2} lg={3} xl={3}> 
            <a href="/projects/website-design-plan.pdf" target="_blank" data-cy="design-plan-button"> 
              <Button variant="contained" color="secondary"> 
                Website Design Plan 
              </Button> 
            </a> 
          </Grid> 
        </Grid> 
        <Grid container item justifyContent="center" spacing={6} xs={11}> 
          {projectData.map((project, i) => ( 
            <Grid item xs={12} md={6} lg={4} key={i}> 
              <div className={styles.idvProject}> 
                <div className={styles.projectName}> 
                  <h2>{project.name}</h2> 
                </div> 
                <div className={styles.projectImg}> 
                  <img src={project.picPath} alt={`${project.name} in use`} /> 
                </div> 
                <div className={styles.seeButtons}> 
                  <Link href={project.projectLink}> 
                    <a target="_blank" data-cy={`${project.pathName}-project-button`}> 
                      <Button variant="contained" color="secondary"> 
                        See Project 
                      </Button> 
                    </a> 
                  </Link> 
                  <Link href={project.githubLink}> 
                    <a target="_blank" data-cy={`${project.pathName}-github-button`}> 
                      <Button variant="contained" color="secondary"> 
                        See Code 
                      </Button> 
                    </a> 
                  </Link> 
                </div> 
                <Typography>{project.blurb}</Typography> 
                <div className={styles.readMore}> 
                  <Link href={`/project-pages/${project.pathName}`} passHref> 
                    <a data-cy={`${project.pathName}-read-more-button`}> 
                      <Button variant="outlined" color="primary"> 
                        Read More 
                      </Button> 
                    </a> 
                  </Link> 
                </div> 
              </div> 
            </Grid> 
          ))} 
        </Grid> 
      </Grid> 
    </div> 
  ); 
}; 

export default ProjectsPage; 
