var $btnShwHide = $('.btn-show-hide');
var $box = $('.box');

$btnShwHide.on('click', function () {

$box.toggleClass('js-btn-show-hide');

});



var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

$btnMove.on('click', function (){
	$diamond.toggleClass('js-btn-move');
});


var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnCollapseExpand.on('click', function (){
	$panel.toggleClass('js-panel');
});

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle')

$btnBounce.on('click', function () {
	$circle.addClass('js-circle-bounce');
});

$circle.on('animationend', function () {
	$circle.removeClass('js-circle-bounce');
});


var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnAppend.on('click', function () {
	$list.addClass('js-list');

});



