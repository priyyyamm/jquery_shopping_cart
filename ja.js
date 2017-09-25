$(function() {
    $('.box').draggable({scroll:true, revert: "invalid"});
    $('#drop').droppable({
    	accept: '.box',
    	drop: function() {
    		$(this).text('You Got It!!');
    	}
    });
    $('#checkout').click(function() {
    	location.reload(true);
    });
});

