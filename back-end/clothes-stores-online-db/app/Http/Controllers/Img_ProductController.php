<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Img_Product;
use function PHPUnit\Framework\fileExists;
use Carbon\Carbon;

class Img_ProductController extends Controller
{
    public function index($id = null)
    {
        if ($id == null) {
            return Img_Product::all();
        } else {
            return Img_Product::find($id);
        }
    }

    public function create(Request $request)
    {

        $image = $request->file('Image');
        if ($request->hasFile('Image')) {
            $new_name = rand() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('/uploads/images'), $new_name);

            Img_Product::create([
                'PRO_ID' => $request->PRO_ID,
                'Image' => $new_name
            ]);
            return response()->json($new_name);
        } else {
            return response()->json('image null');
        }

        // $images = $request->file('image');
        // $imageName='';
        // foreach($images as $image){
        //     $new_name = rand() . '.' . $image->getClientOriginalExtension();
        //     $image->move(public_path('/uploads/images'), $new_name);
        //     $imagename=$imageName.$new_name.",";
        // }
        // $imagedb=$imageName;
        // return response()->json($imagedb);
    }

    public function delete(Request $req, $id)
    {
        $Img_Product = Img_Product::where("PRO_ID", $id)->get();

        if (count($Img_Product) > 0) {
            try {
                $Img_Product->each->delete();
                for ($i = 0; $i < count($Img_Product); $i++) {
                    if (fileExists('../public/uploads/images/' . $Img_Product[$i]["Image"])) {
                        unlink('../public/uploads/images/' . $Img_Product[$i]["Image"]);
                    }
                }
                return "SUCCES";
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }

    public function update(Request $request, $id)
    {

        $image_product = Img_product::find($id);

        return $image_product;
        $imageOdd = $image_product['Image'];
        if ($image_product) {
            try {

                $image = $request->file('Image');

                if ($request->hasFile('Image')) {
                    $new_name = rand() . '.' . $image->getClientOriginalExtension();
                    $image->move(public_path('/uploads/images'), $new_name);


                    if (fileExists('../public/uploads/images/' . $imageOdd)) {
                        unlink('../public/uploads/images/' . $imageOdd);
                    }
                    $image_product->PRO_ID = $request->PRO_ID;
                    $image_product->Image = $new_name;
                    $dt = Carbon::now('Asia/Ho_Chi_Minh');
                    $image_product->update_at = $dt->format('Y-m-d H:i:s');


                    $image_product->update();


                    return "SUCCES";
                }
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        }
        return "NOT FOUND";
        //     Img_Product::create([
        //         'PRO_ID' => $id,
        //         'Image' => $new_name
        //     ]);
        //     return response()->json($new_name);
        // } else {
        //     return response()->json('image null');
        // }
    }
}
