import Header from '../components/Header';
import { Link } from 'react-router-dom';
 import { useLocation } from 'react-router-dom';

function SuccessPage() {
	const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const id = urlParams.get('id');

  useEffect(() => {
    console.log(id);
  }, [id]);
  return (
      <>
          <Header />
      <div className='success-page'>
        <h1>You have successfully purchased your Ticket.🥳🎉</h1>
	<h1> An email will be sent you containing your Ticket details</h1>           <button><Link className='success-btn' to='/'>Dismiss</Link></button>
      </div>
    </>
  );
}
export default SuccessPage;
