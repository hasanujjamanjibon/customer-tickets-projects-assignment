import AnalyticsOverview from './components/AnalyticsOverview/AnalyticsOverview';
import DashboardSummary from './components/DashboardSummary/DashboardSummary';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className='bg-[#F5F5F5] h-fit'>
      <NavBar />
      <AnalyticsOverview />
      <DashboardSummary />
    </div>
  );
}

export default App;
