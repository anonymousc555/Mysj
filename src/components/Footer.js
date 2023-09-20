function Footer() {
  const phoneNumber = "+2348160734109";
  const email = "summit@alaigboyouthforum.org";

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="footer-section">
          <h4>Support Info</h4>
      <div className="footer-content">
          <p><a href={`mailto:${email}`} onClick={handleEmailClick}>Email: {email}</a></p>
          <p><a href={`tel:${phoneNumber}`} onClick={handlePhoneClick}>Phone: {phoneNumber}</a></p>
          <p className="footer-powered">Powered By Flash Ticket Pro <br />©Trademark of Intellisense Technology LTD</p>
      </div>
    </div>
  );
}
export default Footer
