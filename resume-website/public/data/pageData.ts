interface PageData {
  pageName: string;
  pageRoute: string;
}

const pageData: PageData[] = [
  { pageName: 'About', pageRoute: '/about' },
  { pageName: 'Skills', pageRoute: '/skills' },
  { pageName: 'Projects', pageRoute: '/projects' },
  { pageName: 'Contact', pageRoute: '/contact' },
  { pageName: 'Archive', pageRoute: '/archive' },
];

export default pageData;
