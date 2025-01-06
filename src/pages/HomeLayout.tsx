import { Header, Loading } from '@/components';
import Navbar from '@/components/navbar/Navbar';
import { Outlet } from 'react-router';
import { useNavigation } from 'react-router';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation?.state === 'loading';

  return (
    <>
      <Header />
      <Navbar />
      <main className="align-element py-20">
        {isLoading ? <Loading /> : <Outlet />}
      </main>
    </>
  );
};

export default HomeLayout;
