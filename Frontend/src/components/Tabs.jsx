// components/Tabs.jsx
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, md: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ tabLabels, tabContents }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-10 py-8 bg-[#f5f5f5] dark:bg-[#393E46]  transition-colors duration-300">
      <Box
        sx={{
          width: '100%',
          maxWidth: '768px',
          mx: 'auto',
          fontFamily: 'Montserrat Alternates',
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 3,
          color: 'inherit',
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="custom reusable tabs"
            variant="fullWidth"
            textColor="inherit"
            TabIndicatorProps={{
              sx: { backgroundColor: '#1976d2' },
            }}
          >
            {tabLabels.map((label, index) => (
              <Tab key={index} label={label} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>

        {tabContents.map((content, index) => (
          <CustomTabPanel key={index} value={value} index={index}>
            {content}
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  );
}

BasicTabs.propTypes = {
  tabLabels: PropTypes.arrayOf(PropTypes.string).isRequired,
  tabContents: PropTypes.arrayOf(PropTypes.node).isRequired,
};
