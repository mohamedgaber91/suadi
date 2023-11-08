



import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Email as EmailIcon } from '@mui/icons-material';
import { Button } from '../../components/buttons/buttons';
import { NavLink } from 'react-router-dom';



export const EmployeeTable = () => {



  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'employeeName',
        header: 'Employee Name',
      },
      {
        accessorKey: 'consultationEmail',
        header: 'Consultation Email',
      },
      {
        accessorKey: 'consultationPendding',
        header: 'Consultation Pendding',
      },
      {
        accessorKey: 'consultationCompleted',
        header: 'Consultation Completed',
      },
      {
        accessorKey: 'phone',
        header: 'phone',
      },
      {
        accessorKey: 'status',
        header: 'status',
      },
    ],
    [],
    //end
  );
  const employees = [
    {
      id: 1,
      employeeName: "mohammed",
      consultationEmail: "mohammed@gmail.com",
      consultationPendding: 15,
      consultationCompleted: 20,
      phone: "01111111111",
      status: "blocked",
    },
    {
      id: 2,
      employeeName: "ziad",
      consultationEmail: "ziad@gmail.com",
      consultationPendding: 10,
      consultationCompleted: 80,
      phone: "565656565",
      status: "activate",
    },

  ];
  const [data, setData] = useState(employees);

  const [editingRow, setEditingRow] = useState(null); // Track the currently editing row

  return (
    <>
      <div className='table-content mb-5  '>
        <h1 className='mt-5  mb-4 text-start ms-3'>Employees :</h1>
        <MaterialReactTable
          columns={columns}
          data={data}
          onEditingRowSave={({ table, values,row }) => {
            //validate data
            row.original = values
            console.log(values)
            console.log(row.original)
            //save data to api

            table.setEditingRow(null); //exit editing mode
          }}
          enableRowActions
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
              <IconButton
                color="primary"
                onClick={() =>
                  window.open(
                    `mailto: ${row.original.consultationEmail}?subject=Hello ${row.original.employeeName}! 
                      /*Message for employees */ ` ,
                  )
                }
              >
                <EmailIcon />
              </IconButton>
              <IconButton
                color="secondary"
                onClick={() => {
                  table.setEditingRow(row);
                  console.log(row.original)
                }}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => {
                  data.splice(row.index, 1);
                  setData([...data]);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Box>

          )}
        />
        <Button children=
          {<NavLink to='/admin/employee/add' className={'text-decoration-none text-white px-3'} >add Employee</NavLink>}
          type={'primary'}
          className='mt-5 p-0'>

        </Button>
      </div>
    </>
  );
};

export default EmployeeTable;

















