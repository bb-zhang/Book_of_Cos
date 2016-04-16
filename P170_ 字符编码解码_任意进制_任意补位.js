//使用JS将字符转换成多种进制，为转换后字符添加前缀，后缀，补位等。

RawData = new Object();

RawData.encode = function (str, prefix,suffix,base,filler,digits) {
	prefix = prefix || "";
	suffix = suffix || "";
	digits = digits || 0;
	filler = filler || 0;

	var result = "";

	for (var i = 0; i < str.length; i++) {
		temp = str.charCodeAt(i).toString(base);
		filler_length = digits - temp.length + 1;
		if ( filler_length > 1) {
			result += prefix + new Array(filler_length).join(0) + temp + suffix;

		}
	}

	return result;
}

RawData.decode = function (str, base, seperator, replacement) {

	if (replacement) {

		var re = new RegExp(replacement,'g');
		str = str.replace(re,'');
	}

	var splitstr = str.split(seperator);
	var result = "";

	for (var i = 0; i < splitstr.length; i++) {
		if (splitstr[i]) {
			result += String.fromCharCode(parseInt(splitstr[i], base));
		}
	}

	return result;

}
