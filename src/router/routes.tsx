import { lazy, useContext } from 'react';

import { Navigate } from 'react-router-dom';
import Login from '../pages/Authentication/Login';
import Test from '../pages/pageTest/Test';
import FullCalendarCustom from '../components/template/Calender/FullCalendar';
import Table from '../components/template/tantable/Table';
import Tables from '../pages/Tables';
import DragAndDrop from '../pages/DragAndDrop';
const Index = lazy(() => import('../pages/Index'));


const LoginBoxed = lazy(() => import('../pages/Authentication/Login'));

const routes = [
    // dashboard

    {
        path: '/',
        element: <Index />,
    },
    {
        path: '/tables',
        element:  <Tables />
    },
     
      {
        path: '/test',
        element: <Test />,
    },
        
    {
        path: '/dragndrop',
        element: <DragAndDrop />,
    },
    {
        path: '/calendar',
        element: <FullCalendarCustom />,
    },

];

export { routes };
