#!/usr/bin/env bash

directory=$1

# Check if directory exists
if [ ! -d "$directory" ]; then
  echo "Directory $directory does not exist"
  exit 1
fi

# Check if directory is empty
if [ -z "$(ls -A "$directory")" ]; then
  echo "Directory $directory is empty"
  exit 1
fi

# Print out no. of files in directory having jpg, jpeg or png extension
echo "No. of files in $directory having jpg, jpeg or png extension: $(ls -1 "$directory"/*.{jpg,jpeg,png} 2>/dev/null | wc -l)"

for file in "$directory"/*.{jpg,jpeg,png}; do
  # Check if the corresponding webp file exists
  if [ -f "${file%.*}.webp" ]; then
    echo "File ${file%.*}.webp already exists"
    continue
  fi

  filename=$(basename "$file")
  filename="${filename%.*}"
  cwebp -q 80 "$file" -o "$directory/$filename.webp"
done