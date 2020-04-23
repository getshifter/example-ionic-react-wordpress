import React, { useState } from 'react';

/**
 * @see https://qiita.com/wakeupsloth/items/6778df1e984f55c446e9#2-%E6%9B%B4%E6%96%B0%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0%E3%81%AEcomponent%E3%82%92%E4%BD%9C%E3%82%8B
 */
export const SWUpdateDialog: React.FC<{ registration: ServiceWorkerRegistration }> = ({ registration }) => {
  const [show, setShow] = useState(!!registration.waiting);
  const style: React.CSSProperties = {
    backgroundColor: 'deepskyblue',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    zIndex: 999,
    cursor: 'pointer'
  };
  const handleUpdate = () => {
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    setShow(false);
    window.location.reload();
  };

  return show ? (
    <div style={style} onClick={handleUpdate}>
      <span>New version is available!</span>
    </div>
  ) : (
    null
  );
};