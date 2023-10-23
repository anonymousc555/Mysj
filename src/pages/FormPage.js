import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import data1 from '../state-lgas';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Popover from 'react-bootstrap/Popover';
// import businessInterest from '../business-interest';
import 'react-phone-input-2/lib/style.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PhoneInput from 'react-phone-input-2';

function FormPage() {
  const Span = ({ id, children, title }) => (
    <OverlayTrigger key="bottom" placement="bottom" overlay={
      <Popover id={`popover-positioned-bottom`}>
              <Popover.Header as="h3" className='header'>
                Info
              </Popover.Header>
              <Popover.Body>
               <span>Get your ID from the AYF website:  <a href='alaigboyouthforum.org'>alaigboyouthforum.org</a></span>
              </Popover.Body>
            </Popover> 
    }>
      {children}
    </OverlayTrigger> 
  );
  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle changes in the phone number input
  const handlePhoneNumberChange = (e) => {
    let inputPhoneNumber = e.target.value;

    // Remove any non-numeric characters (except '+')
    inputPhoneNumber = inputPhoneNumber.replace(/[^0-9+]/g, '');
    setPhoneNumber(inputPhoneNumber)

  //   // Ensure that the '+' sign is at the beginning of the input

    // if (inputPhoneNumber.startsWith('+')) {
    //   setPhoneNumber(inputPhoneNumber);
    // } else {
    //   setPhoneNumber('+' + inputPhoneNumber);
    // }
  };

  // const [isAYFMember, setIsAYFMember] = useState(false);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handle_members_id = (e) => {
    const inputValue = e.target.value;

    // Update the state with the input value
    setAYFId(inputValue);
  }

  // const handleSelectChange = (event) => {
  //   const selectedValue = event.target.value;
  //   if (selectedValue === "AYF Member") {
  //     setIsAYFMember(true)
  //   }
  //   else{
  //     setIsAYFMember(false)
  //   }
  // }

  

  const [state, setState] = useState(null);
  const [showBtn, setShowBtn] = useState(true);
  const [lga, setLga] = useState(null);
  const [show, setShow] = useState(false);
  const [showSuc, setshowSuc] = useState(false);
  const [aTag, setaTag] = useState(false)
  const [user, setUser] = useState({})
  const [aCont, setaCont] = useState("")
  const [isAYFMember, setIsAYFMember] = useState("")
  const [isLoading, setisLoading] = useState(false)

  const handleClose = () => setShow(false);
  const handleCloseSuc = () => setshowSuc(false);
    

    function generateRandomString(length) {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let randomString = '';
      
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomString += characters.charAt(randomIndex);
      }
      
      return randomString;
      }

      const randomString = generateRandomString(8);

    // const [phoneError, setPhoneError] = useState(false)
  
  const style = {
    background: 'none',
    width: '100%',
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgba(237, 234, 234, 0.9)'
  };

  const dropDown = {
    border: 'none',
    backgroundColor: 'rgba(237, 234, 234, 0.9)',
    fontSize: '14px',
  };

  const dropDownButton = {
    border: 'none',
    outline: 'none',
    background: 'none'
  }

  const lgas = state
    ? data1.find((s) => s.state.name === state).state.lgas
        : [];

  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //     event.preventDefault();
      
  //     if (!/^\d+$/.test(phoneNumber)) {
  //         setPhoneError(true)
  //     } else {
  //         // 👇️ redirect to /contacts
  //         navigate('/success');
  //     }

  //   };

    // input states
    const [ticketTypeValue, setTicketTypeValue] = useState(""); 
    const [firstNameValue, setFirstNameValue] = useState(""); 
    const [lastNameValue, setLastNameValue] = useState(""); 
    const [emailValue, setEmailValue] = useState(""); 
    const [phoneNoValue, setPhoneNoValue] = useState("");
    const [stateOfOriginValue, setStateOfOriginValue] = useState(""); 
    const [lgaRefValue, setLgaRefValue] = useState("");
    const [AYFid, setAYFId] = useState("")
    const [selectedOption, setSelectedOption] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    // const [businessInterestRefValue, setBusinessInterestRefValue] = useState(""); 

    // input refs

    const ticketType = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const email = useRef();
    const phoneNo = useRef();
    const stateOfOrigin = useRef();
    const lgaRef = useRef();
    // const businessInterestRef = useRef();

    // useEffect(() => {
    //   const stateOfOriginValue = stateOfOrigin.current;
    //   const lgaRefValue = lgaRef.current;

    //   stateOfOriginValue.addEventListener("input", () => {
    //     console.log(stateOfOriginValue.value)
    //   })
    //   lgaRefValue.addEventListener("input", () => {
    //     console.log(lgaRefValue.value)
    //   })
    // }, [])
  
    useEffect(() => {
      const ticketValue = ticketType.current;
      // const phoneNoValue = phoneNo.current;
      const firstNameValue = firstName.current;
      const lastNameValue = lastName.current;
      const emailValue = email.current;
      const stateOfOriginValue = stateOfOrigin.current;
      const lgaRefValue = lgaRef.current;
      // const businessInterestRefValue = businessInterestRef.current;
  
      const handleInput = (event, setValue) => {
        setValue(event.target.value);
      };
  
      ticketValue.addEventListener('input', (event) => handleInput(event, setTicketTypeValue));
      firstNameValue.addEventListener('input', (event) => handleInput(event, setFirstNameValue));
      lastNameValue.addEventListener('input', (event) => handleInput(event, setLastNameValue));
      emailValue.addEventListener('input', (event) => handleInput(event, setEmailValue));
      stateOfOriginValue.addEventListener('input', (event) => handleInput(event, setStateOfOriginValue));
      lgaRefValue.addEventListener('input', (event) => handleInput(event, setLgaRefValue));
      // businessInterestRefValue.addEventListener('input', (event) => handleInput(event, setBusinessInterestRefValue));
      
      return () => {
        ticketValue.removeEventListener('input', (event) => handleInput(event, setTicketTypeValue));
        firstNameValue.removeEventListener('input', (event) => handleInput(event, setFirstNameValue));
        lastNameValue.removeEventListener('input', (event) => handleInput(event, setLastNameValue));
        emailValue.removeEventListener('input', (event) => handleInput(event, setEmailValue));
        stateOfOriginValue.removeEventListener('input', (event) => handleInput(event, setStateOfOriginValue));
        lgaRefValue.removeEventListener('input', (event) => handleInput(event, setLgaRefValue));
        // businessInterestRefValue.removeEventListener('input', (event) => handleInput(event, setBusinessInterestRefValue));
      };
    }, []);
  
    const handleSubmit = (event) => {
      event.preventDefault()
      let fee = null;
  
      if (ticketTypeValue === "Summit Admittance") {
        fee = 10000;
      } else if (ticketTypeValue === "VIP") {
        fee = 250000;
      } else if (ticketTypeValue === "AYF Member") {
        fee = 7000;
      } else {
        alert("pls select a type")
        return false;
      }

      if (errorMessage) {
        // Submit the form or perform other actions
        alert("Form submission failed due to errors.");
      }

      // Check if the selected option is "AYF Member"
    if (selectedOption === "AYF Member") {
      // Check if the input value is equal to the expected value
      // if (AYFid === "AYF/AN/7877356284KG") {
        // Check if the first 3 characters are "AYF"
        if (AYFid.slice(0, 3) !== "AYF" && AYFid.length !==19) {
          setErrorMessage(alert("Invalid ID"));
          return false
        }
      //   else {
      //   // setErrorMessage(alert("Invalid ID"));
      //   // return true;
      // }
    }

      // if (selectedOption === "AYF Member") {
      //   // Check if the input value is equal to the expected value
      //   if (inputValue === "AYF-6509CEF968A3D4E35515A5D0") {
      //     // Check if the first 3 characters are "AYF"
      //     if (inputValue.slice(0, 3) !== "AYF") {
      //       setErrorMessage(alert("Membership ID must start with 'AYF'"));
      //     }
      //   } else {
      //     setErrorMessage(alert("Invalid AYF Membership ID"));
      //   }
      // } else {
      //   setErrorMessage("");
      // }

      if (
        firstNameValue.length === 0 ||
        lastNameValue.length === 0 ||
        emailValue.length === 0 ||
        !emailValue.includes("@") ||
        stateOfOriginValue.length === 0 ||
        // businessInterestRefValue.length === 0 ||
        lgaRefValue.length === 0 ||
        phoneNumber.length === 0
      ) {
        alert("Input is invalid. Please check your input.")
        return;
      }

      let newItem = {}
      newItem =  {
      "unique_id": randomString,
      "first_name": firstNameValue,
      "last_name": lastNameValue,
      "phone_number": phoneNumber,
      "email": emailValue,
      "state_of_origin": stateOfOriginValue,
      "lga": lgaRefValue,
      "ticket_types": ticketTypeValue,
      // "business_interest": businessInterestRefValue,
      "fee": fee,
      "number": 1
    }

    setUser(user => ({
      ...user,
      ...newItem
    }));

    setisLoading(true);
    setaCont(`https://paymentflashticketpro.pythonanywhere.com/initialize/${user.unique_id}`);

    fetch('https://paymentflashticketpro.pythonanywhere.com/add_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })
      .then(response => response.json())
      .then(data => {
        setshowSuc(true);
        setShowBtn(false)
        setaTag(true);

        const redirectUrl = `https://paymentflashticketpro.pythonanywhere.com/initialize/${newItem.unique_id}`;
        window.location.href = redirectUrl;
      })
      .catch(error => {
        setShow(true);
      })
      .finally(() => {
        setisLoading(false);
      });

  };

  return (
    <>
      <Header />
      <div className="form-section">
      {/* <img src='ds.jpg' className='formImg'/> */}
        <h1>Grab Your Ticket</h1>
        <img src='/summit-form-img.jpg' alt='summit form image' className='form-header-img' />
        <form onSubmit={handleSubmit}>
          <input type="text" id="firstName" placeholder="First name" required name="first_name" ref={firstName}/>
          <input type="text" id="lastName" placeholder="Last name" required name="last_name" ref={lastName}/>
          <input
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="+1234567890" // You can set a placeholder with a sample country code
        maxLength={15}
        name="phone_number"
        required
        // ref={phoneNo}
      />

          {/* <PhoneInput
            specialLabel=''
            buttonStyle={dropDownButton}
            dropdownStyle={dropDown}
            inputStyle={style}
            country={'ng'}
            value={phoneNumber}
            onChange={e=> setPhoneNumber(e.target.value)}
          /> */}
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            required
            name="email"
            ref={email}
           />

          <select ref={stateOfOrigin} name="state_of_origin" onChange={(e) => setState(e.target.value)}>
            <option
              value="State of origin"
              style={{ display: state !== null && 'none' }}
            >
              State of origin
            </option>
            {data1.map((state) => (
              <option value={state.state.name}>{state.state.name}</option>
            ))}
          </select>
          <select ref={lgaRef} name="lga" onChange={(e) => setLga(e.target.value)}>
            <option value={null}>LGA</option>
            {lgas.map((lga) => (
              <option value={lga}>{lga}</option>
            ))}
          </select>

          <select id="ticketType" name="ticket_types" required ref={ticketType} onChange={handleSelectChange}>
            <option value={null}>Ticket Type</option>
            <option value="Summit Admittance">Summit Admittance - N10K</option>
            <option value="VIP">VIP Ticket - N250K</option>
           // <option value="AYF Member">AYF Member - N7K</option>
          </select>

          {selectedOption === "AYF Member" && (
            <div class="input-group mb-3">
            <span class="input-group-text" >
              <Span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
              </Span>
</span>
            <div class="form-floating">
            <input type='text' value={AYFid} placeholder='AYF Membership ID' onChange={handle_members_id} maxLength="19" required></input>
            </div>
          </div>
          )}

          {/* <select name="business_interest" ref={businessInterestRef}>
            <option value={null}>Business Interest</option>
            {businessInterest.map((interests) => (
              <option>{interests}</option>
            ))}
          </select> */}
              {showBtn && 
          <button type="submit">Pay</button>
              }
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error!</Modal.Title>
        </Modal.Header>
        <Modal.Body>We encountered an error while sending your input. If issue persists, please contact <a href="mailto:flashticketpro@gmail.com">flashticketpro@gmail.com</a></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
          <Modal show={showSuc} onHide={handleCloseSuc}>
        <Modal.Header closeButton>
          <Modal.Title>Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>Dear User please do not leave the payment page until your payment has been completed.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='btnSuc' onClick={handleCloseSuc}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </form>
        <div>
        {/* Your component content */}
        {isLoading && 
        <div className="loading">
            <div className="sk-chase">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
    </div>
        </div>
        }
      </div>
        {aTag && 
        <button className='makePay'> 
          <a href={aCont}>Make Payment</a>
          </button>}
      </div>
      <Footer />
    </>
  );
}
export default FormPage;
