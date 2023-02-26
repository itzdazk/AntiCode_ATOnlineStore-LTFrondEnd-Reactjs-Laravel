<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\Img_ProductController;
use App\Http\Controllers\ProductDetailController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderDetailController;
/*
|--------------------------------------------------------------------------
| API Routes
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


Route::get('category/{id?}', [CategoryController::class, 'index']);
Route::get('cateProduct/{id}', [CategoryController::class, 'allProduct']);
Route::post('category', [CategoryController::class, 'create']);
Route::post('category/{id}', [CategoryController::class, 'update']);
Route::delete('category/{id}', [CategoryController::class, 'delete']);


Route::get('findproduct/{name}', [ProductController::class, 'findName']);
Route::get('gettrendingproduct', [ProductController::class, 'getTrending']);
Route::get('getnewproduct', [ProductController::class, 'getNew']);
Route::get('product/{id?}', [ProductController::class, 'index']);
Route::get('productImage/{id}', [ProductController::class, 'findImage']);
Route::get('productDetail/{id}', [ProductController::class, 'findDetail']);
Route::post('product', [ProductController::class, 'create']);
Route::put('product/{id}', [ProductController::class, 'update']);
Route::delete('product/{id}', [ProductController::class, 'delete']);


Route::get('image/{id?}', [Img_ProductController::class, 'index']);
Route::post('image', [Img_ProductController::class, 'create']);
Route::post('image/{id}', [Img_ProductController::class, 'update']);
Route::delete('image/{id}', [Img_ProductController::class, 'delete']);



Route::get('productdetail/{id?}', [ProductDetailController::class, 'index']);
Route::post('productdetail', [ProductDetailController::class, 'create']);
Route::put('productdetail/{id}', [ProductDetailController::class, 'update']);
Route::delete('productdetail/{id}', [ProductDetailController::class, 'delete']);


Route::post('login', [AdminController::class, 'login']);


// Route::post('/clogin', [CustomerController::class, 'login']);
// Route::post('/cregister', [CustomerController::class, 'register']);

Route::post('cregister', [UserController::class, 'register']);
Route::post('clogin', [UserController::class, 'login']);
Route::post('cupdate/{id}', [UserController::class, 'update']);
Route::get('getinfo/{id}', [UserController::class, 'getInfo']);
Route::get('checkinfo', [UserController::class, 'getInfo']);


Route::get('order/{id?}', [OrderController::class, 'index']);
Route::post('order', [OrderController::class, 'create']);

Route::get('orderdetail/{id?}', [OrderDetailController::class, 'index']);
Route::post('orderdetail', [OrderDetailController::class, 'insert']);
