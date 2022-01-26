import styles from '../styles/NavBar.module.css';
import React, { FC } from 'react';
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

const NavBar: FC = (): JSX.Element => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsMobile(true);
      console.log('is mobile');
    } else {
      setIsMobile(false);
      console.log('is not mobile');
    }
  });
  return (
    <AppBar className={styles.navbar}>
      <Toolbar>
        <div className={styles.home}>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faDiceD20} />
              HOME
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
                  {pageData.map((page) => (
                    <ListItem>
                      <Link href={page.pageRoute}>
                        <a className={currentPath === page.pageRoute ? styles.activeLink : ''}>{page.pageName}</a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            pageData.map((page) => (
              <Link href={page.pageRoute}>
                <a className={currentPath === page.pageRoute ? styles.activeLink : ''}>{page.pageName}</a>
              </Link>
            ))
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
