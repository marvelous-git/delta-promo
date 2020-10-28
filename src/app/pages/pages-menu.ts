import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: `USER MANAGEMENT`,
    group: true,
  },
  {
    title: 'System Users',
    icon: 'people-outline',
    link: '/pages/users',
  },
  {
    title: 'User Groups',
    icon: 'people-outline',
    link: '/pages',
  },
  {
    title: 'User Roles',
    icon: 'people-outline',
    link: '/pages',
  },
];
