# Inclusive-Classroom

## captureImage.py

Captures the images at regular intervals. The first image is processed to automatically detect the edges of the blackboard and save the coordinates of the rectangle for cropping images to get only the relevant part.


## detectObject.py

Detects the professor in each image and draws a bounding box around him and then gets the information of that part of the image from previous images so that the final image that is recieved by the client is an image that contains only the relevant part.

## processImage.py

Processes the first image to automatically detect the edges of the blackboard and then stores the rectangular coordinates of the contour in a text file for further use.