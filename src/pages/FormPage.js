import { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import data1 from '../state-lgas';
// import businessInterest from '../business-interest';
import 'react-phone-input-2/lib/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function FormPage() {

  const [phoneNumber, setPhoneNumber] = useState('');

  // Function to handle changes in the phone number input
  const handlePhoneNumberChange = (e) => {
    let inputPhoneNumber = e.target.value;

  //   // Remove any non-numeric characters (except '+')
    inputPhoneNumber = inputPhoneNumber.replace(/[^0-9+]/g, '');
    setPhoneNumber(inputPhoneNumber)

  //   // Ensure that the '+' sign is at the beginning of the input
    // if (inputPhoneNumber.startsWith('+')) {
    //   setPhoneNumber(inputPhoneNumber);
    // } else {
    //   setPhoneNumber('+' + inputPhoneNumber);
    // }
  };

  const [isAYFMember, setIsAYFMember] = useState(false);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
  };

  const handle_members_id = (e) => {
    const inputValue = e.target.value;

    // Update the state with the input value
    setAYFId(inputValue);
  }

  

  const [state, setState] = useState(null);
  const [showBtn, setShowBtn] = useState(true);
  const [lga, setLga] = useState(null);
  const [show, setShow] = useState(false);
  const [showSuc, setshowSuc] = useState(false);
  const [aTag, setaTag] = useState(false)
  const [user, setUser] = useState({})
  const [aCont, setaCont] = useState("")
  const [isLoading, setisLoading] = useState(false)

  const handleClose = () => setShow(false);
  const handleCloseSuc = () => setshowSuc(false);
    
    // const [phoneNumber, setPhoneNumber] = useState("");

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
    // const [phoneNoValue, setPhoneNoValue] = useState("");
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
    // const phoneNo = useRef();
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
      // phoneNoValue.addEventListener('input', (event) => handleInput(event, setPhoneNoValue));
      firstNameValue.addEventListener('input', (event) => handleInput(event, setFirstNameValue));
      lastNameValue.addEventListener('input', (event) => handleInput(event, setLastNameValue));
      emailValue.addEventListener('input', (event) => handleInput(event, setEmailValue));
      stateOfOriginValue.addEventListener('input', (event) => handleInput(event, setStateOfOriginValue));
      lgaRefValue.addEventListener('input', (event) => handleInput(event, setLgaRefValue));
      // businessInterestRefValue.addEventListener('input', (event) => handleInput(event, setBusinessInterestRefValue));
      
      return () => {
        // phoneNoValue.removeEventListener('input', (event) => handleInput(event, setPhoneNoValue));
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
  
      if (ticketTypeValue === "Summit Attendance") {
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
      if (AYFid === "AYF-6509CEF968A3D4E35515A5D0") {
        // Check if the first 3 characters are "AYF"
        if (AYFid.slice(0, 3) !== "AYF") {
          setErrorMessage(alert("Membership ID must start with 'AYF'"));
        }
      } else {
        setErrorMessage(alert("Membership ID must start with 'AYF'"));
        return false;
      }
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
        phoneNumber.length === 0 ||
        AYFid.length === 0
      ) {
        alert("Input is invalid. Please check your input.")
        return;
      }

      let newItem = {}
      newItem =  {
      "unique_id": randomString,
      "first_name": firstNameValue,
      "last_name": lastNameValue,
      // "phone_number": phoneNoValue,
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
    setaCont(`https://payment.flashticketpro.com/initialize/${newItem.unique_id}`);

    fetch('https://payment.flashticketpro.com/add_user', {
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
      })
      .catch(error => {
        console.log(error);
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
            onChange={(phone) => setPhoneNumber(phone)}
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
            <option value="Summit Attendance">Summit admittance - N10K</option>
            <option value="VIP">VIP Ticket - N250K</option>
            <option value="AYF Member">AYF Member - N7K</option>
          </select>

          {selectedOption === "AYF Member" && (
            <input type='text' value={AYFid} placeholder='AYF Membership ID' onChange={handle_members_id} maxLength="28" required></input>
          )}

          {/* <select name="business_interest" ref={businessInterestRef}>
            <option value={null}>Business Interest</option>
            {businessInterest.map((interests) => (
              <option>{interests}</option>
            ))}
          </select> */}
              {showBtn && 
          <button type="submit">Submit</button>
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
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your Profile has been succesfully created! Kindly click the make payment button below to buy your ticket. <br /> Dear Users, please do not leave the payment page, you will be automatically redirected once your payment is completed.<br /> Please click on make payment button to proceed</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseSuc}>
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
