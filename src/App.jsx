import { useEffect, useState } from 'react';
import AnalyticsOverview from './components/AnalyticsOverview/AnalyticsOverview';
import DashboardSummary from './components/DashboardSummary/DashboardSummary';
import NavBar from './components/Navbar/NavBar';
import Swal from 'sweetalert2';
import Footer from './components/Footer/Footer';

function App() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inProgressData, setInProgressData] = useState([]);
  const [resolved, setResolved] = useState([]);

  const existingData = tickets.filter((task) => !resolved.includes(task?.id));
  const resolvedData = tickets.filter((task) => resolved.includes(task?.id));
  console.log(resolvedData);

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
      setResolved(newResolvedData);
      localStorage.setItem('resolved', JSON.stringify(newResolvedData));
      const newProgressData = inProgressData.filter((task) => task !== CardID);
      localStorage.setItem('in-progress', JSON.stringify(newProgressData));
      setInProgressData(newProgressData);
      return Swal.fire({
        icon: 'success',
        title: 'Resolved Successfully Complete!',
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      localStorage.setItem('resolved', JSON.stringify(newResolvedTask));
      setResolved(newResolvedTask);
      const newProgressData = inProgressData.filter((task) => task !== CardID);
      localStorage.setItem('in-progress', JSON.stringify(newProgressData));
      setInProgressData(newProgressData);
      return Swal.fire({
        icon: 'success',
        title: 'Resolved Successfully Complete!',
        showConfirmButton: false,
        timer: 1000,
      });
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
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const response = await fetch('/tickets-data.json');
        const data = await response.json();
        setTickets(data);
      } catch (error) {
        console.error('Data fetch korte somossa hoyeche:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTickets();
  }, []);

  return (
    <div>
      <NavBar />
      <AnalyticsOverview inProgressData={inProgressData} resolved={resolved} />
      <DashboardSummary
        submitOnTaskStatus={submitOnTaskStatus}
        inProgressData={inProgressData}
        submitOnResolved={submitOnResolved}
        resolvedData={resolvedData}
        tickets={existingData}
        loading={loading}
      />
      <Footer />
    </div>
  );
}

export default App;
