import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

import { FiArrowUpRight, FiSearch, FiShoppingCart } from 'react-icons/fi';
import { Button } from '@/components/ui/button';

import Logo from '/public/logo.png';

import SearchBar from '@/components/landing/search-bar';
import Navigation from '@/components/landing/navbar/navigation';

export default function Navbar() {
  return (
    <div className='border-b-[1px] border-gray-200'>
      <div className='container mx-auto h-20 w-full grid grid-cols-4'>
        <div className='py-5 max-w-fit'>
          <Link href={'/'} className='hover:opacity-80 flex items-center justify-start gap-3'>
            <Image src={Logo} alt='logo' width={40} height={40} className='rounded-lg' />
            <h1 className='font-extrabold text-xl'>Uni
              <span className='text-primary-600'>Tech</span>
            </h1>
          </Link>
        </div>

        <nav className='col-span-2 my-auto'>
          <Navigation />
        </nav>

        <ul className='flex items-center justify-end gap-6'>
          <li>
            <SearchBar />
          </li>
          <li>
            <Link href={'/cart'}>
              <Button variant='secondary' size='icon' className='gird place-items-center rounded-full bg-black text-white hover:bg-hover-normal'>
                <FiShoppingCart size={18} />
              </Button>
            </Link>
          </li>
          <li className='ml-3'>
            <Link href={'/login'}><Button className='text-white font-semibold'>Login / Register</Button></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
