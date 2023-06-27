import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

export default function Layout() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 transition duration-500 dark:bg-neutral-900 dark:text-neutral-100">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
