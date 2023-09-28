export enum ExceptionCode {
  SUCCESS = 'success',
  SERVER_ERROR = 'server_error',
  PARAMETER_ERROR = 'parameter_error',
  CAPTCHA_ERROR = 'captcha_error',
  NOT_AUTHORIZED = 'not_authorized',
  NOT_AUTHORIZED_FOR_ADMIN = 'not_authorized_for_admin',
  USERNAME_ALREADY_REGISTERED = 'username_already_registered',
  MUSICBILL_NOT_EXISTED = 'musicbill_not_existed',
  MUSIC_NOT_EXISTED = 'music_not_existed',
  MUSIC_ALREADY_EXISTED_IN_MUSICBILL = 'music_already_existed_in_musicbill',
  MUSIC_NOT_EXISTED_IN_MUSICBILL = 'music_not_existed_in_musicbill',
  ASSET_OVERSIZE = 'asset_oversize',
  WRONG_ASSET_TYPE = 'wrong_asset_type',
  ASSET_NOT_EXISTED = 'asset_not_existed',
  SINGER_NOT_EXISTED = 'singer_not_existed',
  OVER_CREATE_MUSIC_TIMES_PER_DAY = 'over_create_music_times_per_day',
  INSTRUMENTAL_HAS_NO_LYRIC = 'instrumental_has_no_lyric',
  SINGER_ALREADY_EXISTED = 'singer_already_existed',
  NO_NEED_TO_UPDATE = 'no_need_to_update',
  ALIAS_OVER_MAX_LENGTH = 'alias_over_max_length',
  REPEATED_ALIAS = 'repeated_alias',
  NICKNAME_HAS_USED_BY_OTHERS = 'nickname_has_used_by_others',
  USER_NOT_EXISTED = 'user_not_existed',
  MUSIC_FORKED_BY_OTHER_CAN_NOT_BE_DELETED = 'music_forked_by_other_can_not_be_deleted',
  CAN_NOT_COLLECT_MUSICBILL_REPEATLY = 'can_not_collect_musicbill_repeatly',
  MUSICBILL_NOT_COLLECTED = 'musicbill_not_collected',
  OVER_USER_MUSICBILL_MAX_AMOUNT = 'over_user_musicbill_max_amount',
  CAN_NOT_DELETE_ADMIN = 'can_not_delete_admin',
  USER_IS_ADMIN_ALREADY = 'user_is_admin_already',
  MUSIC_PLAY_RECORD_NOT_EXISTED = 'music_play_record_not_existed',
  CAN_NOT_INVITE_MUSICBILL_OWNER = 'can_not_invite_musicbill_owner',
  REPEATED_SHARED_MUSICBILL_INVITATION = 'repeated_shared_musicbill_invitation',
  NO_PERMISSION_TO_DELETE_MUSICBILL_SHARED_USER = 'no_permission_to_delete_musicbill_shared_user',
  SHARED_MUSICBILL_INVITATION_NOT_EXISTED = 'shared_musicbill_invitation_not_existed',
  WRONG_USERNAME_OR_PASSWORD = 'wrong_username_or_password',
  LACK_OF_TOTP_TOKEN = 'lack_of_totp_token',
  WRONG_TOTP_TOKEN = 'wrong_totp_token',
  TOTP_ENABLED_ALREADY = 'totp_enabled_already',
}
