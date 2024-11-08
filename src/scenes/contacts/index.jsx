// File: DataGridComponent.js
import { Box, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../Theme";  
import { mockDataContacts } from "../../Data/Mockdata";  
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'registrarId', headerName: 'RegistrarId' },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', width: 90 },
    { field: 'phone', headerName: 'Phone', flex: 1, width: 130 },
    { field: 'email', headerName: 'Email', flex: 1, width: 200 },
    { field: 'address', headerName: 'Address', flex: 1, width: 200 },
    { field: 'city', headerName: 'City', flex: 1, width: 200 },
    { field: 'zipcode', headerName: 'Zip Code', flex: 1, width: 200 },
  ];

  return (
    <Box m="20px">
      <Header title="Contacts" subtitle="The contact for future reference" />
      <Typography variant="h4" color={colors.grey[200]} mb={2}>
        Team Members
      </Typography>
      <Box m="40px 0 0 0" sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={mockDataContacts}
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
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${colors.grey[100]} !important`
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
