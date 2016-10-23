#!/bin/bash
COMMAND() {
    if [ ! -f splashscreens/splashscreen$1.png ]; then
	convert splashscreen.png -scale $1\! splashscreens/splashscreen$1.png
    fi
}
mkdir -p splashscreens/
COMMAND 320x480
COMMAND 640x960
COMMAND 768x1024
COMMAND 1536x2048
COMMAND 640x1136
COMMAND 750x1334
COMMAND 1242x2208
