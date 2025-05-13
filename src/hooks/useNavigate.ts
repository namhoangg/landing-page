import { useRouter } from 'next/navigation';

const useNavigate = () => {
  const router = useRouter();

  return (path: string, params: URLSearchParams | undefined = undefined) => {
    const queryString = new URLSearchParams(params);

    router.replace(`${path}?${queryString.toString()}`);
  };
};

export default useNavigate;
