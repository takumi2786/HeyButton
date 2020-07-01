
var count_sum=0;
var count_array=[0,0,0];

function hey_button(member_id){

    // 表示するタグを取得
    disp1=document.getElementById("number_disp1");
    disp2=document.getElementById("number_disp2");
    disp3=document.getElementById("number_disp3");

    //メンバーのカウンタ情報を更新

    // 自分の値を更新
    count_array[member_id-1]+=1;

    // 合計値を計算
    count_sum = array_sum(count_array,3);

    // 表示
    disp_count();
}


function disp_count(){
    // 表示するタグを取得
    disp1=document.getElementById("number_disp1");
    disp2=document.getElementById("number_disp2");
    disp3=document.getElementById("number_disp3");

    disp_all=document.getElementById("number_disp_all");

    disp1.textContent=count_array[0];
    disp2.textContent=count_array[1];
    disp3.textContent=count_array[2];

    disp_all.textContent=count_sum;
}


function array_sum(ar,length){
    var sum=0;
    for (var i = 0; i < length; i++) {
        sum+=ar[i];
    }

    return sum;
}









// // 画面への出力
// // valはメッセージ内容，personは誰が話しているか
// function output(val, person) {
//     const textsrc = ['画像付メッセージです', 'リンク付メッセージです', 'リンクはコチラ', 'とりあえず返信'];
//     const imgsrc = ['img/kmlogo_color.png', 'img/kmlogo_bw.png'];

//     // htmlに記述されている属性を読み込む
//     const field = document.getElementById('field');
//     const ul = document.getElementById('chat-ul');
//     // 表示するために必要な要素を定義する
//     const li = document.createElement('li'); //チャットリスト
//     const div = document.createElement('div'); //メッセージ全体
//     const div_icon = document.createElement('div'); //botのアイコン部
//     const img_icon = document.createElement('img'); //botのアイコンのimgタグ
//     const div_message = document.createElement('div'); //メッセージの中身
//     const div_triangle = document.createElement('div'); //吹き出しの三角形
//     const div_image = document.createElement('img'); //メッセージ内の画像
//     // 要件#8:リンク付きメッセージのリンクの改行タグを生成してメッセージの中身に追加する
//     const br = document.createElement('br');
//     const anchor = document.createElement('a'); //メッセージ内のリンク

    
//     if(person === 'user') { // 自分
//         // classを追加してcssを反映させる
//         div.classList.add('chat-right');
//         // div.appendChild("triangle");
//         div_message.classList.add('message');
//         div_triangle.classList.add('triangle');

//         // 要件#6:吹き出しの三角形を表示させるためにクラスを反映させる
//         // 入力メッセージを表示メッセージに設定する
//         div_message.textContent = val;
//         // 先に右側メッセージ全体のdivを定義する
//         div.appendChild(div_message);
//         div.appendChild(div_triangle);
//         // classを追加して右側に寄せる設定を行う
//         li.classList.add('right');
//         // li.classList.add('triangle');
//         // 右側メッセージを描画する
//         ul.appendChild(li);
//         li.appendChild(div);
//         // 一番下までスクロール
//         field.scroll(0, field.scrollHeight - field.clientHeight);
//     }else if(person === 'bot') { // 相手
//         // 返答を送るまでメッセージの送信を防ぐ
//         chatBtn.disabled = true;
//         setTimeout( ()=> {
//             // classを追加してcssを反映させる
//             div.classList.add('chat-left');
//             div_icon.classList.add('icon');
//             // 要件#6:吹き出しの三角形を表示させるためにクラスを反映させる
//             div_triangle.classList.add('triangle');
//             div_message.classList.add('message');
            
//             // 先に左側メッセージ全体のdivを定義する
//             div.appendChild(div_icon);
//             div_icon.appendChild(img_icon);
//             div.appendChild(div_triangle);

//             // アイコンを設定する
//             img_icon.src = imgsrc[0];
            
//             // 入力メッセージによってメッセージ表示部の内容を変える
//             // 「AMの課題です」という文字列が含まれていたら以下の処理を行う
//             if(val.match('メッセージをどうぞ！')) {
//                 div_message.textContent = val;
//                 div.appendChild(div_message);
//             // 「画像」という文字列が含まれていたら以下の処理を行う
//             }else if(val.match('画像')) {
//                 div_message.textContent = textsrc[0];
//                 div_image.src = imgsrc[1];
//                 div_message.appendChild(div_image);
//                 div.appendChild(div_message);
//                 console.log('attached');
//             // 「リンク」という文字列が含まれていたら以下の処理を行う
//             }else if(val.match('リンク')) {
//                 div_message.textContent = textsrc[1];
//                 // 要件#8:リンク付きメッセージのリンクの改行タグを生成してメッセージの中身に追加する

//                 anchor.href = 'https://www.konicaminolta.com/jp-ja';
//                 anchor.textContent = 'https://www.konicaminolta.com/jp-ja';

//                 // 要件#7:リンク付きメッセージのテキスト内容を加えてメッセージの中身にaタグを追加する
//                 div_message.appendChild(br);
//                 div_message.appendChild(anchor);
//                 div.appendChild(div_message);
//             // 上記の分岐に当てはまらない文字列が含まれていたら以下の処理を行う
//             }else{
//                 div_message.textContent = textsrc[3];
//                 div.appendChild(div_message);
//             }

//             // classを追加して左側に寄せる設定を行う
//             li.classList.add('left');
//             // 右側メッセージを描画する
//             ul.appendChild(li);
//             li.appendChild(div);
//             console.log('added');
//             // 一番下までスクロール
//             field.scroll(0, field.scrollHeight - field.clientHeight);
//             // メッセージの送信を再開出来るようにする
//             chatBtn.disabled = false;
//         // 要件#9:ユーザ側のメッセージを表示してから1秒後にbot側のメッセージを表示する
//         }, 1000); 
//     }
// }

// const chatBtn = document.getElementById('chat-button');
// const inputText = document.getElementById('chat-input');

// // 送信ボタンを押した時の処理
// chatBtn.addEventListener('click', () => {
//     if (!inputText.value) return false;
//     output(inputText.value, 'user');
//     output(inputText.value, 'bot');
//     inputText.value = '';
// });



// function enter(){
//     key=window.event.keyCode;
//     if(key==13){
//         text = document.getElementById("chat-input");
//         if(!text.value)return false;
//         output(text.value, 'user');
//         output(text.value, 'bot');
//         text.value='';
//     }
// }



// // チャットメッセージ入力部分でエンターキーを押されたらボタンが押されたのと同じ動きをする
// // 要件#10:ユーザ側のメッセージを表示してから1秒後にbot側のメッセージを表示する

// // 最初に一言
// output('メッセージをどうぞ！', 'bot');