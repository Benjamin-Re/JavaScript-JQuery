var x = prompt("enter #cols")
var y = prompt("enter #rows")

function create(x){
		var i = 1;
		while (i <= x){
			i = i + 1;
			$("tr").last().append("<td><div class='item'></div></td>")
		} 		
};
		
function line(y){
	var z = 1;
	var s = "<tr style='height: '>"
	while (z <= y) {
		z = z + 1;
		$("#table").append(s)
		create(x)
		$("#table").append("</tr>")
	}
}

line(y)


var hue = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';




$("#table").on("mouseenter", ".item", function() {
	$(this).css("background-color", hue);
	
});

$("#table").on("click", ".item", function() {
	$(this).css("background-color", "white");
});

$("#erase").on("click", function(){
	$(this).first().parent().find("tr").remove();

	line(y)
});

