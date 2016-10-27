<?php
// Routes

/**
 * 主组
 */
$app->group('/home', function(){
    $this->get('/', 'App\Action\HomeAction:dispatch')->setName('homepage');
    $this->get('/resource', 'App\Action\HomeAction:resource')->setName('resource');
    $this->get('/login', 'App\Action\HomeAction:login')->setName('login');
    $this->get('/logout', 'App\Action\HomeAction:logout')->setName('logout');
    $this->get('/register', 'App\Action\HomeAction:register')->setName('register');
    $this->get('/dashboard', 'App\Action\HomeAction:dashboard')->setName('dashboard');
    $this->post('/login', 'App\Action\HomeAction:loginPost')->setName('login.post');
    //$app->post('/login','App\Action\HomeAction:testJson')->setName('login.post');
    $this->post('/register', 'App\Action\HomeAction:registerPost')->setName('register.post');
});

/**
 * 管理组
 */
$app->group('/admin',function(){

});


$route = App\Model\Route::all();
foreach ($route as $rt) {
    $app->get('/' . $rt->route, $rt->address)->setName($rt->route);
}