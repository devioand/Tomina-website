import * as React from 'react';
import { SVGProps } from 'react';

const YoutubeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={35}
    height={30}
    viewBox="0 0 48 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M46.3 5.12C45.76 3.1 44.19 1.52 42.18 0.98C38.55 0 24 0 24 0C24 0 9.43997 0 5.80997 0.98C3.80997 1.52 2.22997 3.11 1.68997 5.12C0.719968 8.77 0.719971 16.4 0.719971 16.4C0.719971 16.4 0.719968 24.02 1.68997 27.68C2.22997 29.7 3.79997 31.28 5.80997 31.82C9.43997 32.79 24 32.79 24 32.79C24 32.79 38.56 32.79 42.19 31.81C44.19 31.27 45.77 29.68 46.31 27.67C47.28 24.02 47.28 16.39 47.28 16.39C47.28 16.39 47.27 8.77 46.3 5.12ZM19.24 23.32V9.48L31.4 16.4L19.24 23.32Z"
      fill={props.color || '#B8AA84'}
    />
  </svg>
);
export default YoutubeSVG;
