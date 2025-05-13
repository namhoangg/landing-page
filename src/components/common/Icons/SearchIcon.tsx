import { SVGProps } from 'react';

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    fill='none'
    {...props}
  >
    <path
      stroke='#111921'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m19 19-5.197-5.197m0 0A7.5 7.5 0 1 0 3.197 3.196a7.5 7.5 0 0 0 10.606 10.607Z'
    />
  </svg>
);

export default SearchIcon;
