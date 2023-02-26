<?php

namespace App\Http\Controllers;

use App\Models\ProductDetail;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ProductDetailController extends Controller
{
    public function index($id = null)
    {
        if ($id == null) {
            return ProductDetail::all();
        } else {
            return ProductDetail::find($id);
        }
    }

    public function create(Request $req)
    {
        try {
            $producdetail = new ProductDetail();
            $producdetail->PRO_ID = $req->PRO_ID;
            $producdetail->SKU = $req->SKU;
            $producdetail->Size = $req->Size;
            if ($req->Quantity == null)
                $producdetail->Quantity = 0;
            else
                $producdetail->Quantity = $req->Quantity;

            $producdetail->save();

            return $producdetail;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }


    public function update(Request $req, $id)
    {
        $productdetail = ProductDetail::find($id);

        if ($productdetail) {
            try {
                $productdetail->PRO_ID = $req->PRO_ID;
                $productdetail->SKU = $req->SKU;
                $productdetail->Size = $req->Size;
                $productdetail->Quantity = $req->Quantity;
                $dt = Carbon::now('Asia/Ho_Chi_Minh');
                $productdetail->update_at = $dt->format('Y-m-d H:i:s');
                $productdetail->update();
                return $productdetail;
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }

    public function delete(Request $req, $id)
    {
        $detail = ProductDetail::where("PRO_ID", $id)->get();
        if (count($detail) > 0) {
            $detail->each->delete();
            return "SUCCES";
        } else {
            return "NOT FOUND";
        }
        // $ProductDetail = ProductDetail::find($id);
        // if ($ProductDetail) {
        //     try {
        //         $ProductDetail->delete();
        //         return $ProductDetail;
        //     } catch (\Exception $e) {
        //         return $e->getMessage();
        //     }
        // } else {
        //     return 'Not found';
        // }
    }
}
