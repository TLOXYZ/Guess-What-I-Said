---
---
var params = function () {
	var vars = [], hash;
	var hashes = window.location.href.slice(window.location.href.indexOf('#') + 1).split('&');
	for(var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
return vars;
}()

guessParams = params.guess;
isGuessParams = false;
if( typeof( guessParams )=="string" ) {
	$("#guessInput").attr("placeholder",transGuess);
	$(".guessHashText").text(guessParams);
	$(".guessHash").show();
	isGuessParams = true;
	salt = guessParams.slice(0,textLength);
}

if(typeof(crypto.webkitSubtle) == "object"){
	crypto_subtle = crypto.webkitSubtle;
} else {
	if(typeof(crypto.subtle) == "object"){
		crypto_subtle = crypto.subtle;
	} else {
		window.location.href='{{ site.baseurl }}/upgrade-browser'+slugend+'.html';
	}
}

function tlo_digest(){
	return 'error';
}

function sha256(str) {
	// We transform the string into an arraybuffer.
	var buffer = new TextEncoder("utf-8").encode(str);
	return crypto_subtle.digest(culcType, buffer).then(function(digest){
		return hex(digest);
	});
}

function hex(buffer) {
	var hexCodes = [];
	var view = new DataView(buffer);
	for (var i = 0; i < view.byteLength; i += 4) {
		// Using getUint32 reduces the number of iterations needed (we process 4 bytes each time)
		var value = view.getUint32(i);
		// toString(16) will give the hex representation of the number without padding
		var stringValue = value.toString(16);
		// We use concatenation and slice for padding
		var padding = '00000000';
		var paddedValue = (padding + stringValue).slice(-padding.length)
		hexCodes.push(paddedValue);
	}

	// Join all the hex strings into one
	return hexCodes.join("");
}

function string10to62(number) {
	var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ'.split(''),
	radix = chars.length,
	qutient = +number,
	arr = [];
	do {
		mod = qutient % radix;
		qutient = (qutient - mod) / radix;
		arr.unshift(chars[mod]);
	} while (qutient);
	return arr.join('');
}

function calcHash(content){
	i++;
	digest = content;
	if(i<=repeatTime){
		sha256(digest+salt).then(function(digest) {
			digest = calcHash(digest);
			$("#calcProgress").attr("value",i/repeatTime);
		});
	} else {
		i=0;
		doneCalcHash();
	}
}

function initCalcHash(){
	i=0;
	$(".notice").hide();
	$("#right").hide();
	$("#wrong").hide();
	if(isGuessParams){
		$("#result").text(transCheck);
	} else {
		salt = generateKey().slice(-textLength);
		$("#result").text(transCalc);
	}
	$("#calcProgress").attr("value",0);
	$("#calcProgress").show();
}

function doneCalcHash(){
	$("#calcProgress").hide();
	i=0;
	value = salt + digest.slice(-textLength);
	if(isGuessParams){
		if(value == guessParams){
			$("#right").show();
		} else {
			$("#wrong").show();
		}
		$(".guessedHash").show();
	} else {
		$(".notice").show();
		window.location.href="#guess="+value;
	}
	$("#result").text(value);
}

function generateKey(){
	var array = new Uint32Array(8);
	crypto.getRandomValues(array);
	var hexCodes = [];
	for (var i = 0; i < array.length; i++) {
		var padding = '00000000';
		var paddedValue = (padding + (array[i]).toString(16)).slice(-padding.length)
		hexCodes.push(paddedValue);
	}
	return hexCodes.join("");
}

function doOnchange() {
	initCalcHash();
	calcHash(compressText($("#guessInput").val()));
};

function compressText(text){
	return (text.toLowerCase()).replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\。|\，|\！|\《|\》|\“|\”|\［|\］|\｛|\｝|\－|\＋|\…|\：|\；|\％|\¥|\＊|\（|\）|\＃|\～|\／|\、|\｜|\＼|\「|\」|\『|\』|\“|\/|\?]/g,"");
}

var ua = window.navigator.userAgent.toLowerCase();
if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	$("#donate").attr("href","http://mp.weixin.qq.com/s?__biz=MzIxNzEzNTAwMQ==&mid=502847013&idx=1&sn=5c02ecf40e005a001a8ddeb0a9f2b85f");
}