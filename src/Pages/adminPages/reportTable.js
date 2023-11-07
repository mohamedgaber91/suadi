



// import { useMemo, useState } from 'react';
// import { MaterialReactTable } from 'material-react-table';
// import { Box, IconButton } from '@mui/material';
// import { Edit as EditIcon, Delete as DeleteIcon ,} from '@mui/icons-material';


// export const ReportsTable = () => {
//   const columns = useMemo(
//     //column definitions...
//     () => [
//       {
//         accessorKey: 'employeeName',
//         header: 'Employee Name',
//       },
//       {
//         accessorKey: 'createdAt',
//         header: 'Created At',
//       },
//       {
//         accessorKey: 'report',
//         header: 'Report',
//       },
//     ],
//     [],
//     //end
//   );
//   const employees=[
//         {
//           id: 1,
//           employeeName: "mohammed",
//           createdAt: "21/1/2000",
//           report:"jmfjgikdfjgkidfjgkfjfdmdfkgmkdfdjjfgj"
//         },
//         {
//             id: 1,
//             employeeName: "ziad",
//             createdAt: "5/1/2000",
//             report:"kvjkdfjvkfdjvkdfjvkdfjvdfkjvdfvj"
//           },
        
//       ];
//   const [data, setData] = useState(employees);

//   return (
//     <>
//    <div className='table-content  mt-5'>
//    <h1 className='mt-5 text-start ms-3 mb-4 '>Reports :</h1>
//     <MaterialReactTable
//       columns={columns}
//       data={data}
//       enableRowActions
//       renderRowActions={({ row, table }) => (
//         <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '10px' }}>
//           <button
//             color="primary"
//             onClick={() => {
//               table.setEditingRow(row);
//             }}
//           >
//            show report
//           </button>
//         </Box>
//       )}
//     />
//    </div>
//     </>
//   );
// };

// export default ReportsTable;









import React, { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Box, Button, Dialog, DialogTitle, DialogContent } from '@mui/material';

export const ReportsTable = () => {
  const columns = useMemo(
    //column definitions...
    () => [
      {
        accessorKey: 'employeeName',
        header: 'Employee Name',
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
      },
      {
        accessorKey: 'report',
        header: 'Report',
      },
    ],
    [],
    //end
  );

  const employees = [
    {
      id: 1,
      employeeName: "mohammed",
      createdAt: "21/1/2000",
      report: "jmfjgikdfjgkidfjgkfjfdmdfkgmkdfdjjfgj jmfjgikdfjgkidfjgkfjfdmdfkgmkdfdjjfgj"
    },
    {
      id: 2,
      employeeName: "ziad",
      createdAt: "5/1/2000",
      report: "kvjkdfjvkfdjvkdfjvkdfjvdfkjvdfvj"
    },
  ];

  const [data, setData] = useState(employees);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentReport, setCurrentReport] = useState("");

  const handleShowReport = (report) => {
    setCurrentReport(report);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className='table-content  mt-5 mb-5'>
        <h1 className='mt-5 text-start ms-3 mb-4 '>Reports :</h1>
        <MaterialReactTable
          columns={columns}
          data={data}
          enableRowActions
          renderRowActions={({ row }) => (
            <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '10px',  maxHeight: '80%' }}>
              <Button
                color="primary"
                onClick={() => handleShowReport(row.original.report)}
                // onClick={() => console.log(row)}
              >
                Show Report
              </Button>
            </Box>
          )}
        />
      </div>
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Report Details</DialogTitle>
        <DialogContent>
          {currentReport}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ReportsTable;







