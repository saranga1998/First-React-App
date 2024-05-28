import React from 'react';

// export default function Greet() {
//   return (
//     <div>
//       <h1>Hello world..</h1>
//       <h1>Sajitha</h1>
//     </div>
//   );
//}

// const Greet = () =>{
//     <h1>Hi Saranga</h1>
// }
// export default Greet

const Greet = (props)=>{
    return(
        <div>
            <h1> Hello {props.name}</h1>
        </div>
    );
}

export default Greet;
//Functional Components -rfc