import { colorModeContext, useMode } from './scenes/Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from './scenes/global/Topbar';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashbod';
import Team from './scenes/team';
import Invoices from './scenes/invoices';
import Contacts from './scenes/contacts';
import Form from './scenes/form';
import Calendar from './scenes/calender'; // corrected import
import FAQ from './scenes/faq'
import Bar from './scenes/bar'
import Pie from './scenes/pie'
import Line from './scenes/line'
import Geography from './scenes/geography'


function App() {
  const [theme, colormode] = useMode();

  return (
    <colorModeContext.Provider value={colormode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} /> 
              <Route path="/faq" element={<FAQ/>} />
              <Route path="/bar-chart" element={<Bar/>} />
              <Route path="/pie-chart" element={<Pie/>} />
              <Route path="/Line-chart" element={<Line/>} />
              <Route path="/geography" element={<Geography/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
}

export default App;
