import styles from '../styles/NavBar.module.css';
import React, { FC, useContext } from 'react';
import Link from 'next/link';
import NavLink from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTheme } from '@emotion/react';
import pageData from '../public/data/pageData';
import MenuIcon from '@mui/material/Menu';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IsMobileContext } from '../contexts/isMobileContext';

const NavBar: FC = (): JSX.Element => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isMobile } = useContext(IsMobileContext);
  return (
    <AppBar className={styles.navbar} color="transparent">
      <Toolbar>
        <div className={styles.home}>
          <Link href="/">
            <a data-cy="home-link">
              <FontAwesomeIcon icon={faDiceD20} />
              HOME <sup>(beta)</sup>
            </a>
          </Link>
        </div>
        <div className={styles.pages}>
          {isMobile ? (
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
                    <ListItem key={i}>
                      <Link href={page.pageRoute}>
                        <a
                          className={currentPath === page.pageRoute ? styles.activeLink : ''}
                          data-cy={`${page.pageName.toLowerCase()}-link`}
                        >
                          {page.pageName}
                        </a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
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
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
