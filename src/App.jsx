import { useEffect, useState } from 'react';
import AnalyticsOverview from './components/AnalyticsOverview/AnalyticsOverview';
import DashboardSummary from './components/DashboardSummary/DashboardSummary';
import NavBar from './components/Navbar/NavBar';
import Swal from 'sweetalert2';
import Footer from './components/Footer/Footer';

function App() {
  const [inProgressData, setInProgressData] = useState([]);
  const [resolved, setResolved] = useState([]);



  const submitOnTaskStatus = (CardID) => {
    const existingData = JSON.parse(localStorage.getItem('in-progress')) || [];
    const isDuplicate = existingData.find((id) => id === CardID);
    if (isDuplicate) {
      return Swal.fire({
        icon: 'error',
        title: 'Already Added!',
        showConfirmButton: false,
        timer: 1000,
      });
    }
    const updatedTask = [...existingData, CardID];
    localStorage.setItem('in-progress', JSON.stringify(updatedTask));
    setInProgressData(updatedTask);
    return Swal.fire({
      icon: 'success',
      title: 'New Tickets Added!',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const submitOnResolved = (CardID) => {
    const newResolvedTask = [CardID];
    const isExistingData = JSON.parse(localStorage.getItem('resolved'));
    if (isExistingData) {
      const newResolvedData = [...isExistingData, ...newResolvedTask];
      localStorage.setItem('resolved', JSON.stringify(newResolvedData));
      setResolved(newResolvedData);
    } else {
      localStorage.setItem('resolved', JSON.stringify(newResolvedTask));
      setResolved(newResolvedTask);
    }
  };

  useEffect(() => {
    const loadDatafromLocalStorage = async () => {
      const storedProgressData =
        (await JSON.parse(localStorage.getItem('in-progress'))) || [];
      const storedResolvedData =
        (await JSON.parse(localStorage.getItem('resolved'))) || [];

      setInProgressData(storedProgressData);
      setResolved(storedResolvedData);
    };
    loadDatafromLocalStorage();
  }, []);

  return (
    <div>
      <NavBar />
      <AnalyticsOverview inProgressData={inProgressData} resolved={resolved} />
      <DashboardSummary
        submitOnTaskStatus={submitOnTaskStatus}
        inProgressData={inProgressData}
        submitOnResolved={submitOnResolved}
        resolved={resolved}
      />
      <Footer />
    </div>
  );
}

export default App;
