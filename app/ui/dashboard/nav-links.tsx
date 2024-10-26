'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  DocumentMagnifyingGlassIcon,
  PlayIcon,
  ArchiveBoxIcon
} from '../../../node_modules/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const userRole = 'Administrador';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/dashboard/home', icon: HomeIcon, roles: ['Administrador'] },
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: ArchiveBoxIcon, 
    roles: ['Administrador'] 
},
  { 
    name: 'Procedures', 
    href: '/dashboard/procedures', 
    icon: DocumentMagnifyingGlassIcon, 
    roles: ['Administrador', 'Usuario']
},
  { 
    name: 'My Requests', 
    href: '/dashboard/requests', 
    icon: DocumentDuplicateIcon, 
    roles: ['Administrador', 'Usuario']
},
  { name: 'Game', href: '/dashboard/game', icon: PlayIcon, roles: ['Administrador', 'Usuario'] },
  { name: 'Help', href: '/dashboard/help', icon: UserGroupIcon, roles: ['Administrador', 'Usuario'] }
];

const filteredLinks = links.filter(link => link.roles.includes(userRole));


export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {filteredLinks.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}