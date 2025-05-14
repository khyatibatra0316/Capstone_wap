import { useNavigate } from 'react-router-dom';
import './Home.css';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Home() {
  const navigate = useNavigate();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const alreadyFilled = localStorage.getItem(`formSubmitted_${currentUser.uid}`);
        if (alreadyFilled === 'true') {
          setHasSubmitted(true);
        }
      } else {
        navigate('/'); // redirect to login if not signed in
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // mark as submitted in localStorage
    if (user) {
      localStorage.setItem(`formSubmitted_${user.uid}`, 'true');
    }

    navigate('/main');
  };

  if (hasSubmitted) {
    return <h2 style={{ textAlign: 'center', marginTop: '100px' }}>✅ You have already submitted this form.</h2>;
  }

  return (
    <div className="home-container">
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          {/* your same questions here */}
          <h4>1. What is your name?</h4>
          <input type="text" placeholder="Name" required />

          {/* ... keep the rest same ... */}

          <div style={{ marginTop: '30px', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <button>Start Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
