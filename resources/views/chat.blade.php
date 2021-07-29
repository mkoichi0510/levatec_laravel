<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Chat</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
　　　　<script src="https://code.jquery.com/jquery-3.3.1.js"></script>
        
    </head>
    <body>
        <h1>フリーチャット</h1>
        <div class='chats'>
            <table border="1" id="all_show_result">
                <tr>
                    <th>title</th><th>body</th>
                </tr>
            </table>
        </div>
        <button id="button" type="button">データ受信</button>
        <script type="text/javascript" src="{{ asset('/js/chat.js')}}"></script>
       <form action="/posts" method="POST">
           {{ csrf_field()  }}
            <div class="title">
                <h2>Name</h2>
                <input type="text" id="name" name="post[name]" placeholder="山田太郎" value="{{ old('post.name') }}"/>
                <p class="name_error" style="color:red">{{$errors->first('chat.name')  }}</p>
            </div>
            <div class="body">
                <h2>Body</h2>
                <textarea id="text" name="post[body]" placeholder="こんにちは">{{ old('post.body') }}</textarea>
                <p class="body_error" style="color:red">{{$errors->first('chat.text')  }}</p>
            </div>
            <input type="submit" value="送信"/>
        </form>
        <div class="back">[<a href="/">back</a>]</div>
    </body>
</html>
