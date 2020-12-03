$(function () {
    var additem = $('.option').children('button').eq(0)
    var calculate = $('.option').children('button').eq(1)
    var creditflag = false
    var gradeflag = false
    // 点击删除一个courses项
    // 委托事件解决新插入节点无法实现点击事件
    $('#courses').on('click','button',function(e) {
        if($('#courses').children('.item').length === 2){
            alert('No less than 2 courses')
            return
        }
        $(e.target).parent().remove()
    })
    // 点击添加一个courses项
    additem.on('click',function() {
        var p = $(`<p class="item">
                    <span>courses:</span>
                    <label>credit hours</label>
                    <input type="number" name="credit" placeholder="Credit is greater than 0">
                    <label>letter grade</label>
                    <input type="text" name="grade" placeholder="A-F should be inputed">
                    <button>delete</button>
                </p>`)
        $('#courses').append(p)
        item = $('#courses .item')
    })
    checkCredit()
    checkGrade()
    calculate.on('click',function() {
        var sum = 0,result=0;
        var grade = []
        var credit = []
        var str = ''
        var flag = false
        if( creditflag && gradeflag){
            $('#courses .item').children('input[name=grade]').each(function() {
                var char =$(this).val();
                if(char === 'A'){
                    grade.push(4.0)
                }else if(char === 'B'){
                    grade.push(3.0)
                }else if(char === 'C'){
                    grade.push(2.0)
                }else if(char === 'D'){
                    grade.push(1.0)
                }else if(char === 'F'){
                    grade.push(0.0)
                }else{
                    alert('Wrong course information input!')
                    $('#gpa').val('')
                    console.log($('#gpa').val());
                    flag = false
                    return
                }
                flag = true
            })
            if (flag) { 
                $('#courses .item').children('input[name=credit]').each(function() {
                    var num =parseFloat($(this).val());
                    sum += num;
                    credit.push(num)
                })
                for(var i=0;i<grade.length;i++){
                    result += grade[i]*credit[i]
                }
                $('#gpa').val((result/sum).toFixed(2))
            }
        } else {
            $('#gpa').val('')
            console.log($('#gpa').val());
            alert('Wrong course information input!')
        }
        
    })
    
    function checkCredit(){
        console.log($('#courses .item input[name=credit]'));
        $('#courses').on('input blur','.item input[name=credit]',function(e) {
            var vals = $(e.target).val()
            if(vals === '' || 0-parseFloat(vals) > 0 ) {
                creditflag = false
                return
            }
            creditflag = true
        })
    }
    function checkGrade(){
        console.log($('#courses .item input[name=grade]'));
        $('#courses .item').on("input blur", "input[name=grade]",function(e) {
            var reg = /^[A-F]$/
            var vals = $(e.target).val()
            if(vals === '' ) {
                gradeflag = false
                return
            }
            if(reg.test(vals)) {
                gradeflag = true
            }else{
                gradeflag = false
            }
        })
    }
})