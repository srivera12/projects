import { Button, Grid, List, ListItem, Typography } from '@mui/material'; 
import Link from 'next/link'; 
import React, { useContext } from 'react'; 
import { v4 } from 'uuid'; 
import { IsMobileContext } from '../../contexts/isMobileContext'; 
import courseData, { CoursePageData } from '../../public/data/courseData'; 
import styles from '../../styles/[courseName].module.css'; 

type CoursePage = { 
  children: React.ReactNode; 
  coursePageData: CoursePageProps; 
}; 

interface CoursePageProps { 
  courseName: string; 
  singleCourseData: CoursePageData; 
} 

const CoursePage = ({ coursePageData }: CoursePage) => { 
  const pageData = coursePageData.singleCourseData; 
  const { isMobile } = useContext(IsMobileContext); 

  return ( 
    <> 
      <Grid container justifyContent="center" spacing={1} className={styles.course} key={parseInt(v4())}> 
        <Grid item xs={11}> 
          <h1>{pageData.name}</h1> 
        </Grid> 
        <Grid item xs={11}> 
          <h3>Taught By: {pageData.instructor}</h3> 
        </Grid> 
        <Grid item xs={10} md={6}> 
          <img src={pageData.certPath} alt={`certification of completion for ${pageData.name}`} /> 
        </Grid> 
        <Grid item xs={11}> 
          <Typography>{pageData.blurb}</Typography> 
        </Grid> 
        <Grid item xs={10} md={8}> 
          <h4>Skills Learned:</h4> 
          <List> 
            {pageData.skillsLearned.map((skill) => ( 
              <ListItem key={parseInt(v4())}>{skill}</ListItem> 
            ))} 
          </List> 
        </Grid> 
        <Grid item xs={10} md={8}> 
          <h4>Project Highlights:</h4> 
          <List> 
            {pageData.projectHighlights.map((project, i) => ( 
              <ListItem key={i}> 
                <Link href={project.link} passHref> 
                  <a target="_blank" data-cy={`link-${i + 1}`}> 
                    {project.name} 
                  </a> 
                </Link> 
              </ListItem> 
            ))} 
          </List> 
        </Grid> 
        <Grid item xs={10}> 
          <div className={!isMobile ? styles.courseButtons : styles.mobileCourseButtons}> 
            <Button variant="contained" color="secondary"> 
              <Link href={pageData.githubLink} passHref> 
                <a target="_blank" data-cy="github-link"> 
                  See course code on GitHub 
                </a> 
              </Link> 
            </Button> 
            <Link href="/skills"> 
              <a> 
                <Button variant="outlined" data-cy="skills-button"> 
                  Back to Skills 
                </Button> 
              </a> 
            </Link> 
          </div> 
        </Grid> 
      </Grid> 
    </> 
  ); 
}; 

export default CoursePage; 

function getAllCoursePageIds() { 
  return courseData.map((course) => ({ 
    params: { 
      courseName: course.pathName, 
    }, 
  })); 
} 

export async function getStaticPaths() { 
  const paths = getAllCoursePageIds(); 
  return { 
    paths, 
    fallback: false, 
  }; 
} 

function getCoursePageData(courseName: string) { 
  const singleCourseData = courseData.filter((course) => course.pathName === courseName).pop(); 
  return { 
    courseName, 
    singleCourseData, 
  }; 
} 

interface CourseStaticProps { 
  params: CourseParams; 
} 

interface CourseParams { 
  courseName: string; 
} 

export async function getStaticProps({ params }: CourseStaticProps) { 
  const coursePageData = getCoursePageData(params.courseName); 
  return { 
    props: { 
      coursePageData, 
    }, 
  }; 
} 
