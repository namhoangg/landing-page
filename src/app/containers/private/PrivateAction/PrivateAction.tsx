import { Button } from '@/components';
import { LocalStorageKey } from '@/constants';
import { getFromLocalStorage, setToLocalStorage } from '@/utils';

const PrivateAction = () => {
  const handleOnToggle = () => {
    const isPrivate = getFromLocalStorage(LocalStorageKey.PRIVATE);

    isPrivate === null
      ? setToLocalStorage(LocalStorageKey.PRIVATE, true)
      : setToLocalStorage(LocalStorageKey.PRIVATE, !isPrivate);
  };

  return (
    <div style={{ margin: '400px auto', textAlign: 'center' }}>
      <p>
        Is enable to press F12: {(getFromLocalStorage(LocalStorageKey.PRIVATE) ?? '').toString()}
      </p>
      <Button
        type='primary'
        onClick={handleOnToggle}
        style={{ margin: '0 auto' }}
      >
        Toggle hidden F12
      </Button>
    </div>
  );
};

export default PrivateAction;
