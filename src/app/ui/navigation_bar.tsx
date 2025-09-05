import {useTranslations} from 'next-intl';

const menuItems = [
  { name: "association", href: "#home" },
  { name: "agenda", href: "#agenda" },
  { name: "forum", href: "#forum" },
  { name: "biodiversity_path", href: "#chemin_biodiversite" },
];

export default function NavigationBar() {
  const t = useTranslations('Menus');
  return (
    <nav aria-label="navigation" className="flex items-center justify-between p-6 lg:px-8 text-green-700 text-2xl font-semibold">
      <ul className="flex gap-[16px]">
        {menuItems.map((item) => (
          <li key={item.name}><a href={item.href}>{t(item.name)}</a></li>
        ))}
      </ul>
    </nav>
  );
}
