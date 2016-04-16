function superescape (strings) {

	var str_unicode;
	var result = "";

	for (var i = 0; i < strings.length; i++) {

		str_unicode = strings.charCodeAt(i);

		prefix = str_unicode < 256 ? "%" : "%u";

		prefix = str_unicode < 16 ? "%0" : prefix;

		result += prefix + str_unicode.toString(16).toUpperCase();

	}

	return result;
}
