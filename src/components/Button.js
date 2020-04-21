import s from 'styled-components';
import { MIDNIGHT, NAVY, WHITE } from '../constants/colors';

const styles = `
border-radius: 0rem;
padding: 0.5rem 1rem;
background: ${NAVY};
color: ${WHITE};
display: inline-block;
margin-bottom: 1rem;
text-decoration: none;
border-radius: 4px;

&:visited {
  color: ${WHITE};
  text-decoration: none;
}

&:hover,
&:focus,
&:active {
  background: ${MIDNIGHT};
  color: ${WHITE};
  text-decoration: none;
}
`;

export const Button = s.a`${styles}`;
