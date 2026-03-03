import StatsCards from '../StatsCards/StatsCards';

const AnalyticsOverview = () => {
  return (
    <div className='max-w-6xl mx-auto space-y-10 lg:space-y-0 lg:flex justify-between lg:gap-14 px-4 py-6 md:py-14 lg:py-20 '>
      <StatsCards progress='In-Progress' />
      <StatsCards progress='Resolved' />
    </div>
  );
};

export default AnalyticsOverview;
