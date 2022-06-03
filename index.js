'use strict';

//{name: タスクの文字列, state: 完了しているかどうかの真偽値（未完了ならfalse）}
const tasks = [];

/** 
 *  TODOを追加する
 *  @param {string} taskName
 */
//タスクを作成する add関数を定義
function add(taskName) {
    tasks.push({ name: taskName, state: false });
}


/** 
 *  TODOの一覧の配列を取得する
 *  @return {array}
 */
//stateが未完了となっているタスク名一覧を配列で返す
function list() {
    return tasks
        /* 
            配列のfilter関数
            与えられた関数に対して、その結果がtrueになる要素だけの配列を作る

            下記の場合、
            tasksの要素を引数taskとしてアロー関数に渡し、!task.state がtrueの要素（＝task.stateがfalseの要素）のみ返す
            ＊アロー関数による省略記法なので、少し分かりづらくなっています
        */
        .filter(task => !task.state)
        
        //filter関数で要素を絞った後、タスク名を要素とした配列を作成する 
        .map(task => task.name);
}


/** 
 *  TODOを完了状態にする
 *  @param {string} taskName
 */
//配列にtask が含まれているかを確認し、存在すればstateをtrueに変更
function done(taskName) {

    //配列のfindIndex関数...渡した関数がtrueとなる要素のインデックスを返す (複数あればインデックスの数字の小さい方を返す)
    //findIndexでは、該当する要素が見つからない場合 -1 が返る
    const indexFound = tasks.findIndex(task => task.name === taskName);
    if (indexFound !== -1){
        //該当したtaskのstateをtrueへ
        tasks[indexFound].state = true;
    }
}


/** 
 *  完了済みタスクの一覧の配列を取得する
 *  @return {array}
 */
//上記で定義した、listメソッドの逆で、stateが完了となっているタスク名一覧を配列で返す
function donelist() {
    return tasks
        .filter(task => task.state)
        .map(task => task.name);
}


/** 
 *  項目を削除する
 *  @param {string} taskName
 */
//指定されたtaskが存在すれば、それを削除する
function del(taskName) {
    const indexFound = tasks.findIndex(task => task.name === taskName);
    if(indexFound !== -1) {

        //配列のsplice関数...第一引数に削除を開始するインデックス、第二引数に削除する要素の個数を指定する
        tasks.splice(indexFound, 1);
    }
}


//作成したメソッドを、モジュールとしてエキスポート
module.exports = {
    add,
    list,
    done,
    donelist,
    del
};