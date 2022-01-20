import web1 from '../images/website1.png';

interface previousWebsite {
  retiredDate: string;
  pic: StaticImageData;
  link: string;
}

const previousWebsitesData: previousWebsite[] = [
  { retiredDate: 'TBD', pic: web1, link: 'https://dazzling-bassi-9c5808.netlify.app' },
];

export default previousWebsitesData;
