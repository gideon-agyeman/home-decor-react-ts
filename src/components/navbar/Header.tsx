import { Link, useNavigate } from 'react-router';
import { Button } from '../ui/button';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { logout } from '@/features/user/userSlice';
import { clearCart } from '@/features/cart/cartSlice';
import { toast } from 'react-toastify';

const Header = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    toast.success('Logout successful!');
    navigate('/');
  };

  return (
    <header>
      <div className="align-element flex justify-center sm:justify-end py-2 ">
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items-center">
            <p className="text-xs sm:text-sm">Hello, {user.username}</p>
            <Button variant="link" size="sm" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        ) : (
          <div className="flex gap-x-4 justify-center items-center mr-4">
            <Button asChild variant="link" size="sm">
              <Link to="/login">Sign in / Guest</Link>
            </Button>
            <Button asChild variant="link" size="sm">
              <Link to="/register">Register</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
