import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import CheckWaybill from '../CheckWaybill/CheckWaybill';
import ListOffices from '../ListOffices/ListOffices';
import { TabContext, TabPanel } from '@mui/lab';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';

function App() {
  const [value, setValue] = useState('check');

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        // border: '7px double mediumpurple',
        backgroundColor: '#fff',
      }}
    >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#9c27b0' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="choosing tab"
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab
              icon={<SearchOutlinedIcon />}
              iconPosition="start"
              label="Перевірити ТТН"
              value="check"
            />
            <Tab
              icon={<NotListedLocationOutlinedIcon />}
              iconPosition="start"
              label="Список відділень"
              value="list"
            />
          </Tabs>
        </Box>
        <TabPanel value="check">{<CheckWaybill />}</TabPanel>
        <TabPanel value="list">{<ListOffices />}</TabPanel>
      </TabContext>
    </Container>
  );
}

export default App;
