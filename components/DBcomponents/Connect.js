
// import axios from 'axios';

// import React, { useState, useEffect, useRef } from 'react';
// import Button from '@components/pomodomo/Button';
// import DragElement from '@components/bio/DragElement';


// export default function Connect({}) {

//     const [single, setSingle] = useState(0)

//     const insertData = (table, activity, date) => {
//       console.log("INSERT DATA FX IS LIVE")

//         return (dispatch) => {
//           dispatch({ type: INSERT_DATA_REQUEST });
//           axios.post('/api/insert', {table, activity, date})
//             .then((response) => {
//               // dispatch({ type: INSERT_DATA_SUCCESS, payload: response.data })
//               console.log("this is the response data "+ response.data)
//             })
//             .catch((error) => {
//               // dispatch({ type: INSERT_DATA_ERROR, error });
//               console.log("this is the error:  "+ error)

//             });
//         };
//       };

//     if(single <= 3) {
//       insertData("user_activity","loaded thing", Date())
//       console.log("this is the date: "+ Date())
//       setSingle(single+1)
//       console.log("insertData was invoked")
//     }


//     return (
//         <>
//             <div>The connect component has been mounted</div>
//         </>
//     )
// }
