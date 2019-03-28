#!/usr/bin/env bash
export NVM_DIR="/home/krishna/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
/home/forge/.nvm/versions/node/v8.15.1/bin/npm install
/home/forge/.nvm/versions/node/v8.15.1/bin/npm run build
