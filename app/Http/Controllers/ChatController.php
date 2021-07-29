<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Chat;
use App\Post;
use App\Http\Requests\PostRequest;

class ChatController extends Controller
{
    //
    public function index(Chat $post)
    {
        return view('chat');//->with(['chats' => $post->get()]);  
    }
    
     public function getBlogData(Post $post)
    {
        //$chats = ['post' => $post];//出品数もほしいため、withCountでitemテーブルのレコード数も取得
        
        return response()->json($post->get());
    }
}
