import { useEffect, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import TaskStatusCard from '../TaskStatusCard/TaskStatusCard';

const DashboardSummary = ({ submitOnTaskStatus, inProgressData }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const matchedTasks = tickets.filter((task) =>
    inProgressData.includes(task?.id),
  );

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
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-2  min-h-fit max-w-6xl mx-auto'>
      <aside className='lg:col-span-1 order-first lg:order-last space-y-6'>
        <div className='p-2 rounded-sm '>
          <h2 className='font-semibold text-gray-700 mb-2 text-2xl'>
            Task Status
          </h2>
          <div className='space-y-3'>
            {matchedTasks.lenth > 0 ? (
              matchedTasks?.map((task) => (
                <TaskStatusCard key={task?.id} task={task} />
              ))
            ) : (
              <p className='text-sm text-gray-500 italic'>
                Select a ticket to add to Task Status
              </p>
            )}
          </div>
        </div>

        <div className='p-2 rounded-sm '>
          <h2 className='font-semibold text-gray-700 mb-2 text-2xl'>
            Resolved Task
          </h2>
          <p className='text-base text-black p-2 shadow-sm bg-[#E0E7FF] font-medium   rounded-sm'>
            Incorrect Billing Address
          </p>
        </div>
      </aside>

      <main className='lg:col-span-3'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>
          Customer Tickets
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-screen'>
          {loading ||
            tickets?.map((ticket) => (
              <TicketCard
                key={ticket?.id}
                ticket={ticket}
                submitOnTaskStatus={submitOnTaskStatus}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardSummary;
