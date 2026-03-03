import { RiCalendarLine } from '@remixicon/react';
import { useEffect, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const DashboardSummary = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        // public folder-e tickets.json thakle eibhabe call kora jay
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
    <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 px-2 bg-gray-100 min-h-screen max-w-6xl mx-auto'>
      <aside className='lg:col-span-1 order-first lg:order-last space-y-6'>
        <div className='bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500'>
          <h2 className='font-bold text-gray-700 mb-2'>Task Status</h2>
          <p className='text-sm text-gray-500 italic'>
            Select a ticket to add to Task Status
          </p>
        </div>

        <div className='bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500'>
          <h2 className='font-bold text-gray-700 mb-2'>Resolved Task</h2>
          <p className='text-sm text-gray-500 italic'>No resolved tasks yet.</p>
        </div>
      </aside>

      <main className='lg:col-span-3'>
        <h1 className='text-2xl font-bold text-gray-800 mb-6'>
          Customer Tickets
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {/* <div className='bg-white p-5 rounded-xl shadow-md border border-gray-200'>
            <div className='flex justify-between items-start mb-3'>
              <h3 className='font-bold text-lg leading-tight'>
                Login Issues - Can't Access Account
              </h3>
              <span className='bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span> Open
              </span>
            </div>
            <p className='text-gray-600 text-sm mb-4 line-clamp-2'>
              Customer is unable to log in to their account. They've tried
              resetting their password multiple times...
            </p>
            <div className='flex justify-between items-center text-xs text-gray-400 mt-auto pt-4 border-t'>
              <span className='text-red-500 font-semibold'>
                #1001 HIGH PRIORITY
              </span>
              <div className='flex items-center gap-2'>
                <span>John Smith</span>
                <span>📅 1/15/2024</span>
              </div>
            </div>
          </div> */}

          {loading ||
            tickets?.map((ticket) => (
              <TicketCard key={ticket?.id} ticket={ticket} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default DashboardSummary;
