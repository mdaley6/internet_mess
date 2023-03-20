import React from 'react';
import Link from 'next/link';

const NavButton = (props) => {
    return (
        <div>
            <Link className='p-2 hover:bg-black hover:border-black hover:text-green-500 border-2 border-green-500 text-green-300 bg-gray-500' href={'/' + props.path}>{props.name}</Link>
        </div>
    );
}

const NavBar = (props) => {
    return (
        <div className='w-full bg-blue-600'>
            <div className='flex flex-row justify-between py-4 w-3/4'>
                <NavButton path='' name='Home' />
                <NavButton path='games' name='Back to Game' />
                <NavButton path='leaders' name='Leader Board' />
                <NavButton path='golfcard' name='Golf Cards' />
                <NavButton path='login' name='Log In' />
            </div>
        </div>
    );
}

export default NavBar;