<?php

namespace App\Http\Middleware;

use Closure;
use DB;

class API
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
      session_start();

      $api_token = DB::table('users')
      ->where('email', $_SESSION['email'])
      ->where('api_token', 1)
      ->first();

      if (!$api_token) {
        return redirect('login');
      }

        return $next($request);
    }
}
