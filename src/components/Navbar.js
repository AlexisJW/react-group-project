import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Rockets' },
  { path: 'missions', text: 'Missions' },
  { path: 'profile', text: 'My Profile' },
];

const Navbar = () => (
  <nav className="navbar">
    <ul>
      {<li>
          <NavLink
          >
          </NavLink>
        </li>
      }
    </ul>
  </nav>
);
export default Navbar;