<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Carbon\Carbon;

class OrderController extends Controller
{


    public function index($id = null)
    {
        if ($id == null) {
            return Order::all();
        } else {
            return Order::find($id);
        }
    }

    public function create(Request $req)
    {
        try {
            $order = new Order();
            $order->USER_ID = $req->USER_ID;
            $order->Status = $req->Status;
            $order->HTTT = $req->HTTT;
            $order->save();

            return  response()->json([
                "OD_ID" => $order->OD_ID,
                "errorCode" => 1
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(Request $req, $id)
    {
        $order = Order::find($id);
        if ($order) {
            try {
                $order->Status = $req->Status;
                $dt = Carbon::now('Asia/Ho_Chi_Minh');
                $order->update_at = $dt->format('Y-m-d H:i:s');
                $order->update();
                return $order;
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }

    public function delete(Request $req, $id)
    {
        $order = Order::find($id);
        if ($order) {
            try {
                $order->delete();
                return $order;
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }
}
