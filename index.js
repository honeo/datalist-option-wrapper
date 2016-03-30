/*
	初回ならDOMへIDチェック
		既にidが使われていたらエラーを投げる
	idMapに当該IDがなければdom検索する
*/

// Modules
import hasSameContents from 'has-same-contents';

// var
const
	doc = document,
	head = doc.head,
	body = doc.body;

/*
	id毎のDatalist要素と配列(複製)の格納
	Map {
		id: {
			datalist: DatalistElement,
			values: [..'value']
		}
	}
*/
const map = new Map();

/*
	本体
	引数
		1: IDにする文字列
		2: 使用する配列
*/
function DatalistOptionWrapper(id, array){
	if(typeof id!=='string' || !Array.isArray(array)){
		throw new TypeError('invalid argument');
	}
	// arrayから文字列でない値をカット
	const strArr = array = array.filter( value => typeof value==='string');
	// 未登録のidだったら諸々をセット
	map.has(id) || init(id);
	const {datalist, values} = map.get(id);
	// 前回と今回の配列が違えば撤去→作り直し
	if( !hasSameContents(strArr, values) ){
		Array.from(datalist.childNodes).forEach( (node) => node.remove() );
		datalist.appendChild( createOptionElements(strArr) );
		map.set(id, {
			datalist,
			values: strArr}
		);
	}
}

/*
	新規IDセッティング
		datalist要素を作ってheadに挿入する
		idをkeyにしてdatalistをmapへ登録
*/
function init(id){
	// ID未使用チェック
	if(doc.getElementById('id')){
		throw new Error(`already used: ${id}`);
	}
	const datalist = doc.createElement('datalist');
	datalist.setAttribute('id', id);
	head.appendChild(datalist);
	map.set(id, {
		datalist,
		values: []
	});
}

/*
	引数の配列にそってoption要素を作ってdfに挿入して返す
*/
function createOptionElements(array){
	const df = doc.createDocumentFragment();
	array.forEach( (value)=>{
		const option = doc.createElement('option');
		option.setAttribute('value', value);
		df.appendChild(option);
	});
	return df;
}

export default DatalistOptionWrapper;
