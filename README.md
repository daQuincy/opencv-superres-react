# opencv-superres-react
OpenCV's image super resolution frontend using ReactJS and Flask  

Trying out ReactJS, Flask and Docker for the first time.    
This is a SIMPLE, QUICK and DIRTY frontend for OpenCV's `dnn_superres` submodule. YOU HAVE BEEN WARNED!  

## Demo  
https://superres-react.herokuapp.com/  
![demo](pikachu.gif)  

## How to run locally
### 1. Clone this repo  
`git clone https://github.com/daQuincy/opencv-superres-react.git`  

### 2. Install dependencies & OpenCV  
Make sure you have Python installed. I strongly encourage to work in Python virtual environment 
```
cd backend
pip install requirements.txt
```  

OpenCV installation can be complex (thus I did not include in requirements.txt), I recommend using Docker to run, however, depending on your OS, you can still easily install using pip:  
`pip install opencv-contrib-python`  
Refer to https://www.pyimagesearch.com/opencv-tutorials-resources-guides/#install-opencv-raspbian for detailed installation instructions if you need help.

### 3. Run the code  
`python app.py`  
You can then navigate to `localhost:5000` using your browser and play with it.  

## Run Using Docker
### 1. Clone this repo  
`git clone https://github.com/daQuincy/opencv-superres-react.git`  

### 2. Install dependencies & OpenCV  
Build the Docker image.
```
cd backend
docker build -t <name-of-image>
```  

### 3. Run the container 
` docker run -d -p 5000:5000 <name-of-image>`  
You can then navigate to `localhost:5000` using your browser and play with it.  

## Developing on the code  
Yes this repo is a big mess =D  
But if you are still interested to play with it, make sure you get yourself familiar with it first and have Python and Node installed. Have a look in the `backend`, `client` and `backend/build/static` folders. 
After editing the code, execute `npm run build` in the `client` folder. Move the `build` folder to `backend` then run `python app.py`.

## Some details of the code  
```
backend :  this folder contains the Flask app, app.py and the pre-built ReactJS code (build folder)  
client  :  this folder contains the ReactJS frontend code
```  

## References  
1. https://www.pyimagesearch.com/2020/11/09/opencv-super-resolution-with-deep-learning/  
1. https://blog.miguelgrinberg.com/post/how-to-deploy-a-react--flask-project  
1. https://medium.com/@ksashok/containerise-your-python-flask-using-docker-and-deploy-it-onto-heroku-a0b48d025e43  
1. https://roytuts.com/upload-and-display-image-using-python-flask/
