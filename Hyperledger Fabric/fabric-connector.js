"use strict";

//BASIC NODEJS WAPPER FOR HYPERLEDGER FABRIC RESTFUL API
//https://github.com/IBM-Blockchain/ibm-blockchain-js/
function fabric(config) {
    if(!config.host) {
        throw new Error("no host error!");
    }
    this.host = config.host;
    this.protocol = config.protocol ? config.protocol : 'http';
    this.path_prefix = config.path_prefix ? config.path_prefix : '/';
    this.port = config.port;
    this.version = 1;
    //this.promise = config.promise || Promise;
    function buildURL (path) {
        var requestUrl = this.protocol + '://' +  this.host;
        requestUrl += this.port ? ':' + this.port + '/' : '/';
        requestUrl += path + '/';

        return decodeURIComponent(requestUrl);
    }

    api = {
        // user auth
        user : {
            url: buildURL('/chaincode/'),
            get: function() {
                rest.post({
                    api.url
                });
            },

            post: function() {

            }
        },
        // chaincode
        chaincode = {
            url: buildURL('/chaincode/'),
            /*
                {
                  "jsonrpc": "2.0",
                  "method": "deploy",
                  "params": {
                    "type": 1,
                    "chaincodeID":{
                        "path":"github.com/hyperledger/fabric/examples/chaincode/go/chaincode_example02"
                    },
                    "ctorMsg": {
                        "args":["init", "a", "1000", "b", "2000"]
                    },
                    "secureContext": "lukas"
                  },
                  "id": 1
                }
            */
            deploy: function() {

            },
            /*
                {
                  "jsonrpc": "2.0",
                  "method": "query",
                  "params": {
                      "type": 1,
                      "chaincodeID":{
                          "name":"52b0d803fc395b5e34d8d4a7cd69fb6aa00099b8fabed83504ac1c5d61a425aca5b3ad3bf96643ea4fdaac132c417c37b00f88fa800de7ece387d008a76d3586"
                      },
                      "ctorMsg": {
                         "args":["query", "a"]
                      },
                      "secureContext": "lukas"
                  },
                  "id": 5
                }
            */
            query: function() {

            },
            /*
                {
                  "jsonrpc": "2.0",
                  "method": "invoke",
                  "params": {
                      "type": 1,
                      "chaincodeID":{
                          "name":"52b0d803fc395b5e34d8d4a7cd69fb6aa00099b8fabed83504ac1c5d61a425aca5b3ad3bf96643ea4fdaac132c417c37b00f88fa800de7ece387d008a76d3586"
                      },
                      "ctorMsg": {
                         "args":["invoke", "a", "b", "100"]
                      },
                      "secureContext": "lukas"
                  },
                  "id": 3
                }
            */
            invoke: function() {

            }
        }
    }

    
    return api;
};
