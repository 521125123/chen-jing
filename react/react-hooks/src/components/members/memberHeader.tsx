// members 页面的相关组件都放置在members 文件夹 方便管理
import * as React from 'react';
export const MemberHeader: React.FC<{}> = () =>{
    return (
        <tr>
          <th>Avator</th>
          <th>name</th>
          <th>id</th>  
        </tr>
    )
}