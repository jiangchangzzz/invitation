# Conf Invitation

## 介绍
conf邀请函h5页面和邀请函邮件页面，包含微信分享功能，使用npm,bower,gulp构建

## 使用方法
安装必要的npm包和bower包
```
npm install 
bower install 
```

运行本地开发服务器，在 http://localhost:9000/ 查看邀请函h5页面，在 http://localhost:9000/email.html 查看邀请函邮件页面
```
gulp serve
```

将邀请函h5页面打包到dist文件夹中
```
gulp
```

将邀请函邮件生成到email文件夹中，以邀请人命名
```
gulp email
```

