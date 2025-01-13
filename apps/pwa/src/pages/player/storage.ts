import Storage from '@/utils/storage';
import { MusicWithSingerAliases } from './constants';

export enum Key {
  PLAYLIST = 'playlist',
}

const storage = new Storage<
  Key,
  {
    [Key.PLAYLIST]: {
      userId: string;
      musicList: MusicWithSingerAliases[];
    };
  }
>('player');

export default storage;
