#!/usr/bin/env bash
if [ ! -d ~/.nvm ]; then
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
  source ~/.nvm/nvm.sh
  source ~/.profile
  source ~/.bashrc
  nvm install 5.0
  npm install
  npm run front
fi
npm install
npm run build
