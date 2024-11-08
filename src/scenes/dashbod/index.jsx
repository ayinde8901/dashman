import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../Theme"; 
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfsaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { mockTransactions } from '../../Data/Mockdata';
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from '../../components/LineChart';
import Barchart from '../../components/Barchart';
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = ({ title, subtitle, progress, increase, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Button
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: '10px' }} />
          Download Reports
        </Button>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gridAutoRows="140px" gap="20px">
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox 
            title="12,361"
            subtitle="Emails sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox 
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={<PointOfsaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox 
            title="32,441"
            subtitle="New Client"
            progress="0.75"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>
        <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center">
          <StatBox 
            title="1,325,334"
            subtitle="Traffic Inbound"
            progress="0.85"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />}
          />
        </Box>

        {/* Row 2 */}
        <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]}>
          <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant='h5' fontWeight="600" color={colors.grey[100]}>
                Revenue Generated
              </Typography>
              <Typography variant='h5' fontWeight="600" color={colors.grey[500]}>
                $59,342,32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon sx={{ fontSize: "26px", color: colors.greenAccent[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        {/* Transaction List */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} overflow="auto">
          <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
            <Typography color={colors.grey[100]} variant='h5' fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box key={`${transaction.id}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} p="15px">
              <Box>
                <Typography color={colors.greenAccent[500]} variant='h5' fontWeight="600">
                  {transaction.id}
                </Typography>
                <Typography color={colors.greenAccent[500]} variant='h6'>
                  {transaction.description}
                </Typography>
              </Box>
              <Box color={colors.grey[500]}>
                {transaction.date}
              </Box>
              <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">
                ${transaction.amount}
              </Box>
            </Box>
          ))}
        </Box>
        {/* row 3  */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="10px" height="210px">
       <Typography variant='h5' fontWeight="600">
        campaign
       </Typography>
       <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
         <ProgressCircle/>
         <Typography variant='h5' color={colors.greenAccent[500]} sx={{mt:'20px'}}>
          $48,352 revenue generated
         </Typography>
         <Typography>
        include extra misc expenditure and costs
       </Typography>
       </Box>
        </Box>

        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[500]} height="210px">
       <Typography variant='h5' fontWeight="600" sx={{p:"30px 30px 0 30px"}}>
        sales quantity
       </Typography>
       <Box height="200px" mt="-10px">
         <Barchart isDashboard={true}/>
       </Box>
        </Box>

        {/* row new  */}
        <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="20px" height="210px">
       <Typography variant='h5' fontWeight="600" sx={{mb:"25px"}}>
        Geography based Traffic
       </Typography>
       <Box height="130px" mt="-20px">
         <GeographyChart isDashboard={true}/>
       </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;