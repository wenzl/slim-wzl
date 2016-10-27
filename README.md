# Slim 3 Skeleton

一个 `skeleton` 项目，从 `akrabat/slim3-skeleton` fork下来的， 包含 `scaffold` 、 `migrations`、`auth`、`Twig`、 `Flash messages`、 `eloquent ORM and Monolog`.

## 创建你的项目：

    $ composer create-project -n -s dev mrcoco/slim3-eloquent-skeleton my-app

如果速度慢造成创建不了你的项目，请运行下面命令再执行上面命令【切换国内`composer`镜像】

composer config -g repo.packagist composer https://packagist.phpcomposer.com

## 运行:

1. `$ cd my-app` 进入项目目录
2. Change database setting `app\setting.php` 配置数据库详细
3. `$ php cli.php migrate` 还原数据表
4. `$ php -S 0.0.0.0:8888 -t public public/index.php` 运行程序
5. Browse to http://localhost:8888 如果正常访问，那么恭喜你

## 主要目录

* `app`: Application code
* `app/src`: All class files within the `App` namespace
* `app/templates`: Twig template files
* `cache/twig`: Twig's Autocreated cache files
* `log`: Log files
* `public`: Webserver root
* `vendor`: Composer dependencies

## 关键的文件

* `public/index.php`: Entry point to application
* `app/settings.php`: Configuration
* `app/dependencies.php`: Services for Pimple
* `app/middleware.php`: Application middleware
* `app/routes.php`: All application routes are here
* `app/src/Action/HomeAction.php`: Action class for the home page
* `app/templates/home.twig`: Twig template file for the home page

## 好用的客户端工具
* Currently there are 3 supported commands:
* `php cli.php create:action MyActionClassName`
* `php cli.php create:middleware MyMiddlewareClassName`
* `php cli.php create:model MyModelClassName`
* `php cli.php create:scaffold MyModuleName`


## 数据库相关
*  migrate all data
* php cli.php migrate

* Confirmation of status
* php cli.php status

* Creating // migration file
* php cli.php generate [MigrationName]

* //Execution of migration
* php cli.php migration

* // I one Back
* php cli.php rollback

* // Return all
* php cli.php rollback -t 0

* // Go back to the time of completion of the specified MigrationID
* php cli.php rollback -t [MigrationID]

* // Only specified MigrationID the migration / roll back
* php cli.php [up | down] [MigrationID]

### demo的账号密码:

1. `admin` username: `admin@slim.dev` password: `password` 
2. `moderator` username: `moderator@slim.dev` password: `password` 
3. `user` username: `user@slim.dev` password: `password` 