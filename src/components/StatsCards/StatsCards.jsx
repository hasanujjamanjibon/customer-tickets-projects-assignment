const StatsCards = ({ progress }) => {
  console.log(progress);

  return (
    <div
      className={`h-62 max-w-[750px] lg:w-[750px] mx-auto  bg-gray-600 flex justify-center items-center bg-cover bg-no-repeat bg-center ${
        progress === 'In-Progress'
          ? "bg-[url('./assets/AnalyticsOverview/inprogress-bg.png')]"
          : "bg-[url('./assets/AnalyticsOverview/resolved-bg.png')]"
      }`}
    >
      <div className='grid place-items-center text-white'>
        <span className='text-2xl'>
          {progress === 'In-Progress' ? 'In-Progress' : 'Resolved'}
        </span>
        <span className='text-6xl font-semibold'>0</span>
      </div>
    </div>
  );
};

export default StatsCards;
