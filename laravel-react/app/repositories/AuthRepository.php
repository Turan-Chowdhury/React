<?php

namespace App\repositories;

use Illuminate\Http\Request;

use App\interfaces\AuthInterface;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthRepository implements AuthInterface
{
    public function checkIfAuthenticated(Request $request){
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){
            return true;
        }
        return false;
    }

    public function registerUser(Request $request){
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->save();
        return $user;
    }

    public function findUserByEmailAddress($email){
        $user = User::where('email', $email)->first();
        return $user;
    }
}