// @flow

export type Action = {| type: string; payload: Object |};

export type User = {|
  userName: string,
  email: string,
  location: string,
  university: string,
  degree: string
  |};
