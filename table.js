(function($){
    var data = {
        activeCell:null
    };
    $.fn.table = function(){
        var wrapper = this.wrap('<div id="table-editable"></div>').parent();
        wrapper.append('<input type="text" style="display:none;position:absolute">');
        var input = wrapper.find('input');
        wrapper.on('click', 'td', function(event){
            var cell = event.target;
            if(data.activeCell){//在移动input之前更新cell的值为input的值
                var inputValue = input.val();
                data.activeCell.innerHTML = inputValue;
            }
            data.activeCell = cell;
            var position = cell.getBoundingClientRect();
            var left = cell.offsetLeft;
            var top = cell.offsetTop;
            var value = cell.innerHTML;
            if(value){//将值填写到input中
                
                input.val(value);
            }
            input.css({
                display:'inline-block',
                top:top+'px',
                left:left+'px',
                width:position.width+'px',
                height:position.height+'px'
            })[0].focus();
        });
    };
})(jQuery);