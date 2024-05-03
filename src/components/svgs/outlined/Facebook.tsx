import * as React from 'react';
import { SVGProps } from 'react';

const FacebookSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={30}
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15.5527} cy={15} r={14.5} stroke={props.color || '#A51E1E'} />
    <path
      d="M12.6152 17.3531V24H16.2402V17.3531H18.9434L19.5059 14.2969H16.2402V13.2156C16.2402 11.6 16.8746 10.9813 18.5121 10.9813C19.0215 10.9813 19.4309 10.9937 19.6684 11.0187V8.24688C19.2215 8.125 18.1277 8 17.4965 8C14.1559 8 12.6152 9.57812 12.6152 12.9812V14.2969H10.5527V17.3531H12.6152Z"
      fill={props.color || '#A51E1E'}
    />
  </svg>
);
export default FacebookSVG;
