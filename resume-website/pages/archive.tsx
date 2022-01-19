import { Button, Grid } from '@mui/material';
import type { NextPage } from 'next';
import previousWebsitesData from '../public/previousWebsitesData';
import styles from '../styles/Archive.module.css';

const ArchivePage: NextPage = () => {
  return (
    <div className={styles.archive}>
      <Grid container justifyContent="center" alignItems="center" rowSpacing={10}>
        <Grid item xs={6}>
          <h1>Website Archive</h1>
          <h4>
            Here you can see previous versions of my portfolio website. As I continue to learn more and refine what I
            learn, previous iterations of this site can be found here.
          </h4>
        </Grid>
        <Grid item container justifyContent="center" alignItems="center">
          {previousWebsitesData.map((site) => (
            <Grid item xs={4}>
              <div className={styles.previousSite}>
                <h2>Retired: {site.retiredDate}</h2>
                <img src={site.picPath} />
                <a href={site.link} target="_blank">
                  <Button variant="contained" color="secondary">
                    Vist Site
                  </Button>
                </a>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ArchivePage;
