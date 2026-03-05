const StatsCards = ({ progress, taskCount }) => {
  return (
    <div
      className={`relative rounded-sm  p-8 text-white overflow-hidden bg-cover bg-no-repeat bg-center    ${
        progress === 'In-Progress'
          ? "bg-[url('./assets/AnalyticsOverview/inprogress-bg.png')]"
          : "bg-[url('./assets/AnalyticsOverview/resolved-bg.png')]"
      }`}
    >
      <div className='grid place-items-center text-white'>
        <span className='text-2xl'>
          {progress === 'In-Progress' ? 'In-Progress' : 'Resolved'}
        </span>
        <span className='text-6xl font-semibold'>{taskCount || 0}</span>
      </div>
    </div>
  );
};

export default StatsCards;
