<?php

namespace App\Http\Middleware;

use Closure;


class isLogged
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

      if (!isset($_SESSION['email'])) {
      return redirect('login');
    }

    return $next($request);

    }

}
