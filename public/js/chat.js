/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/chat.js":
/*!******************************!*\
  !*** ./resources/js/chat.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btn = document.getElementById('button');
btn.addEventListener('click', function () {
  var result = window.confirm('データを所得しますか？');

  if (result) {
    $.ajax({
      type: 'GET',
      // 通信先ファイル名
      url: '/chat/get',
      datatype: "json",
      // 通信が成功した時
      success: function success(data) {
        // 取得したレコードをeachで順次取り出す
        $.each(data, function (key, value) {
          // #all_show_result内にappendで追記していく
          $('#all_show_result').append("<tr><td>" + value.title + "</td><td>" + value.body + "</td></tr>");
        }); //console.log("通信失敗");

        console.log(data);
      },
      // 通信が失敗した時
      error: function error(data) {
        console.log("通信失敗"); //console.log(data);
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
});

/***/ }),

/***/ 2:
/*!************************************!*\
  !*** multi ./resources/js/chat.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ec2-user/environment/blog/resources/js/chat.js */"./resources/js/chat.js");


/***/ })

/******/ });