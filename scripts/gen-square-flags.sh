#!/bin/sh

# Create copies of all flags with the border radius adjusted to 0%
for i in $(find flags/ -type f -name "*.svg") ; do
    sed "s/border-radius:50%/border-radius:0%/" "$i" > "square-$i";
done

# Also copy over all symlinks to the square-flags directory
for i in $(find flags/ -type l -name "*.svg") ; do
    cp -a "$i" "square-$i";
done

