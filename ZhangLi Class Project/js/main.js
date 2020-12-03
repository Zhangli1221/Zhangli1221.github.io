$(function() {
    var number=1;
    function fun(){
        number++;
        //循环图片使用的便利
        if(number>4){
            number=1;
        }
        var img=$('#img');
        //修改图片src属性的方法
        img.attr('src', './images/pic'+ number+'.jpg');
    }
    //使用循环定时器实现图片自动切换
    setInterval(fun,3000);
})