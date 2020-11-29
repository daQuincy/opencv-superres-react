import os
import cv2
import time
import glob
from flask import Flask, flash, request, redirect, url_for, make_response, jsonify
from werkzeug.utils import secure_filename

app = Flask(__name__)

# https://www.reddit.com/r/reactjs/comments/axreng/reactjs_axios_and_flask_image_upload_stuck/

class FileName:
    def __init__(self):
        self.filename = None

    def get(self):
        return self.filename

    def set(self, filename):
        self.filename = filename

fn = FileName()
sr = cv2.dnn_superres.DnnSuperResImpl_create()
sr.readModel("models/LapSRN_x8.pb")
sr.setModel("lapsrn", 8)

@app.route("/upload", methods=["POST"])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        #filename = time.strftime("%Y%m%d-%H%M%S") + "." + f.filename.split(".")[-1]
        filename = "./static/" + f.filename
        f.save(filename)

        fn.set(filename)

        return build_actual_response(jsonify({"result": "Uploaded"}))

@app.route("/filename")
def get_file_name():
    return {"filename": fn.get()}

@app.route("/clear", methods=["POST"])
def clear():
    items = glob.glob("static/*")
    for i in items:
        if "__EmPtY__.jpg" not in i:
            os.remove(i)

    return "Cleared!"

# @app.route('/display/<filename>')
# def display_image(filename):
	
# 	return redirect(url_for('static', filename=filename), code=301)

@app.route("/upscale", methods=["POST"])
def upscale_image():
    image_file = fn.get()
    img = cv2.imread(image_file)
    upscaled = sr.upsample(img)
    filename = "./static/"+image_file.split("/")[-1].split(".")[0]+"_up.png"

    cv2.imwrite(filename, upscaled)

    return build_actual_response(jsonify({"result": filename}))

def build_preflight_response():
    response = make_response()
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', "*")
    response.headers.add('Access-Control-Allow-Methods', "*")
    return response

def build_actual_response(response):
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

# if __name__ == "__main__":
#     app.run(debug=True, host="0.0.0.0")
