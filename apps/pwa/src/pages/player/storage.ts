import Storage from '@/utils/storage';
import { MusicWithSingerAliases } from './constants';

export enum Key {
  PLAYLIST = 'playlist',
}

const storage = new Storage<
  Key,
  {
    [Key.PLAYLIST]: MusicWithSingerAliases[];
  }
>('player');

export default storage;
