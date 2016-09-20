<?php

namespace App\Listeners;

use App\Events\VendedorEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class VendedorListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  VendedorEvent  $event
     * @return void
     */
    public function handle(VendedorEvent $event)
    {

        $solicitud_id = $event->getRequestId();
        $insert = DB::table('vendedor-notificaciones')
        ->insert([
            'solicitud_id' => $solicitud_id,
            ]);

    }
}
