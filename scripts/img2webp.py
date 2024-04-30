#! /usr/bin/env python3

from typing import Annotated

import os
import typer

FILE_EXTS = [".jpg", ".jpeg", ".png", ".PNG", ".JPG", ".JPEG"]


class Colors:
    """ANSI color codes"""

    BLACK = "\033[0;30m"
    RED = "\033[0;31m"
    GREEN = "\033[0;32m"
    BROWN = "\033[0;33m"
    BLUE = "\033[0;34m"
    PURPLE = "\033[0;35m"
    CYAN = "\033[0;36m"
    LIGHT_GRAY = "\033[0;37m"
    DARK_GRAY = "\033[1;30m"
    LIGHT_RED = "\033[1;31m"
    LIGHT_GREEN = "\033[1;32m"
    YELLOW = "\033[1;33m"
    LIGHT_BLUE = "\033[1;34m"
    LIGHT_PURPLE = "\033[1;35m"
    LIGHT_CYAN = "\033[1;36m"
    LIGHT_WHITE = "\033[1;37m"
    BOLD = "\033[1m"
    FAINT = "\033[2m"
    ITALIC = "\033[3m"
    UNDERLINE = "\033[4m"
    BLINK = "\033[5m"
    NEGATIVE = "\033[7m"
    CROSSED = "\033[9m"
    END = "\033[0m"


def main(
    force: Annotated[
        bool,
        typer.Option(
            "--force",
            "-f",
            help="Override image if already exists in public/img",
        ),
    ] = False,
):
    """Main script execution for image conversion"""
    for file in os.listdir("./photo_stage"):
        if any([file.endswith(ext) for ext in FILE_EXTS]):
            webp_img = f"./public/img/{file.split('.')[0]}.webp"
            if os.path.exists(webp_img) and not force:
                print(
                    Colors.YELLOW
                    + "[WARN] "
                    + Colors.END
                    + webp_img
                    + " Exists, Skipping..."
                )
                continue

            ret_code = os.system(
                f"cwebp -q 80 ./photo_stage/{file} -o ./public/img/{file.split('.')[0]}.webp"
            )
            if ret_code != 0:
                print(
                    Colors.RED
                    + "[ERROR] "
                    + Colors.END
                    + f"Failed to convert {file} to webp"
                )
                continue


if __name__ == "__main__":
    typer.run(main)
