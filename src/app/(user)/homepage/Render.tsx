import React, { useEffect, useState } from 'react';

export type IType = 'mobile' | 'desktop';

export interface IRender {
  type: IType;

  children: React.ReactNode;
}

const Render = (props: IRender) => {
  const [renderType, setRenderType] = useState<IType>('desktop');

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 992 ? setRenderType('mobile') : setRenderType('desktop');
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  return <>{renderType === props.type && <>{props.children}</>}</>;
};

export default Render;
