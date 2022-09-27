export enum NoticeType {
  INFO,
  SUCCESS,
  ERROR,
}

export interface Notice {
  id: string;
  type: NoticeType;
  duration: number;
  visible: boolean;
  content: string;

  height: number;
  top: number;
}

export const BASE_TOP = 20;
export const NOTICE_ITEM_SPACE = 15;
export const TRANSITION_DURATION = 500;
