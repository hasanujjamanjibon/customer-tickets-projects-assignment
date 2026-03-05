import { RiCalendarLine } from '@remixicon/react';

const TicketCard = ({ ticket, submitOnTaskStatus }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket || {};

  return (
    <div
      onClick={() => submitOnTaskStatus(id)}
      className='bg-white p-5 rounded-xl shadow-md border border-gray-200 cursor-pointer'
    >
      <div className='flex justify-between items-start mb-3'>
        <h3 className='font-bold text-lg leading-tight'>{title}</h3>
        <div
          className={`text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1 ${status === 'Open' ? 'bg-green-200 text-green-700' : 'bg-yellow-200 text-yellow-700'}`}
        >
          <span
            className={`w-2 h-2  rounded-full ${status === 'Open' ? 'bg-green-500 text-green-700' : 'bg-yellow-500 text-yellow-700'}`}
          ></span>
          <span className='font-medium'>{status}</span>
        </div>
      </div>
      <p className='text-gray-600 text-sm mb-4 line-clamp-2'>{description}</p>
      <div className='flex justify-between items-center text-xs text-gray-400 mt-auto pt-4 border-t'>
        <span className=' font-medium'>
          #{id}{' '}
          <span
            className={` ${
              priority === 'LOW PRIORITY'
                ? 'text-green-500'
                : priority === 'MEDIUM PRIORITY'
                  ? 'text-yellow-500'
                  : 'text-red-500'
            }`}
          >
            {' '}
            {priority}
          </span>
        </span>
        <div className='flex items-center gap-2'>
          <span>{customer}</span>
          <span>
            <RiCalendarLine size={16} className='inline-block' />{' '}
            {new Date(createdAt).toLocaleDateString('en-US')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
