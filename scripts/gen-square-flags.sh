#!/bin/sh

# Create copies of all flags without the border radius attribute
for i in $(find flags/ -type f -name "*.svg") ; do
    sed 's/ style="border-radius:50%"//' "$i" > "square-$i";
done

# Also copy over all symlinks to the square-flags directory
for i in $(find flags/ -type l -name "*.svg") ; do
    cp -a "$i" "square-$i";
done

