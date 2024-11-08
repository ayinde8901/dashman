import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import popo from '../../components/Assets/popo.png';
import { tokens } from "../Theme";
import {
  HomeOutlined as HomeOutlinedIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
  ContactsOutlined as ContactsOutlinedIcon,
  ReceiptOutlined as ReceiptOutlinedIcon,
  PersonOutlineOutlined as PersonOutlineOutlinedIcon,
  CalendarTodayOutlined as CalendarTodayOutlinedIcon,
  HelpOutlineOutlined as HelpOutlineOutlinedIcon,
  BarChartOutlined as BarChartOutlinedIcon,
  PieChartOutlined as PieChartOutlinedIcon,
  TimelineOutlined as TimelineOutlinedIcon,
  MenuOutlined as MenuOutlinedIcon,
  MapOutlined as MapOutlinedIcon
} from '@mui/icons-material';
import { Link } from "react-router-dom";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem 
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.primary[400]} !important`
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important"
      },
      "& .pro-inner-item": {
        padding: "5px 25px 5px 20px !important"
      },
      "& .pro-inner-item:hover": {
        color: '#868dfb !important'
      },
      "& .pro-menu-item.active": {
        color: '#687afa !important'
      },
    }}  height="143vh">
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem 
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100]
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="12px">
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <>
              <Box display='flex' justifyContent="center" alignItems='center' mt="15px">
                <img alt="user profile" width="100px" height="100px" src={popo} style={{ cursor: 'pointer', borderRadius: '50%' }} />
              </Box>
              <Box textAlign="center" mt="10px">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "10px 0 0 0" }}>
                  Raffard D
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </>
          )}

          {/* Menu Items */}
          <Box paddingLeft={!isCollapsed ? undefined : "10%"}>
            <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{m:'15px 0 5px 20px'}}>
              Data
            </Typography>
            <Item title="Manage Team" to="/team" icon={<PeopleOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Contacts" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Invoices" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{m:'15px 0 5px 20px'}}>
              Pages
            </Typography>
            <Item title="Profile Form" to="/form" icon={<PersonOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="FAQ" to="/faq" icon={<HelpOutlineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Typography variant="h6" color={colors.grey[300]} sx={{m:'15px 0 5px 20px'}}>
              charts
            </Typography>
            <Item title="Bar Chart" to="/bar-chart" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Pie Chart" to="/pie-chart" icon={<PieChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Line Chart" to="/line-chart" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
            <Item title="Geography" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
