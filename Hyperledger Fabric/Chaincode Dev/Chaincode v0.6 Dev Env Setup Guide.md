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

参考此[官方文档](https://golang.org/doc/install)操作安装并注意设置GOPATH

## 2. Fabric 安装 Install

```shell
mkdir -p fabric/src/github.com/hyperledger

git clone http://github.com/hyperledger/fabric.git

cd ~/farbric/src

cp –a ./github.com/hyperledger/fabric/vendor/* ./

cd github.com/hyperledger/fabric

make peer

```

## 3. 快速部署 Quick Guide

依赖 hyperledger/fabric-baseimage:X86_64-0.0.11 镜像



## 5. 参考文档 Related

1. [Fabric开发模式环境搭建](https://g2ex.github.io/2016/11/26/Fabric-Deployment-and-Chaincode-Setup/)
2. [RocksDB安装问题简单介绍](http://www.cnblogs.com/shuren/p/3981744.html)
3. [Ubuntu12.04 gcc-4.6 升级到gcc-4.7的方法](http://highlightz.blog.163.com/blog/static/23801000420141115103727888/)
4. [Makefile编译警告](http://stackoverflow.com/questions/23281050/makefile-warning-warning-file-main-cpp-has-modification-time-2-1e04-s-in-th)



