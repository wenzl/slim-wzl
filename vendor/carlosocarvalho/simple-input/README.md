# simple-input
simple input php for get info (get,post,delete,put)


##Install
Via composer

### Example Use
> <?php
>
>use Carlosocarvalho\SimpleInput\Input\Input;
>

sending data post|get|put|delete

> $post = Input::post('key');

> $post_all =  Input::post();

> $get = Input::get('key');

> $get_all =  Input::get();

#### Important sending form method post with php, use input hidden[name="_method" value="put|delete"]
> $put = Input::put('key');

> $put_all = Input::put();

> $delete = Input::delete('key');

> $delete_all = Input::delete();



