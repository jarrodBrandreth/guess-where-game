import { LanguageSwitcher } from '../LanguageSwitcher';
import ThemeSwitcher from '../ThemeSwitcher';

export default function PageOptions() {
  return (
    <div className="flex flex-col gap-6 py-6 md:flex-row md:py-0">
      <ThemeSwitcher />
      <LanguageSwitcher />
    </div>
  );
}
