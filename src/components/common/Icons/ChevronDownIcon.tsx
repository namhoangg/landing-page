import { SVGProps } from 'react';

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    viewBox={`0 0 20 20`}
    fill='none'
    {...props}
  >
    <path
      stroke='#111921'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M16.25 6.875 10 13.125l-6.25-6.25'
    />
  </svg>
);
export default ChevronDownIcon;
