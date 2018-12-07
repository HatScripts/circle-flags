import shutil
from pathlib import Path
from subprocess import run

# Compress all SVG files in a directory, recursively entering subdirectories.
# This solution is necessary because SVGO lacks support for a '--recursive' option
# (https://github.com/svg/svgo/pull/712), and other workarounds are platform-dependant.

svgo = shutil.which("svgo")  # https://stackoverflow.com/a/32799942/2203482

def compress(path):
    # Calling "svgo -f <dir>" is much faster than calling "svgo <x.svg>" for each SVG
    run([svgo, "-f", str(path), "--config=svgo.yml"])
    for path in path.iterdir():
        if path.is_dir():
            compress(path)

compress(Path("flags"))
