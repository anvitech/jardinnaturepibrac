"use client";

import React, { useState, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type DropdownButtonProps = {
  label: string;
  items: { name: string; href: { pathname: string }; onClick?: () => void }[];
};

export const DropdownButton: React.FC<DropdownButtonProps> = ({ label, items }) => {
  const t = useTranslations("Menus");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      className="relative inline-block cursor-pointer"
    >
      <Link
        key={label}
        href={"#"}
        className="text-green-700 hover:text-green-800 cursor-pointer"
        tabIndex={0}
        aria-haspopup="true"
        aria-expanded={open}
        onMouseEnter={() => {setOpen(true);}}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
            setOpen(true);
          }
          if (e.key === "Escape" || e.key === "Tab") {
            setOpen(false);
          }
        }}
        onTouchStart={() => setOpen((prev) => !prev)}
      >
        {t(label)}
      </Link>
      {open && (
        <div
          className="absolute -top-4 -left-4"
          role="menu"
          tabIndex={-1}
          onMouseLeave={() => setOpen(false)}
        >
          <ul 
            className="flex flex-col gap-1 mt-16 px-4 py-2 border border-gray-300 bg-gray-100"
          >
            {items.map((item) => (
              <li key={item.name} className="whitespace-nowrap">
                <Link
                  key={item.name}
                  href={item.href.pathname}
                  className={"text-green-900 hover:text-green-700 text-[16px]/[24px]"}
                >
                  {t(`${label}:${item.name}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};