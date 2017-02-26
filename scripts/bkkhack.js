$(function () {
	function allowDrop(ev) {
	    ev.preventDefault();
	};
	function drag(ev) {
		var ev = ev.originalEvent;
		// add data of the item being dragged and the pointer location relative to its position.
	    ev.dataTransfer.setData("drag-event-json", JSON.stringify({
	    	target: { id: ev.target.id },
	    	offsetX: ev.offsetX,
	    	offsetY: ev.offsetY
	    }));
	};
	function drop(ev) {
		var ev = ev.originalEvent;
	    ev.preventDefault();
	    var dragEvent = JSON.parse(ev.dataTransfer.getData("drag-event-json"));
	    var dropEvent = ev;
	    var $item = $("#" + dragEvent.target.id);
	    var $target = $(dropEvent.target);

		// calculate the current position of the item being dropped.
	    $target.append($item.css({ 
	    	left: dropEvent.offsetX - dragEvent.offsetX, 
	    	top: dropEvent.offsetY - dragEvent.offsetY
	    }));
	};
	
// handle drag and drop events.
	$(".card")
		.on("dragstart", drag);
	$(".table")
		.on("dragover", allowDrop)
		.on("drop", drop);
});