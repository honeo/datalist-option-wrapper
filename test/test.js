console.log('datalist-option-wrapper: test');

// jsdom + var
const JSDOM = require('jsdom');
global.document = JSDOM.jsdom('hogehoge');
global.head = document.head;
global.window = document.defaultView;

// dow
const DatalistOptionWrapper = require('../').default;

// Cases
const caseArray = [];

// case0, create
caseArray.push( (arg)=>{
	DatalistOptionWrapper('id-1', ['foo']);
	const datalist = document.querySelector('datalist#id-1');
	const option = datalist.firstChild;
	return datalist.childNodes.length===1 && option.tagName==='OPTION' && option.value==='foo';
});

// case1, add
caseArray.push( (arg)=>{
	DatalistOptionWrapper('id-1', ['foo', 'bar']);
	const datalist = document.querySelector('datalist#id-1');
	return datalist.childNodes.length===2;
});

// case2, remove
caseArray.push( (arg)=>{
	DatalistOptionWrapper('id-1', ['bar']);
	return document.querySelector('datalist#id-1').childNodes.length===1;
});

// case3, もう一個
caseArray.push( (arg)=>{
	DatalistOptionWrapper('id-2', ['hoge']);
	const datalist1 = document.querySelector('datalist#id-1');
	const datalist2 = document.querySelector('datalist#id-2');
	return datalist1.tagName===datalist2.tagName;
});

// case4, clear
caseArray.push( (arg)=>{
	DatalistOptionWrapper('id-1', []);
	const datalist = document.querySelector('datalist#id-1');
	return datalist.childNodes.length===0;
});

caseArray.forEach( (func, index)=>{
	if( func() ){
		console.log(`case-${index}: success`)
	}else{
		throw new Error(`case-${index}: failed`)
	}
});
