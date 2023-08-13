import Info from './Info';
import NavigationLink from './NavigationLink';
import HomeIcon from './icons/HomeIcon';
import PlayIcon from './icons/PlayIcon';
import BookIcon from './icons/BookIcon';

export default function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 flex w-screen items-baseline justify-evenly bg-inherit p-3 md:relative md:w-auto md:p-0">
      <NavigationLink Icon={HomeIcon} path="/" label="home" />
      <NavigationLink Icon={PlayIcon} path="game" label="game" />
      <NavigationLink Icon={BookIcon} path="countries" label="countries" />
      <Info />
    </nav>
  );
}
