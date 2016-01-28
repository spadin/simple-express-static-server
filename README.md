#Simple Express Static File Server

A very simple static file server. For development use only.

##Installation


### Using as a local module (recommended)

    $ npm install spadin/simple-express-static-server
    $ ./node_modules/.bin/simple-server my/public/dir


### Using the server as a global module

    $ sudo npm install -g spadin/simple-express-static-server
    $ simple-server my/public/dir
    

    
## Contribute

Install dependencies (first time only):

   $ npm install

How to start:

    $ node server

Open [http://localhost:4567](http://localhost:4567)

If you need a different port:

    $ PORT=9999 node server

Open [http://localhost:9999](http://localhost:9999)

If you need a different hostname:

    $ HOSTNAME=192.168.0.1 node server

Open [http://192.168.0.1:4567](http://192.168.0.1:4567)

## Copyright and license

Code and documentation copyright 2013-2016 Sandro Padin. Code released under [the MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).



