// File: DataGridComponent.js
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../Theme";  
import { mockDataTeam } from "../../Data/Mockdata";  
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
    { field: 'age', headerName: 'Age', type: 'number', headerAlign: 'left', width: 90 },
    { field: 'phone', headerName: 'Phone', flex: 1, width: 130 },
    { field: 'email', headerName: 'Email', flex: 1, width: 200 },
    {
      field: 'access',
      headerName: 'Access Level',
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === 'admin' ? colors.greenAccent[600] : colors.greenAccent[700]
          }
          borderRadius="4px"
        >
          {access === 'admin' && <AdminPanelSettingsOutlinedIcon />}
          {access === 'manager' && <SecurityOutlinedIcon />}
          {access === 'user' && <LockOpenOutlinedIcon />}
          <Typography color={colors.grey[100]} sx={{ ml: '3px' }}>
            {access}
          </Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team" />
      <Typography variant="h4" color={colors.grey[200]} mb={2}>
        Team Members
      </Typography>
      <Box m="40px 0 0 0" sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={mockDataTeam}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
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
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
