'use client';

import { useCallback, useEffect, useRef } from 'react';

function useEventCallback<Args extends unknown[], R>(fn: (...args: Args) => R) {
  const ref = useRef<typeof fn>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback((...args: Args) => ref.current(...args), [ref]);
}

export default useEventCallback;
