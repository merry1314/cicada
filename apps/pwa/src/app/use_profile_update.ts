import p from '@/global_states/profile';
import getProfile from '@/server/get_profile';
import { useEffect } from 'react';
import notice from '#/utils/notice';

export default () => {
  const profile = p.useState();

  useEffect(() => {
    if (profile) {
      const updateProfile = () =>
        getProfile()
          .then((newProfile) =>
            p.set({
              ...newProfile,
              super: !!newProfile.super,
            }),
          )
          .catch((error) => {
            console.error(error);
            notice.error('更新个人资料失败');
          });
      const timer = window.setInterval(updateProfile, 1000 * 60 * 30);
      return window.clearInterval(timer);
    }
  }, [profile]);
};
