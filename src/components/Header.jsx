import {Link} from 'react-router-dom'
const Header = () => (
  <header className='bg-[#040200] text-[#D8D7D7] p-4 flex justify-between items-center'>
    <div className='flex items-center'>
      <img
        src='/images/Logo.png'
        alt='Logo'
        className='h-20 transform scale-125 object-contain pl-8'
      />
    </div>
    <nav>
      <ul className='flex space-x-8 text-3xl font-teko pr-8'>
        <li>
          <Link
            to='/'
            className='hover:underline'
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/Login'
            className='hover:underline'
          >
            Account
          </Link>
        </li>
        <li>
          <Link
            to='/Shop'
            className='hover:underline'
          >
            Shop
          </Link>
        </li>
        <li>
          <Link
            to='/Cart'
            className='hover:underline'
          >
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header