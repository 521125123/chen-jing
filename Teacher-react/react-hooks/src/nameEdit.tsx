import * as React from 'react';

interface Props {
    userName: string;
    // e: React.ChangeEvent<HTMLInputElement>(事件类型)
    // onChange: (e) => void;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;// 帮助提示
}
// 什么时候要写ts 什么时候容易出问题?  加上类型约束
// ts代码  @types/react
// 有需要去ts 约束他的类型  props
// FC function component
// const NameEditComponent = (prop:Props)
export const NameEditComponent: React.FC<Props> = (props) => (
    <>
      <label>Update name:</label>
      <input value={props.userName} onChange={props.onChange}/>
    </>
  )