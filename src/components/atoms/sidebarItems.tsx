import { IconDashboard, TablerIconsProps } from '@tabler/icons-react';
import { t } from 'i18next';
import React from 'react';

export type MenuItem_TP = {
  id?: string;
  icon?: React.ReactNode;
  label?: string;
  link?: string;
  heading?: string; // Add the heading property

  items?: {
    id?: string;
    icon?: React.ReactNode;
    label?: string;
    link?: string;
    items?: MenuItem_TP[];
  }[];
};

export const sideBarItems: MenuItem_TP[] = [
  {
    id: crypto.randomUUID(),
    icon: <IconDashboard />,
    label: `${'dashboard'}`,
    link: '/',
  },
  {
    id: crypto.randomUUID(),
    icon: <IconDashboard />,
    label: `${'test'}`,
    link: '/test',
  },
  {
    id: crypto.randomUUID(),
    icon: <IconDashboard />,
    label: `${'tables'}`,
    link: '/tables',
  },
  {
    id: crypto.randomUUID(),
    icon: <IconDashboard />,
    label: `${'drag and drop'}`,
    link: '/dragndrop',
  },
  {
    id: crypto.randomUUID(),
    label: `${'Tartil '}`,
    icon: <IconDashboard />,
    items: [
      {
        id: crypto.randomUUID(),
        label: `${'Sliders'}`,
        link: '/site/slider',
        icon: <IconDashboard />,
      },
      {
        id: crypto.randomUUID(),
        label: `${'About Us'}`,
        link: '/site/aboutUs',
        icon: <IconDashboard />,
      }
    ],
  },
//   {
//     heading: 'CLIENTS', // Add heading
//   },


];
