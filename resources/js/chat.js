const btn = document.getElementById('button');
btn.addEventListener('click', function() {
    var result = window.confirm('データを所得しますか？');
    if( result ) {
        $.ajax({
            type: 'GET',
            // 通信先ファイル名
            url: '/chat/get',
            datatype: "json",
        // 通信が成功した時
        success: function(data) {
            // 取得したレコードをeachで順次取り出す
            $.each(data, function(key, value){
                // #all_show_result内にappendで追記していく
                $('#all_show_result').append("<tr><td>" + value.title + "</td><td>" + value.body + "</td></tr>");
            });

            //console.log("通信失敗");
            console.log(data);
        },

        // 通信が失敗した時
        error: function(data){
            console.log("通信失敗");
            //console.log(data);
        }
        });
         /*$.ajax({
            type: 'GET',
            url: '/chat/', //後述するweb.phpのURLと同じ形にする
            data: {
                'name': userName,
                'text': text, //ここはサーバーに贈りたい情報。今回は検索ファームのバリューを送りたい。
            },
            dataType: 'json', //json形式で受け取る

            beforeSend: function () {
                $('.loading').removeClass('display-none');
            } //通信中の処理をここで記載。今回はぐるぐるさせるためにcssでスタイルを消す。
         }).done(function (data) {
             $('.loading').addClass('display-none'); //通信中のぐるぐるを消す
            let html = '';
            $.each(data, function (index, value) { //dataの中身からvalueを取り出す
　　　　//ここの記述はリファクタ可能
                let id = value.id;
                let name = value.name;
                let avatar = value.avatar;
                let itemsCount = value.items_count;
　　　　// １ユーザー情報のビューテンプレートを作成
                html = `
                            <tr class="user-list">
                                <td class="col-xs-2"><img src="${avatar}" class="rounded-circle user-avatar"></td> //${}で変数展開
                                <td class="col-xs-3">${name}</td>
                                <td class="col-xs-2">${itemsCount}</td>
                                <td class="col-xs-5"><a class="btn btn-info" href="/user/${id}">詳細</a></td>
                            </tr>
                                `
            })
            $('.user-table tbody').append(html); //できあがったテンプレートをビューに追加
　　　// 検索結果がなかったときの処理
            if (data.length === 0) {
                $('.user-index-wrapper').after('<p class="text-center mt-5 search-null">ユーザーが見つかりません</p>');
            }

        }).fail(function () {
　　　//ajax通信がエラーのときの処理
            console.log('どんまい！');
        })
    }
    else{
        //window.location.href = "/posts/{{ $post->id }}/edit";
    }*/
    }
})