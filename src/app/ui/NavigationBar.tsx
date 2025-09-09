import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

const menuItems = [
  { name: "association", href: { pathname: "/" } },
  { name: "agenda", href: { pathname: "#agenda" } },
  { name: "forum", href: { pathname: "#forum" } },
  { name: "biodiversity_path", href: { pathname: "/chemin_biodiversite" } },
];

export default function NavigationBar() {
  const t = useTranslations('Menus');
  return (
    <nav aria-label="navigation" className="flex items-center justify-between p-4 lg:px-8 text-2xl font-semibold">
      <ul className="flex gap-[16px]">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href.pathname} className=' text-green-700 hover:text-green-800'>{t(item.name)}</Link>
        ))}
      </ul>
    </nav>
  );
}
