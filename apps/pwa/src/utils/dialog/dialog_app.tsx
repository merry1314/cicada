import { useCallback, useEffect, useState } from 'react';
import {
  Alert as AlertShape,
  Captcha as CaptchaShape,
  Confirm as ConfirmShape,
  Dialog,
  DialogType,
} from './constants';
import e, { EventType } from './eventemitter';
import Alert from './alert';
import Confirm from './confirm';
import Captcha from './captcha';

function DialogApp() {
  const [dialogList, setDialogList] = useState<Dialog[]>([]);
  const onDestroy = useCallback(
    (id: string) => setDialogList((dl) => dl.filter((d) => d.id !== id)),
    [],
  );

  useEffect(() => {
    const unlistenOpen = e.listen(EventType.OPEN, (d) =>
      setDialogList((dl) => [...dl, d]),
    );
    return unlistenOpen;
  }, []);

  return (
    <>
      {dialogList.map((d) => {
        switch (d.type) {
          case DialogType.ALERT: {
            return (
              <Alert key={d.id} alert={d as AlertShape} onDestroy={onDestroy} />
            );
          }
          case DialogType.CONFIRM: {
            return (
              <Confirm
                key={d.id}
                confirm={d as ConfirmShape}
                onDestroy={onDestroy}
              />
            );
          }
          case DialogType.CAPTCHA: {
            return (
              <Captcha
                key={d.id}
                captcha={d as CaptchaShape}
                onDestroy={onDestroy}
              />
            );
          }
          default: {
            return null;
          }
        }
      })}
    </>
  );
}

export default DialogApp;
