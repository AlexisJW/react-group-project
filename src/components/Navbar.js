import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      text: 'My Profile',
      link: '/profile',
    },
  ];

  return (
    <nav className="navbar">
      <ul>
        {
          links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.link}>{link.text}</NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
