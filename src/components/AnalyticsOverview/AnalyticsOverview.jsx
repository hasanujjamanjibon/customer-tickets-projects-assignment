// import { useEffect, useState } from 'react';
import StatsCards from '../StatsCards/StatsCards';

const AnalyticsOverview = ({ inProgressData }) => {
  // const [inProgressData, setInProgressData] = useState([]);

  // useEffect(() => {
  //   const loadDatafromLocalStorage = async () => {
  //     const getInProgressData = await JSON.parse(
  //       localStorage.getItem('in-progress'),
  //     );
  //     setInProgressData(getInProgressData);
  //   };
  //   loadDatafromLocalStorage();
  // }, []);
  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 p-4 md:p-8 lg:p-16 lg:px-0'>
      <StatsCards progress='In-Progress' taskCount={inProgressData?.length} />
      <StatsCards progress='Resolved' taskCount={0} />
    </div>
  );
};

export default AnalyticsOverview;
