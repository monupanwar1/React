import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <nav className='flex gap-10 text-black font-semibold text-1xl'>
        <NavLink to="/">
          {(e) => (
            <span className={e.isActive ? 'text-red-500' : ''}>Home</span>
          )}
        </NavLink>
        <NavLink 
          style={(e) => ({
            color: e.isActive ? 'tomato' : 'black'
          })}
          to='/about'
        >
          About
        </NavLink>
        <NavLink 
          className={(e) => [
            e.isActive ? 'text-red-500' : 'tomato'
          ].join(' ')}
          to='/Contact'
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default Nav;
