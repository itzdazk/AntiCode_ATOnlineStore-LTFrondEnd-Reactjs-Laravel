<?php

namespace App\Http\Controllers;

use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Carbon\Carbon;

class OrderDetailController extends Controller
{


    public function index($id = null)
    {
        if ($id == null) {
            return OrderDetail::all();
        } else {
            return OrderDetail::find($id);
        }
    }

    public function insert(Request $req)
    {
        try {
            $order = new OrderDetail();
            $order->PDETAIL_ID = $req->PDETAIL_ID;
            $order->OD_ID = $req->OD_ID;
            $order->Quantity = $req->Quantity;
            $order->Price = $req->Price;
            $order->save();

            return $order;

            // foreach ($req as $data) {
            //     $order = new OrderDetail();
            //     $order->OD_ID = $data->OD_ID;
            //     $order->PDETAIL_ID = $data->PDETAIL_ID;

            //     $order->Quantity = $data->Quantity;
            //     $order->Price = $data->Price;
            //     $order->save();
            // }
            return  response()->json([
                "errorCode" => 1
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(Request $req, $id)
    {
        $order = OrderDetail::find($id);
        if ($order) {
            try {
                // $order->Status = $req->Status;
                // $dt = Carbon::now('Asia/Ho_Chi_Minh');
                // $order->update_at = $dt->format('Y-m-d H:i:s');
                // $order->update();
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
        $order = OrderDetail::find($id);
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
