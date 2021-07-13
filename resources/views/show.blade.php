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
        <h1>Blog Name</h1>  
        <p class='edit'>[<a href="/posts/{{ $post->id }}/edit">edit</a>]</p>
        <form name="deleteData" action="/posts/{{ $post->id }}" id="form_{{ $post->id }}" method="post" style="display:inline">
            @csrf
            @method('DELETE')
            <button name="delete" id="button" type="button">delete</button> 
            <script type="text/javascript" src="{{ asset('/js/checkdelete.js')}}"></script>
        </form>
        <div class='posts'>
                <h2 class='title'>{{ $post->title }}</h2>
                <p class='body'>{{ $post->body }}</p>
                <p class='updated_at'>{{ $post->updated_at }}</p>
        </div>
        <form name="detaile" action="/posts/{{ $post->id }}/detaile" id="form_{{ $post->id }}" method="get" style="display:inline">
            @csrf
            <button type="submit">detaile</button> 
        </form>
        <div class='back'>[<a href='/'>back</a>]</div>
    </body>
</html>
