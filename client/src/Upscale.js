import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import './Upscale.css';

// https://roytuts.com/upload-and-display-image-using-python-flask/

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const useButtonStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Upscale = props => {
  const filename = props.filename;
  const buttonStyle = useButtonStyles();
  const [isUpScaled, setIsUpScaled] = useState(false);
  const [isUpscaling, setIsUpscaling] = useState(false);

  const clickUpscale = async (ev) => {
    ev.preventDefault();

    setIsUpscaling(true);
    // axios({
    //     method: 'post',
    //     url: 'http://localhost:5000/upscale',
    //     config: { headers: { 'Content-Type': 'applications/json' } }
    // })
    //     .then(response => setIsUpScaled(response['data']['result']))
    //     .catch(errors => console.log(errors))
    const response = await axios({method: 'post', url: '/upscale', config: { headers: { 'Content-Type': 'applications/json' } }});
    console.log(response);
    setIsUpscaling(false);
    setIsUpScaled('/static/'+response['data']['result']);
  }
  
  return (
    <div className="rowC">
      <div>
        <img src={"/static/"+filename} alt={filename}/>  
      </div>
      <div>
        <Button color="secondary" variant="contained" onClick={clickUpscale} className={buttonStyle.margin}>
          {isUpscaling ? <CircularProgress /> : 'Upscale'}
        </Button>
      </div>
      <div>
        <img src={isUpScaled ? isUpScaled : "/static/__EmPtY__.jpg"} alt={"empty.jpg"}/> 
      </div>
    </div>

  );
}

export default Upscale;