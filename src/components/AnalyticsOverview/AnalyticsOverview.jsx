import StatsCards from '../StatsCards/StatsCards';

const AnalyticsOverview = () => {
  return (
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 p-4 md:p-8 lg:p-16 lg:px-0'>
      <StatsCards progress='In-Progress' />
      <StatsCards progress='Resolved' />
    </div>
  );
};

export default AnalyticsOverview;
