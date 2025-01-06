import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { AlignLeft } from 'lucide-react';
import { Button } from '../ui/button';
import { links } from '@/utils';
import { NavLink } from 'react-router';
import { useAppSelector } from '@/hooks';

const LinksDropdown = () => {
  const { user } = useAppSelector((store) => store.user);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only"> Toggle Links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52 lg:hidden"
        align="start"
        sideOffset={25}
      >
        {links.map(({ href, label }) => {
          const restrictedRoutes = href === 'checkout' || href === 'orders';
          if (restrictedRoutes && !user) return null;
          return (
            <DropdownMenuItem key={label}>
              <NavLink
                to={href}
                className={({ isActive }) =>
                  `capitalize w-full ${isActive ? 'text-primary' : ''}`
                }
              >
                {label}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
