import React, { useState } from 'react';
function Example2() {
    const [age, steAge] = useState(18);
    const [sex, steSex] = useState('男');
    const [work, steWork] = useState('前端程序员');
    return (
        <div>
           <p>陈sir今年: {age}</p>
           <p>陈sir今年: {sex}</p>
           <p>陈sir今年: {work}</p>
        </div>
    )
}
 
export default Example2;


// useEffect