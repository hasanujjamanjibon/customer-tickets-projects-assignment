import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'remixicon/fonts/remixicon.css';
createRoot(document.getElementById('root')).render(
  <div className='bg-[#F5F5F5] h-fit'>
    <App />
  </div>,
);
