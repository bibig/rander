exports.string = string;
exports.number = number;

function string (_len, dict) {
	return _random(_len, (dict || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'));
}

function number (_len, dict) {
  return _random(_len, (dict || '0123456789'));
}

// dict is a string
function _random (_len, dict) {
	var rs = '';
	var len = _len || 8 ;
	var pos;
	for (var i=0; i< len; i++) {
		pos = Math.floor( Math.random() * dict.length);
		rs += dict.substring(pos, pos + 1);
	}
	return rs;
}