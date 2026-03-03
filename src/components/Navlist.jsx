const Navlist = () => {
  return (
    <div className='block lg:flex justify-around items-center gap-8 text-base'>
      <a className='hover:text-purple-700 duration-300 block' href='#'>
        Home
      </a>
      <a className='hover:text-purple-700 duration-300 block' href='#'>
        FAQ
      </a>
      <a className='hover:text-purple-700 duration-300 block' href='#'>
        Changelog
      </a>
      <a className='hover:text-purple-700 duration-300 block' href='#'>
        Blog
      </a>
      <a className='hover:text-purple-700 duration-300 block' href='#'>
        Download
      </a>
      <a className='hover:text-purple-700 duration-300 block' href='#'>
        Contact
      </a>
    </div>
  );
};

export default Navlist;
