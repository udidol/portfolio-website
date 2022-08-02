# dir to copy to    
DESTINATION='./dist/'

# dir to copy from
SOURCE='.' 

# list of dirs to copy
filesAndFoldersArray=(".next" "components" "css" "pages" "public" "next.config.js" "package-lock.json" "package.json" "postcss.config.json" "projects.json" "server.js")

#remove all current contents
if [ -d "$DESTINATION" ]; then
	rm -r $DESTINATION
fi

# for each directory in myArray ...
for d in "${filesAndFoldersArray[@]}"
do
    if [ -f "$d" ]; then # it this is a regular file

        # create base directory
        mkdir -p $DESTINATION/$(dirname "$d")

        # copy the file
        cp "$SOURCE/$d" $DESTINATION/$(dirname "$d")

    elif [ -d "$d" ]; then # it is a directory

        # create directory (including parent) if it doesn't exist
        # - this does nothing if directory exists
        mkdir -p "$DESTINATION/$d"

        # recursive copy
        cp -r "$SOURCE/$d/"* "$DESTINATION/$d/."

    else 

        # write warning to stderr. do nothing with this entry
        echo "WARNING: invalid entry $d." >&2

    fi
done