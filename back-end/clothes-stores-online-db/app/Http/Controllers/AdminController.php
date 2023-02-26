<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function login(Request $request)
    {

        $admin = Admin::all();
        $accessToken = Str::random(100);
        for ($i = 0; $i < count($admin); $i++) {
            if ($request->Username == $admin[$i]["Username"] && $request->Password == $admin[$i]["Password"]) {
                return  response()->json(
                    [
                        'errorCode' => 1,
                        'userInfo' => [
                            'id' => $admin[$i]["A_ID"],
                            'Username' => $admin[$i]["Username"],
                            'token' => $accessToken,
                        ]
                    ]
                );
            }
        }
        return response()->json(['errorCode' => 0]);
    }
}
