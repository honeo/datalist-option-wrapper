# datalist-option-wrapper
[honeo/datalist-option-wrapper](https://github.com/honeo/datalist-option-wrapper)
[datalist-option-wrapper](https://www.npmjs.com/package/datalist-option-wrapper)

## なにこれ
渡したIDと配列に応じてdatalist・option要素を操作する。

## 使い方
```sh
$ npm i -S datalist-option-wrapper
```
```js
import DatalistOptionWrapper from 'datalist-option-wrapper';
```
### 作成
```js
DatalistOptionWrapper('id-1', ['hoge', 'fuga']);
```
```html
<head>
	...
	<datalist id="id-1">
		<option value="hoge">
		<option value="fuga">
	</datalist>
</head>
```
### 変更
```js
DatalistOptionWrapper('id-1', ['hoge', 'fuga', 'piyo']);
```
```html
<head>
	...
	<datalist id="id-1">
		<option value="hoge">
		<option value="fuga">
		<option value="piyo">
	</datalist>
</head>
```
### 追加
```js
DatalistOptionWrapper('id-2', ['foo', 'bar']);
```
```html
<head>
	...
	<datalist id="id-1">
		<option value="hoge">
		<option value="fuga">
		<option value="piyo">
	</datalist>
	<datalist id="id-2">
		<option value="foo">
		<option value="bar">
	</datalist>
</head>
```
