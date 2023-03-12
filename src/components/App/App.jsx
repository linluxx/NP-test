import { useState } from 'react';

import { Tabs, Tab, useMediaQuery, Box } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';

import CheckWaybill from '../CheckWaybill/CheckWaybill';
import OfficeSearch from '../OfficeSearch/OfficeSearch';

import { Container } from './App.styled';

function App() {
  const [value, setValue] = useState('check');
  const tablet = useMediaQuery('(min-width:600px)');

  const handleChange = (evt, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: '#9c27b0' }}>
          {tablet ? (
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
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="choosing tab"
              textColor="secondary"
              indicatorColor="secondary"
              centered
            >
              <Tab
                icon={<SearchOutlinedIcon />}
                value="check"
                label="Перевірити ТТН"
                sx={{ fontSize: '12px' }}
              />
              <Tab
                icon={<NotListedLocationOutlinedIcon />}
                value="list"
                label="Список відділень"
                sx={{ fontSize: '12px' }}
              />
            </Tabs>
          )}
        </Box>
        <TabPanel value="check">{<CheckWaybill />}</TabPanel>
        <TabPanel value="list">{<OfficeSearch />}</TabPanel>
      </TabContext>
    </Container>
  );
}

export default App;
