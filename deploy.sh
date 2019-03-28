#!/usr/bin/env bash
cd escolas.testes.buscaativaescolar.org.br
git checkout testing
git pull origin testing
npm install
npm run build
