import { ExceptionCode } from '#/constants/exception';
import { NAME_MAX_LENGTH as MUSICBILL_NAME_MAX_LENGTH } from '#/constants/musicbill';
import { NAME_MAX_LENGTH as SINGER_NAME_MAX_LENGTH } from '#/constants/singer';
import dialog from '@/utils/dialog';
import createMusicbillRequest from '@/server/api/create_musicbill';
import createSingerRequest from '@/server/api/create_singer';
import { Variant } from '@/components/button';
import notice from '@/utils/notice';
import logger from '@/utils/logger';
import { t } from '@/i18n';
import { Music, SingerWithAliases } from './constants';
import e, { EventType } from './eventemitter';

export function openCreateMusicbillDialog() {
  return dialog.input({
    title: t('create_musicbill'),
    label: t('name'),
    maxLength: MUSICBILL_NAME_MAX_LENGTH,
    confirmVariant: Variant.PRIMARY,
    confirmText: t('create'),
    onConfirm: async (name: string) => {
      const trimmedName = name.replace(/\s+/, ' ').trim();
      if (!trimmedName.length) {
        notice.error(t('empty_name_warning'));
        return false;
      }
      try {
        const id = await createMusicbillRequest(trimmedName);
        e.emit(EventType.MUSICBILL_CREATED, { id });
      } catch (error) {
        logger.error(error, 'Failed to create musicbill');
        notice.error(error.message);
        return false;
      }
    },
  });
}

export function openCreateSingerDialog(callback: (id: string) => void) {
  const createSinger = async ({
    name,
    force = false,
  }: {
    name: string;
    force?: boolean;
  }) => {
    const trimmedName = name.replace(/\s+/g, ' ').trim();
    if (!trimmedName) {
      notice.error(t('empty_name_warning'));
      return false;
    }

    try {
      const id = await createSingerRequest({ name: trimmedName, force });
      callback(id);
    } catch (error) {
      logger.error(error, 'Failed to create singer');
      if (error.code === ExceptionCode.SINGER_ALREADY_EXISTED) {
        dialog.confirm({
          content: t('repeated_name_singer_warning'),
          onConfirm: () => void createSinger({ name, force: true }),
        });
      } else {
        notice.error(error.message);
        return false;
      }
    }
  };
  return dialog.input({
    title: t('create_singer'),
    label: t('name'),
    maxLength: SINGER_NAME_MAX_LENGTH,
    confirmVariant: Variant.PRIMARY,
    confirmText: t('create'),
    onConfirm: async (name: string) =>
      createSinger({
        name,
      }),
  });
}

export const filterMusic = (
  music: Omit<Music, 'singers'> & {
    singers: SingerWithAliases[];
  },
  keyword: string,
) => {
  if (keyword) {
    const lowerCaseKeyword = keyword.toLowerCase();
    return (
      music.name.toLowerCase().includes(lowerCaseKeyword) ||
      music.aliases.find((a) => a.toLowerCase().includes(lowerCaseKeyword)) ||
      music.singers.find(
        (singer) =>
          singer.name.toLowerCase().includes(lowerCaseKeyword) ||
          singer.aliases.find((alias) =>
            alias.toLowerCase().includes(lowerCaseKeyword),
          ),
      )
    );
  }
  return true;
};

export const formatSecond = (s: number) => {
  const minute = Math.floor(s / 60);
  const second = Math.floor(s % 60);
  return `${minute < 10 ? '0' : ''}${minute}:${
    second < 10 ? '0' : ''
  }${second}`;
};
