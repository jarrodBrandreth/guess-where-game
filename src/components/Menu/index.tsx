import { useState } from 'react';
import MenuToggle from './MenuToggle';
import Nav from './Nav';
import PageOptions from './PageOptions';

export function Menu() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <MenuToggle open={openMenu} onClick={() => setOpenMenu((prev) => !prev)} />
      <div
        className={`transition ${
          openMenu ? 'translate-x-0' : 'translate-x-[-1000px] md:translate-x-0'
        } absolute left-0 top-full flex w-full flex-grow flex-col items-start bg-neutral-50 px-6 dark:bg-neutral-900 md:relative md:w-auto md:flex-row md:items-center md:pr-0`}
      >
        <Nav />
        <PageOptions />
      </div>
    </>
  );
}
