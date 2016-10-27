<?php 

namespace Carlosocarvalho\SimpleInput\Input;

/**
 * Input
 * Request simple method input streaming data
 * by post|get|put|delete
 * @version 1.0.0
 * @package CarlosOcarvalho
 * @category input
 * 
 */

class Input{

   private static $methods = array(
   	'GET',
   	'POST',
   	'REQUEST',
   	'DELETE',
   	'PUT'
   	);

  
  private static $_get_args = array();
  private static $_post_args = array();
  private static $_put_args = array();
  private static $_delete_args = array();
  public function __construct(){}
   
  static function post($key = null){
   	   self::runDataMethod('post'); 
       if(isset(self::$_post_args[$key]) && !is_null($key)){return self::$_post_args[$key];}
       if(is_null($key) && (isset(self::$_post_args) && count(self::$_post_args) > 0)) return  self::$_post_args;
       return FALSE;    

   }
   static function get($key = null ){
     self::runDataMethod('get'); 
       if(isset(self::$_get_args[$key])){return self::$_get_args[$key];}
       if(is_null($key) && (isset(self::$_get_args)) ) return  self::$_get_args;
       return FALSE;    
   } 
  static function put($key = null){
       self::runDataMethod('put'); 
       if(isset(self::$_put_args[$key])){return self::$_put_args[$key];}
       return FALSE;    
   }

 static function delete($key= null){
   	 self::runDataMethod('delete'); 
       if(isset(self::$_delete_args[$key])){return self::$_delete_args[$key];}
       return FALSE; 
   }
  protected static function runDataMethod($key = null){
              $method = $_SERVER['REQUEST_METHOD'];
              parse_str(file_get_contents('php://input'), $vars);
              //simulate metho =n
              if(isset($vars['__method__'])){ $method = $vars['__method__']; unset($vars['__method__']); unset($_POST);}
             if(!in_array(strtoupper($method), self::$methods) && strtoupper($method) !== strtoupper($key)){ return FALSE;} 
               
              switch (strtolower($key)) {
               	case 'put':
               		 self::$_put_args = $vars ;
               		break;
               	case 'delete':
               		 self::$_delete_args = $vars;
               		break;
               	 	case 'post':
               	 		if(!isset($_POST)){
               		    self::$_post_args = $vars;
               		}else{
               			
               		 self::$_post_args = $_POST;
               		}
               		break;
                default:
               	case 'get':
               		 self::$_get_args = $_GET;
               		break;
               } 

    }


}