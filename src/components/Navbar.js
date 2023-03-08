import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { text: 'Rockets', link: '/' },
    { text: 'My Profile', link: '/profile' },
  ];

  return (
    <nav className="navbar">
      <ul>
        {
          links.map((link) => (
            <li key={link.text}>
              <NavLink
                to={link.link}
                style={({ isActive }) => ({
                  color: isActive ? 'red' : undefined,
                })}
              >
                {' '}
                {link.text}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
  );
};

export default Navbar;
