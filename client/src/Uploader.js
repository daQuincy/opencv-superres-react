import React from "react";
import ImageUploader from "react-images-upload";
import Button from '@material-ui/core/Button';
import axios from 'axios';

// https://medium.com/@eric.hung0404/deal-with-cors-without-flask-cors-an-example-of-react-and-flask-5832c44108a7

const Uploader = props => {
  const setPictures = props.setPic;
  const pic = props.pic;
  const setTab = props.setTab
  const setUpload = props.setUpload;

  const onDrop = picture => {
    setPictures(picture[0]);
  };

  const clickUpload = async (ev) => {
    ev.preventDefault();
    const formData = new FormData();

    formData.append("file", pic);

    const response = await axios({
        method: 'post',
        url: '/upload',
        data: formData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
    })
    
    console.log(response);
    setTab(1);
    setUpload(response['data']['result']);
  }

  return (
    <div>
      <form action="/upload" method="post" encType="multipart/form-data">
        <ImageUploader
          withPreview={true}
          buttonText={(typeof pic==='undefined' || pic.length===0) ? 'Choose Image' : pic.name + ' chosen, click to change'}
          withIcon={true}
          onChange={onDrop}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
          singleImage={true}
        />
        
        <Button disabled={typeof pic==='undefined' || pic.length===0} onClick={clickUpload} color="secondary" variant="contained" component="span" type="submit">Upload</Button>

      </form>
    </div>
  );
};

export default Uploader;