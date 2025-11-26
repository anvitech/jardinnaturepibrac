"use client";

import {useState} from 'react';
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
  { name: "forum", href: { pathname: "http://forum.jardinnaturepibrac.org/phpBB3/" } },
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
  const [show_menu, setShow_menu] = useState(false);

  const t = useTranslations('Menus');
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav aria-label="navigation" className="flex flex-row items-center justify-between p-4 lg:px-8 text-2xl font-semibold">
      <ul className="hidden md:flex md:flex-nowrap md:gap-5">
        {menuItems.map((item) =>
          item.children && (
            <DropdownButton key={item.name} label={item.name} href={item.href.pathname} items={item.children}></DropdownButton>
          ) || (
            <li key={item.name} className="inline-block">
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

      <ul className="flex flex-col gap-5 md:hidden justify-center">
        <button
          type="button"
          className="text-green-700 hover:text-green-800 cursor-pointer"
          onClick={() => setShow_menu((prev) => !prev)}
        >
          {!show_menu && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 justify-self-end"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>}
          {show_menu && <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 justify-self-end"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>}
        </button>
        {show_menu && menuItems.map((item) =>
          item.children && (
            <DropdownButton
              key={item.name}
              label={item.name}
              href={item.href.pathname}
              items={item.children}
              isDesktop={false}
            ></DropdownButton>
          ) || (
            <li key={item.name} className="inline-block">
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