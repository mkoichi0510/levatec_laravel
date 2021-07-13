<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Blog</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        
    </head>
    <body>
 　　　　　<h1>詳細</h1>
        <h2 class='detaile'>出身地は{{$address->address}}です。</h2>
        <div class='back'>[<a href='/posts/{{ $address->post_id }}'>back</a>]</div>
    </body>
</html>