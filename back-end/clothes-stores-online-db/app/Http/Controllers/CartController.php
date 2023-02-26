<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ProductController extends Controller
{


    public function index($id = null)
    {
        if ($id == null) {
            return Cart::all();
        } else {
            return Cart::find($id);
        }
    }

    public function create(Request $req)
    {
        try {
            $cart = new Cart();
            $cart->Name = $req->Name;
            $cart->Color = $req->Color;
            $cart->Price = $req->Price;
            $cart->DES = $req->DES;
            $cart->CATE_ID = $req->CATE_ID;
            $cart->save();

            return $cart;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    // public function update(Request $req, $id)
    // {
    //     $product = Product::find($id);
    //     if ($product) {
    //         try {
    //             $product->Name = $req->Name;
    //             $product->Color = $req->Color;
    //             $product->Price = $req->Price;
    //             $product->DES = $req->DES;
    //             $product->CATE_ID = $req->CATE_ID;
    //             $dt = Carbon::now('Asia/Ho_Chi_Minh');
    //             $product->update_at = $dt->format('Y-m-d H:i:s');
    //             $product->update();
    //             return $product;
    //         } catch (\Exception $e) {
    //             return $e->getMessage();
    //         }
    //     } else {
    //         return 'Not found';
    //     }
    // }

    // public function delete(Request $req, $id)
    // {
    //     $product = product::find($id);
    //     if ($product) {
    //         try {
    //             $product->delete();
    //             return $product;
    //         } catch (\Exception $e) {
    //             return $e->getMessage();
    //         }
    //     } else {
    //         return 'Not found';
    //     }
    // }
}
