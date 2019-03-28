#!/bin/bash
export NVM_DIR=~/.nvm
source ~/.nvm/nvm.sh
nvm use 8
npm install
npm run build
