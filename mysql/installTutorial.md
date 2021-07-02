# 阿里云Linux服务器安装mysql步骤

# 参考的文章：
- https://blog.csdn.net/weixin_43123562/article/details/91042118
- https://blog.csdn.net/wrs120/article/details/77509070
- https://blog.csdn.net/tomatocc/article/details/83548322
- https://www.freesion.com/article/8574815091/

# 大致步骤：
下载mysql安装包 ---> 安装mysql ---> 安装服务 ---> 启动Mysql服务 ---> 设置数据库密码

1. 下载mysql源安装包：wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
2. 安装mysql源：rpm -ivh mysql-community-release-el7-5.noarch.rpm
3. 安装mysql: yum install mysql-community-server(出现complete表示数据库已经安装完成)
4. 启动mysql服务： systemctl start mysqld
5. 查看mysql启动状态：systemctl status mysqld
6. 进入Mysql, 第一次登陆没有密码  mysql -u root  回车即可
7. 更新mysql root用户密码，
   1. use mysql
   2. update user set password=password('123456') where user='root';
   3. flush privileges;
   4. exit;