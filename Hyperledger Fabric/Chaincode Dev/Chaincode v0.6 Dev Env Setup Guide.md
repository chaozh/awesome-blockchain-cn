## 1. 基础软件安装 Prerequisites

**Git**

参考此[官方文档](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)操作安装

**Docker**

执行命令即可`curl –sSL [https://get.daocloud.io/docker](https://get.daocloud.io/docker) | sh reboot`

**RocksDB**

推荐安装v4.1或v4.6.1版本，在rocksdb目录下执行：

```shell
make install-shared
ldconfig
```

**Golang**

参考此[官方文档](https://golang.org/doc/install)操作安装并注意设置GOROOT(/usr/local/go)和GOPATH
可以使用`sudo ln -s /usr/local/go/bin/go /usr/bin/go`建立软链接

## 2. Fabric 安装 Install

依赖 hyperledger/fabric-baseimage:X86_64-0.0.11 镜像

```shell
mkdir -p fabric/src/github.com/hyperledger

git clone http://github.com/hyperledger/fabric.git

cd ~/farbric/src

cp –a ./github.com/hyperledger/fabric/vendor/* ./

cd github.com/hyperledger/fabric

make memebersrvc

make peer
```

## 3. 快速启动 Quick Setup

执行`membersrvc`命令启动CA节点，会使用默认配置文件membersrvc.yaml

开发模式启动执行`peer node start --peer-chaincodedev`

不需要改动core.yaml文件并重新编译，可以执行`CORE_SECURITY_ENABLED=true CORE_SECURITY_PRIVACY=true peer node start --peer-chaincodedev`启动带安全隐私功能的开发模式

## 4. 运行Chaincode Running 

### 本地编译发布（开发推荐）：

在chaincode目录下运行go build

执行`CORE_CHAINCODE_ID_NAME=mycc CORE_PEER_ADDRESS=0.0.0.0:7051 ./chaincode_example`

本方法运行在dev模式下，意味着chaincode不会启动单独的docker容器而直接跑在peer容器内

### 通过Cli发布：

首先获得授权

`peer network login <username>`

发布代码

`peer chaincode deploy -n mycc -c '{Args": ["init", "a","100", "b", "200"]}'`

` CORE_SECURITY_ENABLED=true CORE_SECURITY_PRIVACY=true peer chaincode deploy -u  jim -n mycc -c '{"Args": ["init", "a","100", "b", "200"]}'`

调用代码

`peer chaincode invoke -l golang -n mycc -c '{Args": ["invoke", "a", "b", "10"]}'`

### 通过Restful API发布

首先获得授权

```json
POST localhost:7050/registrar

{
  "enrollId": "jim",
  "enrollSecret": "6avZQLwcUe9b"
}
```

发布代码

```json
POST <host:port>/chaincode

{
  "jsonrpc": "2.0",
  "method": "deploy",
  "params": {
    "type": 1,
    "chaincodeID":{
        "name": "mycc"
    },
    "ctorMsg": {
        "args":["init", "a", "100", "b", "200"]
    },
    "secureContext": "jim"
  },
  "id": 1
}
```

调用代码

```json
POST <host:port>/chaincode

{
  "jsonrpc": "2.0",
  "method": "invoke",
  "params": {
      "type": 1,
      "chaincodeID":{
          "name":"mycc"
      },
      "ctorMsg": {
         "args":["invoke", "a", "b", "10"]
      },
      "secureContext": "jim"
  },
  "id": 3
}
```

**注意**：可以在membersrvc.yaml 文件下`eca.users`章节找到可以被CA认可的用户名及密码

## 5. 参考文档 Related

1. [Fabric开发模式环境搭建](https://g2ex.github.io/2016/11/26/Fabric-Deployment-and-Chaincode-Setup/)
2. [RocksDB安装问题简单介绍](http://www.cnblogs.com/shuren/p/3981744.html)
3. [Ubuntu12.04 gcc-4.6 升级到gcc-4.7的方法](http://highlightz.blog.163.com/blog/static/23801000420141115103727888/)
4. [Makefile编译警告](http://stackoverflow.com/questions/23281050/makefile-warning-warning-file-main-cpp-has-modification-time-2-1e04-s-in-th)
5. [Chaincode开发环境配置](https://github.com/hyperledger/fabric/blob/v0.6/docs/Setup/Chaincode-setup.md)



