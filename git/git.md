#### git的常用命令
* 查看依赖包所有版本号: npm view react-ionicons versions

* 删除远程分支：git push origin --delete [branchname]
* 删除本地分支：git branch -d [branchname]
* 如果分支太多，可以用此命令进行分支模糊查找：git branch | grep 'branchName'
* [Git 分支](https://blog.csdn.net/duxing_langzi/article/details/80295573 "Git 分支")
* git 查看分支创建时间的命令 git reflog show --date=iso 分支名称
* https://blog.csdn.net/sxzlc/article/details/104073702

* 更新依赖包：npm update <name>
* 安装指定版本的依赖包：例如：安装 Express 3.21.2   npm i express@3.21.2

* git 回滚代码 强推  https://blog.csdn.net/hongfei1997/article/details/83509138

* git 查看远程仓库地址命令 git remote -v