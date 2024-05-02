import * as React from 'react';
import { SVGProps } from 'react';

const InstagramSVG = (props: SVGProps<SVGSVGElement>) => (
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
      d="M15.5527 7C13.3817 7 13.1087 7.01 12.2557 7.048C11.4027 7.088 10.8217 7.222 10.3127 7.42C9.77858 7.62033 9.29488 7.9354 8.89573 8.343C8.48813 8.74214 8.17306 9.22584 7.97273 9.76C7.77473 10.268 7.63973 10.85 7.60073 11.7C7.56273 12.555 7.55273 12.827 7.55273 15.001C7.55273 17.173 7.56273 17.445 7.60073 18.298C7.64073 19.15 7.77473 19.731 7.97273 20.24C8.17773 20.766 8.45073 21.212 8.89573 21.657C9.33973 22.102 9.78573 22.376 10.3117 22.58C10.8217 22.778 11.4017 22.913 12.2537 22.952C13.1077 22.99 13.3797 23 15.5527 23C17.7257 23 17.9967 22.99 18.8507 22.952C19.7017 22.912 20.2847 22.778 20.7937 22.58C21.3275 22.3795 21.8109 22.0645 22.2097 21.657C22.6547 21.212 22.9277 20.766 23.1327 20.24C23.3297 19.731 23.4647 19.15 23.5047 18.298C23.5427 17.445 23.5527 17.173 23.5527 15C23.5527 12.827 23.5427 12.555 23.5047 11.701C23.4647 10.85 23.3297 10.268 23.1327 9.76C22.9324 9.22584 22.6173 8.74214 22.2097 8.343C21.8106 7.9354 21.3269 7.62033 20.7927 7.42C20.2827 7.222 19.7007 7.087 18.8497 7.048C17.9957 7.01 17.7247 7 15.5507 7H15.5527ZM14.8357 8.442H15.5537C17.6897 8.442 17.9427 8.449 18.7857 8.488C19.5657 8.523 19.9897 8.654 20.2717 8.763C20.6447 8.908 20.9117 9.082 21.1917 9.362C21.4717 9.642 21.6447 9.908 21.7897 10.282C21.8997 10.563 22.0297 10.987 22.0647 11.767C22.1037 12.61 22.1117 12.863 22.1117 14.998C22.1117 17.133 22.1037 17.387 22.0647 18.23C22.0297 19.01 21.8987 19.433 21.7897 19.715C21.6606 20.0619 21.456 20.3758 21.1907 20.634C20.9107 20.914 20.6447 21.087 20.2707 21.232C19.9907 21.342 19.5667 21.472 18.7857 21.508C17.9427 21.546 17.6897 21.555 15.5537 21.555C13.4177 21.555 13.1637 21.546 12.3207 21.508C11.5407 21.472 11.1177 21.342 10.8357 21.232C10.4886 21.1033 10.1743 20.899 9.91573 20.634C9.65001 20.3756 9.44506 20.0614 9.31573 19.714C9.20673 19.433 9.07573 19.009 9.04073 18.229C9.00273 17.386 8.99473 17.133 8.99473 14.996C8.99473 12.859 9.00273 12.608 9.04073 11.765C9.07673 10.985 9.20673 10.561 9.31673 10.279C9.46173 9.906 9.63573 9.639 9.91573 9.359C10.1957 9.079 10.4617 8.906 10.8357 8.761C11.1177 8.651 11.5407 8.521 12.3207 8.485C13.0587 8.451 13.3447 8.441 14.8357 8.44V8.442ZM19.8237 9.77C19.6977 9.77 19.5728 9.79483 19.4564 9.84308C19.3399 9.89132 19.2341 9.96203 19.1449 10.0512C19.0558 10.1403 18.9851 10.2462 18.9368 10.3626C18.8886 10.4791 18.8637 10.6039 18.8637 10.73C18.8637 10.8561 18.8886 10.9809 18.9368 11.0974C18.9851 11.2138 19.0558 11.3197 19.1449 11.4088C19.2341 11.498 19.3399 11.5687 19.4564 11.6169C19.5728 11.6652 19.6977 11.69 19.8237 11.69C20.0783 11.69 20.3225 11.5889 20.5026 11.4088C20.6826 11.2288 20.7837 10.9846 20.7837 10.73C20.7837 10.4754 20.6826 10.2312 20.5026 10.0512C20.3225 9.87114 20.0783 9.77 19.8237 9.77ZM15.5537 10.892C15.0088 10.8835 14.4676 10.9835 13.9617 11.1861C13.4558 11.3888 12.9952 11.6901 12.6069 12.0724C12.2185 12.4548 11.9101 12.9106 11.6996 13.4133C11.4891 13.916 11.3806 14.4555 11.3806 15.0005C11.3806 15.5455 11.4891 16.085 11.6996 16.5877C11.9101 17.0904 12.2185 17.5462 12.6069 17.9286C12.9952 18.3109 13.4558 18.6122 13.9617 18.8149C14.4676 19.0175 15.0088 19.1175 15.5537 19.109C16.6323 19.0922 17.6609 18.6519 18.4177 17.8833C19.1745 17.1146 19.5986 16.0792 19.5986 15.0005C19.5986 13.9218 19.1745 12.8864 18.4177 12.1177C17.6609 11.3491 16.6323 10.9088 15.5537 10.892ZM15.5537 12.333C15.904 12.333 16.2508 12.402 16.5744 12.536C16.8979 12.67 17.1919 12.8665 17.4396 13.1141C17.6872 13.3618 17.8837 13.6558 18.0177 13.9794C18.1518 14.303 18.2207 14.6498 18.2207 15C18.2207 15.3502 18.1518 15.697 18.0177 16.0206C17.8837 16.3442 17.6872 16.6382 17.4396 16.8859C17.1919 17.1335 16.8979 17.33 16.5744 17.464C16.2508 17.598 15.904 17.667 15.5537 17.667C14.8464 17.667 14.168 17.386 13.6679 16.8859C13.1677 16.3857 12.8867 15.7073 12.8867 15C12.8867 14.2927 13.1677 13.6143 13.6679 13.1141C14.168 12.614 14.8464 12.333 15.5537 12.333Z"
      fill={props.color || '#A51E1E'}
    />
  </svg>
);
export default InstagramSVG;
