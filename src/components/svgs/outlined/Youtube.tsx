import * as React from "react";
import { SVGProps } from "react";

const YoutubeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={30}
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={15.5527} cy={15} r={14.5} stroke={props.color || "#A51E1E"} />
    <path
      d="M15.7974 7C16.3314 7.003 17.6675 7.016 19.0876 7.073L19.5916 7.09501C21.0207 7.16201 22.4488 7.27802 23.1578 7.47503C24.1029 7.74105 24.8449 8.51509 25.096 9.49716C25.496 11.0573 25.546 14.0994 25.552 14.8365L25.553 14.9885V15.1625C25.546 15.8996 25.496 18.9427 25.096 20.5018C24.8419 21.4869 24.0989 22.262 23.1578 22.524C22.4488 22.721 21.0207 22.837 19.5916 22.904L19.0876 22.927C17.6675 22.983 16.3314 22.997 15.7974 22.999L15.5624 23H15.3073C14.1773 22.993 9.45098 22.942 7.94688 22.524C7.00283 22.258 6.25978 21.4839 6.00876 20.5018C5.60874 18.9417 5.55873 15.8996 5.55273 15.1625V14.8365C5.55873 14.0994 5.60874 11.0563 6.00876 9.49716C6.26278 8.51209 7.00583 7.73705 7.94788 7.47603C9.45098 7.057 14.1783 7.006 15.3083 7H15.7974ZM13.5522 11.5003V18.5007L19.5526 15.0005L13.5522 11.5003Z"
      fill={props.color || "#A51E1E"}
    />
  </svg>
);
export default YoutubeSVG;
