#!/bin/bash

# Destroy the dist folder (and everything in it)
rm -rf ./dist

# Run npm install - I should be in the project root directory with the package.json
npm install

# Use webpack to bundle everything in the /src directory
# As this is for educational purposes; do development
npx webpack --mode development


