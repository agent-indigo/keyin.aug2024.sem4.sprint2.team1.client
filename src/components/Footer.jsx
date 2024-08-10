import {Link} from 'react-router-dom'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok
} from 'react-icons/fa'
const Footer = () => (
  <footer className='bg-[#040200] text-[#D8D7D7] p-4'>
    <div className='flex justify-between items-center'>
      <div className='flex flex-col space-y-2 text-md'>
        <div className='flex space-x-12 pl-8'>
          <ul className='list-none space-y-1'>
            <li>
              <Link
                href={'#'}
                className='hover:underline'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='hover:underline'
              >
                Partnerships
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='hover:underline'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className='list-none space-y-1'>
            <li>
              <Link
                href={'#'}
                className='hover:underline'
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='hover:underline'
              >
                Policy
              </Link>
            </li>
            <li>
              <Link
                href={'#'}
                className='hover:underline'
              >
                Jobs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='flex space-x-4 pr-8'>
        <a
          href='https://www.facebook.com'
          className='hover:no-underline text-[#D8D7D7]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook className='h-6 w-6'/>
        </a>
        <a
          href='https://www.instagram.com'
          className='hover:no-underline text-[#D8D7D7]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagram className='h-6 w-6'/>
        </a>
        <a
          href='https://www.youtube.com'
          className='hover:no-underline text-[#D8D7D7]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaYoutube className='h-6 w-6'/>
        </a>
        <a
          href='https://www.tiktok.com'
          className='hover:no-underline text-[#D8D7D7]'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTiktok className='h-6 w-6'/>
        </a>
      </div>
    </div>
  </footer>
)
export default Footer