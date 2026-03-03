import { RiAddLine } from '@remixicon/react';

const CTAButton = () => {
  console.log('CTAButton');

  return (
    <button class='ml-8 text-sm cursor-pointer relative px-4 py-2 font-semibold text-white bg-linear-to-br from-violet-600 via-purple-600 to-fuchsia-600 rounded-sm overflow-hidden group min-w-max'>
      <span class='absolute w-0 h-0 rounded-sm bg-white/20 group-hover:w-56 group-hover:h-56 transition-all duration-700 ease-out left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'></span>
      <div class='relative z-10 capitalize flex justify-center items-center gap-1'>
        <RiAddLine size={18} className='inline-block' />
        <span>New Ticket</span>
      </div>
    </button>
  );
};

export default CTAButton;
