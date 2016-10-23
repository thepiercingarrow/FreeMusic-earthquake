#!/bin/bash
COMMAND() {
    if [ ! -f icons/icon$1.png ]; then
	convert icon.png -scale $1x$1\! icons/icon$1.png
    fi
}
mkdir -p icons/
COMMAND 180
COMMAND 60
COMMAND 120
COMMAND 76
COMMAND 152
COMMAND 40
COMMAND 80
COMMAND 57
COMMAND 114
COMMAND 72
COMMAND 144
COMMAND 29
COMMAND 58
COMMAND 50
COMMAND 100
