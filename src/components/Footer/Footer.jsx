import {
  RiFacebookFill,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterXLine,
} from '@remixicon/react';

const Footer = () => {
  return (
    <footer className='bg-gray-950 text-gray-400 py-12 px-6 md:px-12 lg:px-24 font-sans'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12  border-blue-400/30'>
        <div className='lg:col-span-1'>
          <h2 className='text-white text-xl font-bold mb-4'>
            CS — Ticket System
          </h2>
          <p className='text-sm leading-relaxed text-gray-500 text-justify'>
            "CS — Ticket System provides a seamless platform to manage customer
            inquiries and resolve issues faster. We empower support teams with
            intuitive tools to streamline workflows and deliver exceptional
            service experiences
          </p>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4 text-lg'>Company</h3>
          <ul className='space-y-3 text-sm'>
            <li>
              <a href='#' className='hover:text-white transition'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Our Mission
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Contact Sales
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4 text-lg'>Services</h3>
          <ul className='space-y-3 text-sm'>
            <li>
              <a href='#' className='hover:text-white transition'>
                Products & Services
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Customer Stories
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Download Apps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4 text-lg'>Information</h3>
          <ul className='space-y-3 text-sm'>
            <li>
              <a href='#' className='hover:text-white transition'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-white transition'>
                Join Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-white font-semibold mb-4 text-lg'>
            Social Links
          </h3>
          <ul className='space-y-3 text-sm'>
            <li className='flex items-center gap-3'>
              <a href='#' className='hover:text-white transition'>
                <RiTwitterXLine className='w-6 h-6 p-1 bg-white inline-block  text-black rounded-full text-[10px] font-bold mr-1.5' />
                CS — Ticket System
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <a href='#' className='hover:text-white transition'>
                <RiLinkedinFill className='w-6 h-6 p-1 bg-white inline-block  text-black rounded-full text-[10px] font-bold mr-1.5' />
                @CS — Ticket System
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <a href='#' className='hover:text-white transition'>
                <RiFacebookFill className='w-6 h-6 p-1 bg-white inline-block  text-black rounded-full text-[10px] font-bold mr-1.5' />
                @CS — Ticket System
              </a>
            </li>
            <li className='flex items-center gap-3'>
              <a
                href='mailto:support@cst.com'
                className='hover:text-white transition'
              >
                <RiMailFill className='w-6 h-6 p-1 bg-white inline-block  text-black rounded-full text-[10px] font-bold mr-1.5' />
                support@cst.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='max-w-7xl mx-auto pt-8 border-t  border-blue-400/30 mt-8 text-center'>
        <p className='text-sm text-white'>
          &copy; 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
