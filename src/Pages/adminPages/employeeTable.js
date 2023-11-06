



import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon ,} from '@mui/icons-material';


export const EmployeeTable = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'employeeName',
        header: 'Employee Name',
      },
      {
        accessorKey: 'consultationNo',
        header: 'Consultation Number',
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
  const employees=[
        {
          id: 1,
          employeeName: "mohammed",
          consultationNo: "mohammed@gmail.com",
          consultationPendding:15 ,
          consultationCompleted:20,
          phone:"01111111111",
          status:"blocked",
        },
        {
          id: 2,
          employeeName: "ziad",
          consultationNo: "ziad@gmail.com",
          consultationPendding:10 ,
          consultationCompleted:80,
          phone:"565656565",
          status:"activate",
        },
        
      ];
  const [data, setData] = useState(employees);

  return (
    <>
    <div className='table-content mb-5  '>
    <h1 className='mt-5  mb-4 text-start ms-3'>Employees :</h1>
    <MaterialReactTable
      columns={columns}
      data={data}
      enableRowActions
      renderRowActions={({ row, table }) => (
        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
          <IconButton
            color="primary"
            onClick={() =>
              window.open(
                `mailto:kevinvandy@mailinator.com?subject=Hello ${row.original.firstName}!`,
              )
            }
          >
            Email
          </IconButton>
          <IconButton
            color="secondary"
            onClick={() => {
              table.setEditingRow(row);
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
    </div>
    </>
  );
};

export default EmployeeTable;

















