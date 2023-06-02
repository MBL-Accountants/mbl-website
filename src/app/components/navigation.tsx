'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type Props = {
  navLinks: {
    href: string;
    label: string;
  }[];
};

export const Navigation: React.FC<Props> = ({ navLinks }: Props) => {
  const pathname = usePathname();
  return (
    <nav role="navigation">
      <ul id="nav">
        {navLinks.map(({ href, label }) => {
          return (
            <li key={label}>
              <Link
                className={
                  pathname.startsWith(href) ? 'current_page' : undefined
                }
                href={href}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
