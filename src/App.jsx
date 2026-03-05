import { useEffect, useState } from 'react';
import AnalyticsOverview from './components/AnalyticsOverview/AnalyticsOverview';
import DashboardSummary from './components/DashboardSummary/DashboardSummary';
import NavBar from './components/Navbar/NavBar';

function App() {
  const [inProgressData, setInProgressData] = useState([]);

  const submitOnTaskStatus = (CardID) => {
    const existingData = JSON.parse(localStorage.getItem('in-progress')) || [];
    const isDuplicate = existingData.find((id) => id === CardID);
    if (isDuplicate) {
      alert('Already Added');
      return;
    }
    const updatedTask = [...existingData, CardID];
    localStorage.setItem('in-progress', JSON.stringify(updatedTask));
    setInProgressData(updatedTask);
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
      <DashboardSummary submitOnTaskStatus={submitOnTaskStatus} inProgressData={inProgressData} />
    </div>
  );
}

export default App;
