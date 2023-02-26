<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Carbon\Carbon;
use function PHPUnit\Framework\fileExists;

class CategoryController extends Controller
{

    public function allProduct($id)
    {
        return Category::find($id)->product;
        // return Category::where('Name', "T-shirts & Polo Shirts")->product->get();
    }

    public function index($id = null)
    {
        if ($id == null) {
            return Category::all();
        } else {
            return Category::find($id);
        }
    }

    public function create(Request $req)
    {
        try {

            // Validator::make($req->all(), [
            //     'Name' => 'required',
            //     'Image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            // ])->validate()
            $image = $req->file('Image');
            if ($req->hasFile('Image')) {
                $new_name = rand() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('/uploads/cateImages'), $new_name);

                Category::create([
                    'Name' => $req->Name,
                    'Image' => $new_name
                ]);
                return response()->json("SUCCES");
            } else {
                return response()->json('FAIL');
            }
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(Request $req, $id)
    {
        $category = Category::find($id);
        if ($category) {
            $image = $req->file('Image');
            if ($req->hasFile('Image')) {
                $new_name = rand() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('/uploads/cateImages'), $new_name);
                $dt = Carbon::now('Asia/Ho_Chi_Minh');
                $category->Name = $req->Name;
                $category->Image = $new_name;
                $category->update_at = $dt->format('Y-m-d H:i:s');
                $category->update();
                if (fileExists('../public/uploads/cateImages/' . $category["Image"])) {
                    unlink('../public/uploads/cateImages/' . $category["Image"]);
                }
                return response()->json("SUCCES");
            } else {
                return response()->json('FAIL');
            }
        } else {
            return 'Not found';
        }
    }

    public function delete(Request $req, $id)
    {
        $Cate = Category::find($id);
        if ($Cate) {

            try {
                $Cate->delete();
                if (fileExists('../public/uploads/cateImages/' . $Cate["Image"])) {
                    unlink('../public/uploads/cateImages/' . $Cate["Image"]);
                }
                return $Cate;
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }
}
