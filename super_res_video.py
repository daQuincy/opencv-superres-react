# USAGE
# python super_res_video.py --model models/ESPCN_x4.pb

# import the necessary packages
from imutils.video import VideoStream
import argparse
import imutils
import time
import cv2
import os

# construct the argument parser and parse the arguments
ap = argparse.ArgumentParser()
ap.add_argument("-m", "--model", required=True,
	help="path to super resolution model")
args = vars(ap.parse_args())

# extract the model name and model scale from the file path
modelName = args["model"].split(os.path.sep)[-1].split("_")[0].lower()
modelScale = args["model"].split("_x")[-1]
modelScale = int(modelScale[:modelScale.find(".")])

# initialize OpenCV's super resolution DNN object, load the super
# resolution model from disk, and set the model name and scale
print("[INFO] loading super resolution model: {}".format(
	args["model"]))
print("[INFO] model name: {}".format(modelName))
print("[INFO] model scale: {}".format(modelScale))
sr = cv2.dnn_superres.DnnSuperResImpl_create()
sr.readModel(args["model"])
sr.setModel(modelName, modelScale)

# initialize the video stream and allow the camera sensor to warm up
print("[INFO] starting video stream...")
vs = VideoStream(src=0).start()
time.sleep(2.0)

# loop over the frames from the video stream
while True:
	# grab the frame from the threaded video stream and resize it
	# to have a maximum width of 300 pixels
	frame = vs.read()
	frame = imutils.resize(frame, width=300)

	# upscale the frame using the super resolution model and then
	# bicubic interpolation (so we can visually compare the two)
	upscaled = sr.upsample(frame)
	bicubic = cv2.resize(frame,
		(upscaled.shape[1], upscaled.shape[0]),
		interpolation=cv2.INTER_CUBIC)

	# show the original frame, bicubic interpolation frame, and super
	# resolution frame
	cv2.imshow("Original", frame)
	cv2.imshow("Bicubic", bicubic)
	cv2.imshow("Super Resolution", upscaled)
	key = cv2.waitKey(1) & 0xFF

	# if the `q` key was pressed, break from the loop
	if key == ord("q"):
		break

# do a bit of cleanup
cv2.destroyAllWindows()
vs.stop()
