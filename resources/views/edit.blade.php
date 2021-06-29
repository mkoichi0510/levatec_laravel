<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Blog</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        
    </head>
    <!-- body内だけを表示しています。 -->
    <body>
        <h1 class="title">編集画面</h1>
        <div class="content">
            <form action="/posts/{{ $post->id }}" method="POST">
                @csrf
                @method('PUT')
                <div class='content__title'>
                    <h2>タイトル</h2>
                    <input type='text' name='post[title]' value="{{ $post->title }}">
                    <p class="title_error" style="color:red">{{$errors->first('post.title')  }}</p>
                </div>
                <div class='content__body'>
                    <h2>本文</h2>
                    <textarea name="post[body]">{{ $post->body }}</textarea>
                    <p class="body_error" style="color:red">{{$errors->first('post.body')  }}</p>
                </div>
                <input type="submit" value="update">
            </form>
            <div class="back">[<a href="/posts/{{ $post->id }}">back</a>]</div>
        </div>
    </body>
</html>
