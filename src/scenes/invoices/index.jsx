// File: DataGridComponent.js
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid"; // Importing GridToolbar
import { tokens } from "../Theme";  
import { mockDataInvoices } from "../../Data/Mockdata";  
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'phone', headerName: 'Phone', flex: 1, width: 130 },
    { field: 'email', headerName: 'Email', flex: 1, width: 200 },
    { field: 'date', headerName: 'Date', flex: 1, width: 200 },
    { field: 'cost', headerName: 'Cost', flex: 1, width: 200, renderCell: (params) => (
      <Typography color={colors.greenAccent[500]}>
        ${params.row.cost.toFixed(2)} {/* Formatting cost to two decimal places */}
      </Typography>
    ) },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" subtitle="The customer invoices" /> {/* Corrected title */}
      <Typography variant="h4" color={colors.grey[200]} mb={2}>
        Team Members
      </Typography>
      <Box m="40px 0 0 0" sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
          sx={{
            '& .MuiDataGrid-root': {
              border: 'none',
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: 'none',
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: 'none',
              backgroundColor: colors.blueAccent[600],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Invoices;
