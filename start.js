#!/usr/bin/env node

if(!process.argv[2]) {
  console.log('Please, specify a folder to serve')
  process.exit();
}

require('./server');
