import * as React from 'react';

// typescript
// 保证代码的正确性
export const MemberHeader:React.FC<{}> = ({}) => {
    return (
        <tr>
            <th>Aavtar</th>
            <th>Id</th>
            <th>Name</th>
        </tr>
    )
}