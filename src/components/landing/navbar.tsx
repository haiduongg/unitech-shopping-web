import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

import { FiArrowUpRight, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

import Logo from '/public/logo.png';

interface LinkList {
  label: string;
  href: string;
  external: boolean;
}

function Navbar() {
  const links: LinkList[] = [
    { label: 'Products', href: '/products', external: false },
    { label: 'About', href: '/about', external: false },
    { label: 'Blog', href: 'https://www.csdvietnam.com', external: true },
    {
      label: 'Contact',
      href: 'https://www.facebook.com/haiduong004',
      external: true,
    },
  ];
  return (
    <div className='container mx-auto h-20 flex items-center justify-between'>
      <div className='p-5'>
        <Link href={'/'} className='hover:opacity-80 flex items-center gap-2'>
          <Image src={Logo} alt='logo' width={70} height={52} />
        </Link>
      </div>

      <div className='w-full px-8'>
        <nav className='flex justify-between items-center'>
          <ul className='flex items-center'>
            {links.map((link, index) => (
              <li key={index} className='relative group font-semibold'>
                <Link
                  href={link.href}
                  className='p-2 m-3'
                  target={link.external ? '_blank' : ''}
                >
                  <span className='group-hover:text-hover-normal'>
                    {link.label}
                  </span>
                  <div className='absolute top-0 right-2 opacity-70'>
                    {link.external === true ? (
                      <FiArrowUpRight size={10} />
                    ) : null}
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <ul className='flex items-center gap-6'>
            <li>
              <Button variant='secondary' size='icon' className='gird place-items-center rounded-full bg-black text-white hover:bg-hover-normal'>
                <FiSearch size={18} />
              </Button>
            </li>
            <li>
              <Link href={'/cart'}>
                <Button variant='secondary' size='icon' className='gird place-items-center rounded-full bg-black text-white hover:bg-hover-normal'>
                  <FiShoppingCart size={18} />
                </Button>
              </Link>
            </li>
            <li className='ml-3'>
              <Link href={'/login'}><Button>Login / Register</Button></Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
