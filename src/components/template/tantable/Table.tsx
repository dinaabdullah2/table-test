import { useMemo, useState } from 'react';
import {
    MantineReactTable,
    useMantineReactTable,
    type MRT_ColumnDef,
    type MRT_GroupingState,
} from 'mantine-react-table';
import { Button } from '@mantine/core';
import { getGroupedRowModel } from '@tanstack/react-table';

type Person = {
    name: { firstName: string; lastName: string };
    address: string;
    city: string;
    state: string;
    email: string;
    phone: string;
    age: number;
    zipCode: string;
    country: string;
    company: string;
    jobTitle: string;
    department: string;
    salary: number;
    hireDate: string;
    manager: string;
    gender: string;
    maritalStatus: string;
    language: string;
    nationality: string;
    birthDate: string;
    education: string;
    skills: string;
    experience: number;
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
    timezone: string;
    status: string;
};

// Generate sample data
const data: Person[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: { firstName: `First${i + 1}`, lastName: `Last${i + 1}` },
    address: `${100 + i} Main Street`,
    city: `City${i + 1}`,
    state: `State${(i % 10) + 1}`,
    email: `user${i + 1}@example.com`,
    phone: `555-000-${String(i + 1).padStart(4, '0')}`,
    age: 20 + (i % 15),
    zipCode: `100${i}`,
    country: 'USA',
    company: `Company${i + 1}`,
    jobTitle: 'Developer',
    department: ['Engineering', 'Marketing', 'Sales'][i % 3],
    salary: 50000 + i * 1000,
    hireDate: `2020-01-${String((i % 28) + 1).padStart(2, '0')}`,
    manager: `Manager${(i % 5) + 1}`,
    gender: i % 2 === 0 ? 'Male' : 'Female',
    maritalStatus: i % 3 === 0 ? 'Single' : 'Married',
    language: 'English',
    nationality: 'American',
    birthDate: `1990-01-${String((i % 28) + 1).padStart(2, '0')}`,
    education: 'Bachelor',
    skills: 'React, TypeScript',
    experience: i,
    website: `https://user${i + 1}.dev`,
    linkedin: `linkedin.com/in/user${i + 1}`,
    github: `github.com/user${i + 1}`,
    twitter: `@user${i + 1}`,
    timezone: 'EST',
    status: i % 4 === 0 ? 'Inactive' : 'Active',
}));

// Flatten row for CSV export
const flattenRow = (row: Person) => ({
    firstName: row.name.firstName,
    lastName: row.name.lastName,
    ...row,
    name: undefined,
});

// CSV utilities
const convertToCSV = (rows: any[]) => {
    const keys = Object.keys(rows[0]);
    const csvRows = [
        keys.join(','),
        ...rows.map((row) =>
            keys.map((key) => `"${(row[key] ?? '').toString().replace(/"/g, '""')}"`).join(',')
        ),
    ];
    return csvRows.join('\n');
};

const downloadCSV = (rows: any[], filename = 'data.csv') => {
    const csv = convertToCSV(rows);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    window.URL.revokeObjectURL(url);
};

