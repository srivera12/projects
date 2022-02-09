import { faBars, faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppBar, Drawer, List, ListItem, Toolbar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useContext, useState } from 'react';
import { IsMobileContext } from '../contexts/isMobileContext';
import pageData from '../public/data/pageData';
import styles from '../styles/NavBar.module.css';
import Footer from './Footer';

const NavBar: FC = (): JSX.Element => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useContext(IsMobileContext);

  return (
    <AppBar className={!isMobile ? styles.navbar : styles.mobileNavbar}>
      <Toolbar>
        <div className={!isMobile ? styles.navHome : styles.mobileNavHome}>
          <Link href="/">
            <a data-cy="home-link">
              <FontAwesomeIcon icon={faDiceD20} className={styles.icon} />
              HOME <sup>(beta)</sup>
            </a>
          </Link>
        </div>
        <div className={styles.pages}>
          {!isMobile ? (
            pageData.map((page, i) => (
              <Link href={page.pageRoute} key={i}>
                <a
                  className={currentPath === page.pageRoute ? styles.activeLink : ''}
                  data-cy={`${page.pageName.toLowerCase()}-link`}
                >
                  {page.pageName}
                </a>
              </Link>
            ))
          ) : (
            <>
              <FontAwesomeIcon
                icon={faBars}
                size="2x"
                onClick={() => {
                  setDrawerOpen(true);
                }}
                data-cy="menu-button"
              />
              <Drawer
                open={drawerOpen}
                anchor="right"
                onClose={() => {
                  setDrawerOpen(false);
                }}
                ModalProps={{ keepMounted: true }}
              >
                <List>
                  {pageData.map((page, i) => (
                    <Link href={page.pageRoute} key={i}>
                      <a
                        className={currentPath === page.pageRoute ? styles.mobileActiveLink : ''}
                        data-cy={`${page.pageName.toLowerCase()}-link`}
                      >
                        <ListItem
                          onClick={() => {
                            setDrawerOpen(false);
                          }}
                        >
                          {page.pageName}
                        </ListItem>
                      </a>
                    </Link>
                  ))}
                  <Footer />
                </List>
              </Drawer>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
