
import React, { useState } from 'react';
import TableSkelton from '../../components/Skelton/TableSkelton';

import FullCalendarCostum from '../../components/template/Calender/FullCalendar';
import ShowAlert from '../../components/atoms/ShowAlert';
import TimeInp from '../../components/atoms/inputs/TimeInp';
import { array } from 'yup';
import ModalCusom from '../../components/template/modal/ModalCusom';
import { title } from 'process';



type Person = {
    name: {
        firstName: string;
        lastName: string;
    };
    address: string;
    city: string;
    state: string;
};
const data: Person[] = [
    {
        name: {
            firstName: 'Zachary',
            lastName: 'Davis',
        },
        address: '261 Battle Ford',
        city: 'Columbus',
        state: 'Ohio',
    },
    {
        name: {
            firstName: 'Robert',
            lastName: 'Smith',
        },
        address: '566 Brakus Inlet',
        city: 'Westerville',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'Kevin',
            lastName: 'Yan',
        },
        address: '7777 Kuhic Knoll',
        city: 'South Linda',
        state: 'West Virginia',
    },
    {
        name: {
            firstName: 'John',
            lastName: 'Upton',
        },
        address: '722 Emie Stream',
        city: 'Huntington',
        state: 'Washington',
    },
    {
        name: {
            firstName: 'Nathan',
            lastName: 'Harris',
        },
        address: '1 Kuhic Knoll',
        city: 'Ohiowa',
        state: 'Nebraska',
    },
];
export default function Test() {

    const [opened,setOpen] = useState<boolean>(false)
    return (
        <>
        <button onClick={()=>{setOpen(true)}}>d</button>
          <ModalCusom opened={opened} setOpen={setOpen}>
            sss
          </ModalCusom>
        </>
    )

}
