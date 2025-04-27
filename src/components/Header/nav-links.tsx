'use client';

import { navLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLinks() {
  const pathname = usePathname();
  return (
    <div className="hidden md:flex items-center justify-end space-x-10">
      {navLinks.map(link => (
        <Link key={link.id} href={link.href}>
          <h1 className={cn(pathname === link.href && 'active', 'link pb-2')}>
            <link.icon />
            <p className="font-bold">{link.label}</p>
          </h1>
        </Link>
      ))}
    </div>
  );
}
