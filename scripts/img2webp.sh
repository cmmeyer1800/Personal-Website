#! /bin/bash

USGAGE="Usage: img2webp.sh <directory>"

if ! command -v cwebp &> /dev/null
then
    echo "cwebp could not be found, cannot convert images to webp"
    exit 1
fi

if [ -z "$1" ]
then
    echo "No argument supplied, please provide a directory to convert"
    echo $USGAGE
    exit 2
fi

if ! [ -d $1 ]; then
  echo "Directory '$1' does not exist, please provide a valid directory"
  exit 3
fi

for file in $1/*.{jpg,jpeg,png}
do
    cwebp -q 80 $file -o ${file%.*}.webp
done