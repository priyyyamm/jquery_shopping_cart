$(function() {
    $('.box').draggable({scroll:false, revert: "invalid"});
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

