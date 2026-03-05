import { useEffect, useState } from 'react';
import AnalyticsOverview from './components/AnalyticsOverview/AnalyticsOverview';
import DashboardSummary from './components/DashboardSummary/DashboardSummary';
import NavBar from './components/Navbar/NavBar';
import Swal from 'sweetalert2';

function App() {
  const [inProgressData, setInProgressData] = useState([]);

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

  useEffect(() => {
    const loadDatafromLocalStorage = async () => {
      const storedData =
        (await JSON.parse(localStorage.getItem('in-progress'))) || [];

      setInProgressData(storedData);
    };
    loadDatafromLocalStorage();
  }, []);

  return (
    <div>
      <NavBar />
      <AnalyticsOverview inProgressData={inProgressData} />
      <DashboardSummary
        submitOnTaskStatus={submitOnTaskStatus}
        inProgressData={inProgressData}
      />
    </div>
  );
}

export default App;
