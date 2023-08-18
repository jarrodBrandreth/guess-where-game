import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <main className="pb-16">
        <Outlet />
      </main>
    </>
  );
}
