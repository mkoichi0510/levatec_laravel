const btn = document.getElementById('button');
btn.addEventListener('click', function() {
    var result = window.confirm('削除すると復元できません。\n本当に削除しますか？');
    if( result ) {
        document.deleteData.submit();
    }
    else{
        //window.location.href = "/posts/{{ $post->id }}/edit";
    }
})