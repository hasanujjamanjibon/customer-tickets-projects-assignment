const TaskStatusCard = ({ task }) => {
  const { id, title } = task || {};

  const onComplete = () => {
    console.log(id);
  };
  return (
    <div className='max-w-md w-full bg-white rounded-sm shadow-sm p-3 space-y-4  transition duration-300'>
      <h3 className='text-base font-semibold text-gray-800 truncate'>
        {title}
      </h3>

      <button className='relative w-full bg-green-600 cursor-pointer overflow-hidden rounded-lg border border-green-600 group'>
        <span className='absolute inset-0 bg-green-700 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out'></span>
        <span
          onClick={() => onComplete()}
          className='relative z-10 block py-1.5 text-center font-semibold text-white group-hover:text-white transition duration-300'
        >
          Complete
        </span>
      </button>
    </div>
  );
};

export default TaskStatusCard;
