import { code } from './code';

const MsgFlags = new Map([
  [code.SUCCESS, 'ok'],
  [code.ERROR, 'fail'],
  [code.INVALID_PARAMS, '请求参数错误'],
]);

export const getMsg = (_code: number): string => {
  return MsgFlags.get(_code) || MsgFlags.get(code.ERROR);
};
