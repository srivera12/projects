import roll1 from '../images/1.png';
import roll2 from '../images/2.png';
import roll3 from '../images/3.png';
import roll4 from '../images/4.png';
import roll5 from '../images/5.png';
import roll6 from '../images/6.png';
import roll7 from '../images/7.png';
import roll8 from '../images/8.png';
import roll9 from '../images/9.png';
import roll10 from '../images/10.png';
import roll11 from '../images/11.png';
import roll12 from '../images/12.png';
import roll13 from '../images/13.png';
import roll14 from '../images/14.png';
import roll15 from '../images/15.png';
import roll16 from '../images/16.png';
import roll17 from '../images/17.png';
import roll18 from '../images/18.png';
import roll19 from '../images/19.png';
import roll20 from '../images/20.png';

interface d20Rolls {
  rolledNumber: number;
  d20Pic: StaticImageData;
  funFact: string;
}

const funFacts: d20Rolls[] = [
  { rolledNumber: 1, d20Pic: roll1, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 2, d20Pic: roll2, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 3, d20Pic: roll3, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 4, d20Pic: roll4, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 5, d20Pic: roll5, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 6, d20Pic: roll6, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 7, d20Pic: roll7, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 8, d20Pic: roll8, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 9, d20Pic: roll9, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 10, d20Pic: roll10, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 11, d20Pic: roll11, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 12, d20Pic: roll12, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 13, d20Pic: roll13, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 14, d20Pic: roll14, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 15, d20Pic: roll15, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 16, d20Pic: roll16, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 17, d20Pic: roll17, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 18, d20Pic: roll18, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 19, d20Pic: roll19, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
  { rolledNumber: 20, d20Pic: roll20, funFact: 'Quis ipsum suspendisse ultrices gravida.' },
];

export default funFacts;
