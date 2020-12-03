# https://medium.com/@ksashok/containerise-your-python-flask-using-docker-and-deploy-it-onto-heroku-a0b48d025e43
FROM opencvcourses/opencv-docker

WORKDIR /app
COPY . .
RUN pip3 install -r requirements.txt

EXPOSE 5000
CMD ["python3", "app.py"]