const Table = () => {
    const [grouping, setGrouping] = useState<MRT_GroupingState>([]);
    const exportGroupedWithAggregation = (table: any) => {
      const allColumns = table.getVisibleLeafColumns();

      const columns = allColumns.filter(
        (col: any) =>
          col.id !== 'mrt-row-select' &&
          col.id !== 'mrt-row-expand'
      );
      const rows = table.getGroupedRowModel().rows;
      const output: string[][] = [];
    
      const headers = [" ",...columns.map((col: any) => col.columnDef.header)];
      output.push(headers);
    
      const traverseRows = (rows: any[], depth = 0) => {
        for (const row of rows) {
          if (row.getIsGrouped?.()) {
            traverseRows(row.subRows, depth);
            const groupKey = row.id.split('___')[0];
            output.push([`Group: ${groupKey} = ${row.subRows.length}`]);
    
            const aggregationData = columns.map((col: any) => {
              const cell = row.getAllCells().find((c: any) => c.column.id === col.id);
              if (cell?.getIsAggregated?.()) {
                const fn = cell.column.columnDef.aggregationFn;
                const val = cell.getValue();
                return fn === 'mean'
                  ? `Avg: ${val ?? ''}`
                  : fn === 'sum'
                  ? `Sum: ${val ?? ''}`
                  : val ?? '';
              }
              return '';
            });
    
            output.push(['Aggregated', ...aggregationData]);
          } else {
            const rowData = [
              " "
              ,
              ...columns.map((col: any) => {
                const cell = row.getAllCells().find((c: any) => c.column.id === col.id);
                return cell?.getValue() !== undefined ? cell.getValue() : '';
              }),
            ];
            output.push(rowData);
          }
        }
      };
    
      traverseRows(rows);
    
      const csvContent = output
        .map((row) => row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(','))
        .join('\n');
    
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', 'grouped_with_aggregations.csv');
      link.click();
      URL.revokeObjectURL(url);
    };
    
    
    
    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
          { accessorKey: 'name.firstName', header: 'First Name' },
          { accessorKey: 'name.lastName', header: 'Last Name' },
          { accessorKey: 'address', header: 'Address' },
          { accessorKey: 'city', header: 'City' },
          { accessorKey: 'state', header: 'State' },
          { accessorKey: 'email', header: 'Email' },
          { accessorKey: 'phone', header: 'Phone' },
          { accessorKey: 'age', header: 'Age', aggregationFn: 'mean', AggregatedCell: ({ cell }) => `Avg: ${cell.getValue()}` },
          { accessorKey: 'zipCode', header: 'Zip Code' },
          { accessorKey: 'country', header: 'Country' },
          { accessorKey: 'company', header: 'Company', enableGrouping: true },
          { accessorKey: 'jobTitle', header: 'Job Title' },
          { accessorKey: 'department', header: 'Department', enableGrouping: true },
          {
            accessorKey: 'salary',
            header: 'Salary',
            aggregationFn: 'mean',
            AggregatedCell: ({ cell }) => `Avg: $${Math.round(cell.getValue<number>())}`,
          },
          {
            accessorKey: 'experience',
            header: 'Experience (yrs)',
            aggregationFn: 'sum',
            AggregatedCell: ({ cell }) => `Total: ${cell.getValue<number>()} yrs`,
          },
          { accessorKey: 'hireDate', header: 'Hire Date' },
          { accessorKey: 'manager', header: 'Manager' },
          { accessorKey: 'gender', header: 'Gender' },
          { accessorKey: 'maritalStatus', header: 'Marital Status' },
          { accessorKey: 'language', header: 'Language' },
          { accessorKey: 'nationality', header: 'Nationality' },
          { accessorKey: 'birthDate', header: 'Birth Date' },
          { accessorKey: 'education', header: 'Education' },
          { accessorKey: 'skills', header: 'Skills' },
          { accessorKey: 'website', header: 'Website' },
          { accessorKey: 'linkedin', header: 'LinkedIn' },
          { accessorKey: 'github', header: 'GitHub' },
          { accessorKey: 'twitter', header: 'Twitter' },
          { accessorKey: 'timezone', header: 'Timezone' },
          { accessorKey: 'status', header: 'Status', enableGrouping: true },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data,
        enableGrouping: true,
        getGroupedRowModel: getGroupedRowModel(),
        onGroupingChange: setGrouping,
        state: { grouping },
        enableRowSelection: true,
        renderTopToolbarCustomActions: ({ table }) => {
            const selectedRows = table
                .getSelectedRowModel()
                .rows.map((row) => flattenRow(row.original));
            return (
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <Button
                        onClick={() => {
                            if (selectedRows.length === 0) {
                                alert('No rows selected');
                                return;
                            }
                            downloadCSV(selectedRows, 'selected-rows.csv');
                        }}
                        variant="outline"
                    >
                        Export Selected
                    </Button>
                    <Button
                        onClick={() => exportGroupedWithAggregation(table)}
                      variant="outline"
                        color="blue"

                    >
                        Export Grouped
                    </Button>
                </div>
            );
        },
    });

    return <MantineReactTable table={table} />;
};

export default Table;
