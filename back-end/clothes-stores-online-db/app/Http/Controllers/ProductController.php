<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Carbon\Carbon;

class ProductController extends Controller
{
    public function findImage($id)
    {
        return Product::find($id)->image;
    }

    public function findName($name)
    {
        return product::where('Name', 'LIKE', '%' . $name . '%')->orWhere('Color', 'LIKE', '%' . $name . '%')->get();
    }

    public function findDetail($id)
    {
        return  response()->json([
            'product' => Product::find($id),
            'image' => Product::find($id)->image,
            'detail' => Product::find($id)->detail
        ]);
    }


    public function getNew()
    {
        return (Product::get()->sortByDESC('PRO_ID')->take(8)
        );
    }

    public function getTrending()
    {
        return (Product::all()->random(9));
    }

    public function index($id = null)
    {
        if ($id == null) {
            return Product::all();
        } else {
            return Product::find($id);
        }
    }

    public function create(Request $req)
    {
        try {
            $product = new Product();
            $product->Name = $req->Name;
            $product->Color = $req->Color;
            $product->Price = $req->Price;
            $product->DES = $req->DES;
            $product->CATE_ID = $req->CATE_ID;
            $product->save();

            return $product;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(Request $req, $id)
    {
        $product = Product::find($id);
        if ($product) {
            try {
                $product->Name = $req->Name;
                $product->Color = $req->Color;
                $product->Price = $req->Price;
                $product->DES = $req->DES;
                $product->CATE_ID = $req->CATE_ID;
                $dt = Carbon::now('Asia/Ho_Chi_Minh');
                $product->update_at = $dt->format('Y-m-d H:i:s');
                $product->update();
                return $product;
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }

    public function delete(Request $req, $id)
    {
        $product = product::find($id);
        if ($product) {
            try {
                $product->delete();
                return $product;
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }
}
