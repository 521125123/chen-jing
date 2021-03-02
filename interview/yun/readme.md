# 当你在浏览器输入了一个url后， 看到页面发生了什么？
# 当你有了一台服务器, 可以干什么
    docker 一台物理主机 虚拟出来很多的云服务器
    - Ip
    147.71.174.51  ？ 提供什么服务  可以看到网页呢？
    浏览器域名或IP访问， https   www.baidu.com  -> ip
    centos  7.6 ？  web服务器
    Ngnix 是一个高性能的HTTP和反向代理的web服务

    - putty 远程 SSH  链接  华为云的服务器
    root  password
    - web 服务  Ngnix安装
        安装ngnix 的依赖
         yum -y install gcc  gcc-c++ autoconf pcre-devel make automake
         yum -y install wget httpd-tools vim
         yum list
         yum list | grep nginx
         yum install nginx
         nginx -v
         nginx 启动服务器
         ps aux | grep nginx
         nginx -s stop

        vi /etc/nginx/nginx.conf  改东西
        nginx -s reload


