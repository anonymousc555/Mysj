import React, { useState, useEffect, useRef } from "react";
import Header from '../components/Header';
import { Link } from 'react-router-dom';
 import { useLocation } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Modal from 'react-bootstrap/Modal';
 import Button from 'react-bootstrap/Button';

function SuccessPage() {
	const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('id');

const [show, setShow] = useState(true)
const [error, setError] = useState(true)
const handleClose = () => setError(false);


   const textRef = useRef()
   useEffect(() => {
    console.log("ds",textRef.current)
   })

  useEffect(() => {
let content = '';
    console.log(id);

fetch(`https://payment.flashticketpro.com/get_user/${id}`)
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
        setShow(false)
				});
		}


, [id]);
  return (
      <>
          <Header />
{show &&
<>
          <p ref={textRef}>tgfd </p>
      <div className='success-page'>
        <h1>You have successfully purchased your Ticket.🥳🎉</h1>
	<h1> An email will be sent to you containing your Ticket details</h1>    
    <Link className='success-btn' to='/'>Dismiss</Link>
      </div>
</>
}

{ error && 
<>
<div className="error-page">
  <h1>Dear User you have not paid for this ticket please proceed to the buy your ticket page to get yourself a ticket or contact <a href="mailto:flashticketpro@gmail.com">flashticketpro@gmail.com</a></h1>
<Link className='success-btn' to='/form'>Proceed to Payment Page</Link>
</div>
</>
}
{/* <Modal show={error} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We encountered an error while sending your input. If issue persists, please contact <a href="mailto:flashticketpro@gmail.com">flashticketpro@gmail.com</a></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
export default SuccessPage;
