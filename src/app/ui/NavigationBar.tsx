"use client";

import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import {usePathname} from 'next/navigation';
import { DropdownButton } from './DropdownButton';

const menuItems = [
  { 
    name: "association", 
    href: { pathname: "/" },
    children: [
      { name: "sharing_knowledge", href: { pathname: "/#sharing_knowledge" } },
      { name: "adhesion", href: { pathname: "/#adhesion" }  },
      { name: "contact", href: { pathname: "/#contact" }  },
      { name: "sponsors", href: { pathname: "/#sponsors" }  }
    ]
  },
  { 
    name: "agenda", href: { pathname: "/agenda/#next_conference" }, 
    children: [
      { name: "next_event", href: { pathname: "/agenda/#next_conference" } },
      { name: "this_season", href: { pathname: "/agenda/#current_season" }  },
      { name: "previous_seasons", href: { pathname: "/agenda/#previous_seasons" }  }
    ]
  },
  { name: "forum", href: { pathname: "#forum" } },
  { 
    name: "biodiversity_path", 
    href: { pathname: "/biodiversity_path/#introduction" } ,
    children: [
      { name: "introduction", href: { pathname: "/biodiversity_path/#introduction" } },
      { name: "visit", href: { pathname: "/biodiversity_path/#visit" }  },
      { name: "map", href: { pathname: "/biodiversity_path/#map" }  }
    ]
  },
];

export default function NavigationBar() {
  const t = useTranslations('Menus');
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav aria-label="navigation" className="flex flex-row items-center justify-between p-4 lg:px-8 text-2xl font-semibold">
      <ul className="flex gap-5">
        {menuItems.map((item) =>
          item.children && (
            <DropdownButton key={item.name} label={item.name} items={item.children}></DropdownButton>
          ) || (
            <li key={item.name}>
              <Link 
                key={item.name} 
                href={item.href.pathname} 
                // className='text-green-700 hover:text-green-800'
                className={`${
                  isActive(item.href.pathname) ? 'text-green-600 hover:text-green-800 underline' : 'text-green-700 hover:text-green-800'
                }`}
              >
                {t(item.name)}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
}
