import './App.css';
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Uploader from './Uploader';
import Upscale from './Upscale';
import axios from 'axios';

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function App() {
  const [pictures, setPictures] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const [uploadClicked, setUploadClicked] = useState(false);
  const classes = useStyles();

  const handleChangeTabs = (event, newValue) => {
    setTabValue(newValue);
  };

  const clickClear = (ev) => {
    ev.preventDefault();

    setTabValue(0);
    setUploadClicked(false);

    axios({
        method: 'post',
        url: 'http://localhost:5000/clear',
        config: { headers: { 'Content-Type': 'applications/json' } }
    })
        .then(response => console.log(response))
        .catch(errors => console.log(errors))
  }
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
          <Tabs value={tabValue} onChange={handleChangeTabs}>
              <Tab label="Upload Image" {...a11yProps(0)}/>
              <Tab label="Upscale" {...a11yProps(1)} disabled={!uploadClicked}/>
          </Tabs>
      </AppBar>

      <TabPanel value={tabValue} index={0}>
        <Uploader 
          setPic={setPictures}
          pic={pictures}
          setTab={setTabValue}
          setUpload={setUploadClicked}
        />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <Upscale filename={pictures.name}/>
      </TabPanel>

      <Button color="secondary" variant="contained" onClick={clickClear}>Clear</Button>
      
    </div>
  );
}

export default App;
