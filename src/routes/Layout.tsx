import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="px-4 pb-16">
        <Outlet />
      </main>
    </div>
  );
}
