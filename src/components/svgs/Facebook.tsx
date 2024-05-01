import * as React from 'react';
import { SVGProps } from 'react';

const FacebookSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={15}
    height={30}
    viewBox="0 0 15 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.68 35.64H10.76V17.91H15.7L16.23 11.97H10.76C10.76 11.97 10.76 9.74998 10.76 8.58998C10.76 7.18998 11.04 6.63998 12.39 6.63998C13.48 6.63998 16.22 6.63998 16.22 6.63998V0.47998C16.22 0.47998 12.18 0.47998 11.32 0.47998C6.05 0.47998 3.68 2.79998 3.68 7.23998C3.68 11.11 3.68 11.97 3.68 11.97H0V17.98H3.68V35.64Z"
      fill={props.color || '#B8AA84'}
    />
  </svg>
);
export default FacebookSVG;
