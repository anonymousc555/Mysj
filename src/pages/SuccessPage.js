import React, { useState, useEffect, useRef } from "reat";
import Header from '../components/Header';
import { Link } from 'react-router-dom';
 import { useLocation } from 'react-router-dom';
//import {useState} from "react"

function SuccessPage() {
	const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('id');
const [show, setShow] = useState(false)
   const textRef = useRef()

  useEffect(() => {
let content = '';
    console.log(id);

fetch(`https://tixpro.onrender.com/get_user/${id}`)
				.then((response) => response.json())
				.then((data) => {
					const excludedFields = ['id'];

            // Loop through the data and create HTML elements for each value
            for (const key in data) {
                if (data.hasOwnProperty(key) && !excludedFields.includes(key)) {
                    const value = data[key];
          if (textRef.current) {
        
          content += `${key}: ${value}\n`;
        }
      textRef.current.textContent = content;
     setShow(true)
                }
            }

				})
.catch((error) => {
					
				// Error handling
				Alert ("dear user you have not paid please proceed to the payment page, jahkamso u can use react bootstrap to this, like a modal or so")
setShow(false)
				});
		}


, [id]);
  return (
      <>
          <Header />
      <div className='success-page'>
     <p> </p>
{show &&
	<>
        <h1>You have successfully purchased your Ticket.🥳🎉</h1>
	<h1> An email will be sent you containing your Ticket details</h1>           <button><Link className='success-btn' to='/'>Dismiss</Link></button>
	</>
}
      </div>
    </>
  );
}
export default SuccessPage;
