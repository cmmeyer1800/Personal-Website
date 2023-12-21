#! /usr/bin/env python3

import os

for file in os.listdir("./photo_stage"):
    if any([file.endswith(ext) for ext in [".jpg", ".jpeg", ".png", ".PNG", ".JPG", ".JPEG"]]):
        os.system(f"cwebp -q 80 ./photo_stage/{file} -o ./public/{file.split('.')[0]}.webp")