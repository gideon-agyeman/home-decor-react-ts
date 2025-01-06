import { useAppSelector } from '@/hooks';
import { links } from '@/utils';
import { NavLink } from 'react-router';

const NavLinks = () => {
  const { user } = useAppSelector((store) => store.user);
  return (
    <div className="hidden lg:flex justify-center items-center gap-x-4">
      {links.map(({ href, label }) => {
        const restrictedRoutes = href === 'checkout' || href === 'orders';
        if (restrictedRoutes && !user) return null;
        return (
          <NavLink
            key={label}
            to={href}
            className={({ isActive }) =>
              `capitalize font-semibold tracking-wide ${
                isActive ? 'text-primary' : ''
              }`
            }
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
