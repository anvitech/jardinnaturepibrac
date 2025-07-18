
const menuItems = [
  { name: "Association", href: "#home" },
  { name: "Agenda", href: "#agenda" },
  { name: "Forum", href: "#forum" },
  { name: "Chemin de la biodiversité", href: "#chemin_biodiversite" },
];

export default function NavigationBar() {
  return (
    <nav aria-label="navigation" className="flex items-center justify-between p-6 lg:px-8 text-green-700 text-2xl font-semibold">
      <ul className="flex gap-[16px]">
        {menuItems.map((item) => (
          <li key={item.name}><a href={item.href}>{item.name}</a></li>
        ))}
      </ul>
    </nav>
  );
}
