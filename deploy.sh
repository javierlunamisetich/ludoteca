#!/bin/bash

# Abort on errors
set -e

# Build
echo "Building..."
npm run build

# Navigate into the build output directory
cd dist

# Initialize a new git repo
git init
git checkout -b main
git add -A
git commit -m 'deploy'

# Push to the gh-pages branch of the remote repo
# We assume the user has a remote named 'origin'
# and we want to push to the 'gh-pages' branch
echo "Pushing to gh-pages..."
git push -f git@github.com:javierlunamisetich/ludoteca.git main:gh-pages

cd -
echo "Deployed!"
