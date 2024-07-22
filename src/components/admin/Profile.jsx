import React from 'react';
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { asyncLogoutAdmin } from '../../store/Actions/adminActions';
import { NavLink } from 'react-router-dom';

const navigationProfile = [
	{ name: 'Dashboard', href: '#', current: true },
	{ name: 'Team', href: '#', current: false },
	{ name: 'Projects', href: '#', current: false },
	{ name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const Profile = () => {
	const dispatch = useDispatch();
	return (
		<div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:pr-0">
			{/* Profile dropdown */}
			<Menu as="div" className="relative">
				<div>
					<MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-gray-800">
						<span className="absolute" />
						<span className="sr-only">Open user menu</span>
						<img
							alt=""
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							className="h10 w-10 rounded-full"
						/>
					</MenuButton>
				</div>
				<MenuItems
					transition
					className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
				>
					<MenuItem>
						<Box
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
						>
							Your Profile
						</Box>
					</MenuItem>
					<MenuItem>
						<Box
							href="#"
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
						>
							Settings
						</Box>
					</MenuItem>
					<MenuItem>
						<Box
                        sx={{':hover':{cursor:'pointer'}}}
							onClick={() => dispatch(asyncLogoutAdmin())}
							className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
						>
						LOG OUT
						</Box>
					</MenuItem>
				</MenuItems>
			</Menu>
		</div>
	);
};

export default Profile;
