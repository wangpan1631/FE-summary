# linux常用命令

- ls -lrt 表示 按修改时间 倒序 列出当前目录下的所有文件的详细信息
- rz 传输压缩文件
- sz 下载文件到本地电脑下载目录
- ll(ls -l的别名)
- zip -r myfilename.zip ./*   将当前目录下的所有文件和文件夹全部压缩成myfilename.zip

linux上使用rz命令 提示command not found -----解决 这个问题是Linux系统缺少工具包，在确保网络正常情况下执行：yum -y install lrzsz 命令，它会直接在线下载安装。

常用的20个Linux命令：https://blog.csdn.net/ljianhui/article/details/11100625/