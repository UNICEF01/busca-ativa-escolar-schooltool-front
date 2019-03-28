#!/usr/bin/env bash

git checkout testing
git pull origin testing
/home/forge/.nvm/versions/node/v8.15.1/bin/npm install
/home/forge/.nvm/versions/node/v8.15.1/bin/npm run build
