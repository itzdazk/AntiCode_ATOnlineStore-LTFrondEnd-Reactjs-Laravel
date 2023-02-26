<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{

    public function login(Request $request)
    {

        $user = User::all();
        $accessToken = Str::random(100);
        for ($i = 0; $i < count($user); $i++) {
            if ($request->Username == $user[$i]["Username"] && $request->Password == $user[$i]["Password"]) {
                return  response()->json(
                    [
                        'errorCode' => 1,
                        'userInfo' => [
                            'id' => $user[$i]["USER_ID"],
                            'Username' => $user[$i]["Username"],
                            'token' => $accessToken,
                        ]
                    ]
                );
            }
        }
        return response()->json(['errorCode' => 0]);
    }


    public function register(Request $req)
    {
        try {
            $user = new User();
            $user->Username = $req->Username;
            $user->Password = $req->Password;
            $user->Email = $req->Email;
            $user->save();

            return  response()->json([
                'errorCode' => 1
            ]);
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function update(Request $req, $id)
    {

        $user = User::find($id);
        if ($user) {
            try {
                $user->Name = $req->Name;
                $user->Address = $req->Address;
                $user->Phone = $req->Phone;
                $dt = Carbon::now('Asia/Ho_Chi_Minh');
                $user->update_at = $dt->format('Y-m-d H:i:s');
                $user->update();

                return  response()->json([
                    "errorCode" => 1,
                ]);
            } catch (\Exception $e) {
                return $e->getMessage();
            }
        } else {
            return 'Not found';
        }
    }

    public function getInfo($id)
    {
        $user =   User::find($id);

        return  response()->json([
            'Name' => $user->Name,
            'Address' => $user->Address,
            'Phone' => $user->Phone,
            'Email' => $user->Email,
        ]);
    }
}
