var elements = $('p');
console.log(elements.length);
// $('._2nj').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
// 	$('._2nj p').each(function() {
// 		console.log($(this).text());
// 		var regex = /(`[^`]*`)/g;
// 		if (regex.test($(this).text())) {
// 			var text = $(this).text();
// 			$(this).html('<p class="code">'+text+'</p>');
// 		}
// 	})}
// );
$('._2nj p').each(function() {
	var regex = /(`[^`]*`)/g;
	if (regex.test($(this).text())) {
		var text = $(this).text();
		console.log('match with '+text);
		text = text.replace(regex, function(t){
			return '<kbd class="code">'+t.substring(1,t.length-1)+'</kbd>'
		});
		console.log(text);
		$(this).html(text);
	}
});

function format(str) {
	console.log(str);
  var regex = /(`[^`]*`)/g;
  var a = str.replace(regex, function(s){return "<b>"+s+"</b>"});
  console.log(a);
  console.log('------------');
}
console.log('working');