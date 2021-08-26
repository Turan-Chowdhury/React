<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\repositories\AuthRepository;
use App\Http\Controllers\API\Validator;

class AuthAPIController extends Controller
{
    public $authRepository;

    public function __construct(AuthRepository $authRepository){
        $this->authRepository = $authRepository;
    }
    
    public function createToken() {
        $user = User::first();
        $accessToken = $user->createToken('authToken')->accessToken;
        return $accessToken;
    }

    public function login(Request $request) {

        $formData = $request->all();

        $validator = \Validator::make($formData, [
            "email" => "required|string",
            "password" => "required|string"
        ], [
            "email.required" => "Please give your Email",
            "password.required" => "Please give your Password"
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        if($this->authRepository->checkIfAuthenticated($request)){

            $user = $this->authRepository->findUserByEmailAddress($request->email);
            $accessToken = $user->createToken('authToken')->accessToken;

            return response()->json([
                'success' => true,
                'message' => "Logged in successfully !!",
                'user' => $user,
                'access_token' => $accessToken
            ]); 

        } else{

            return response()->json([
                'success' => false,
                'message' => "Invalid Email or Password",
                'errors' => null
            ]);
        }
    }

    public function register(Request $request) {

        $formData = $request->all();

        $validator = \Validator::make($formData, [
            "name" => "required|min:3|max:30",
            "email" => "required|email|unique:users",
            "password" => "required|confirmed|min:3"
        ], [
            "name.required" => "Please give your name",
            "email.required" => "Please give your Email",
            "email.unique" => "Your email address is already used, Please Login or Use another !",
            "password.required" => "Please give your Password"
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        $user = $this->authRepository->registerUser($request);

        if(!is_null($user)){

            $user = $this->authRepository->findUserByEmailAddress($request->email);
            $accessToken = $user->createToken('authToken')->accessToken;

            return response()->json([
                'success' => true,
                'message' => "Registered successfully !!",
                'user' => $user,
                'access_token' => $accessToken
            ]);

        } else{

            return response()->json([
                'success' => false,
                'message' => "Invalid Email or Password",
                'errors' => null
            ]);
        }
    }
}
