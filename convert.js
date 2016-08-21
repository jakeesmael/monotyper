var target = document.getElementById('webMessengerRecentMessages');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    convert();
  });    
});

var config = { attributes: true, childList: true, characterData: true };

observer.observe(target, config);

function convert(){
	observer.disconnect();
	console.log($('p').length);
	$('p').each(function() {
		var inline = /(`[^`]*`)/g; // inline code separated by `
		//var block = /(```[^`{3}]*```)/g // code block
		if (inline.test($(this).text())) {
			var text = $(this).text();
			text = text.replace(inline, function(t){
				return '<kbd class="code">'+t.substring(1,t.length-1)+'</kbd>'
			});
			$(this).html(text);
		}
	});
	console.log('did it');
	observer.observe(target, config);
}

// setInterval(function(){convert()}, 2000);
convert();
console.log('working');