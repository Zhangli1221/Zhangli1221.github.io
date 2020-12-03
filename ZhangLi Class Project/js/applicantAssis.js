$(function () {
    console.log($('form')) 
    // 定义表单各项验证的变量
    var nameflag = false
    var idflag = false
    var gpaflag = false
    var sudaflag = false
    var comflag = false
    // 获取表单的对象
    var fullname = $('#fullname')
    var Id=$('#Id')
    var gpa=$('#gpa')
    var suda=$('#suda')
    var com=$('#com')
    
    fullname.blur(function() {
        checkFullName()
    })
    Id.blur(function() {
        checkId()
    })
    gpa.blur(function() {
        checkGPA()
    })
    suda.blur(function() {
        checkData()
    })
    com.blur(function() {
        checkComment()
    })
    
    // 验证fullname
    function checkFullName() {
        console.log(fullname.val())
        var vals = fullname.val()
        // 设置正则表达式
        var reg = /^[a-zA-Z]{6,10}$/
        fullname.next().removeClass()
        if(vals === '') {
            fullname.next().html('*FullName can not be empty').addClass('error')
            nameflag = false
            return
        }
        if (reg.test(vals)) {
            fullname.next().html('*Correct！').addClass('success')
            nameflag = true
        } else {
            fullname.next().html('*The length of English is 6-10 characters!').addClass('error')
            nameflag = false
        }
    }
    // 验证id
    function checkId() {
        // 设置正则表达式
        var reg = /^\d{10,17}$/
        var vals = Id.val()
        Id.next().removeClass()
        if(vals === '') {
            Id.next().html('*ID can not be empty').addClass('error')
            idflag = false
            return
        }
        if (reg.test(vals)) {
            Id.next().html('*Correct！').addClass('success')
            idflag = true
        } else {
            Id.next().html('*The length  is 10-17 characters').addClass('error')
            idflag = false
        }
    }
    // 验证GPA
    function checkGPA() {
        // 验证是否为空
        var vals = gpa.val()
        gpa.next().removeClass()
        if(vals === '') {
            gpa.next().html('*GPA can not be empty!').addClass('error')
            gpaflag = false
            return
        }
        
        if (4-parseFloat(vals)>=0 && 0-parseFloat(vals)< 0) {
            console.log(0<=parseFloat(vals)<=4);
            gpa.next().html('*Correct!').addClass('success')
            gpaflag = true
        } else {
            gpa.next().html('*The GPA ranges from 0 to 4!').addClass('error')
            gpaflag = false
        }
        
        
    }
    // 验证data
    function checkData() {
        
        // 验证是否为空
        var vals = suda.val()
        suda.next().removeClass()
        console.log(vals === '')
        if(vals === '') {
            suda.next().html('*Date can not be empty').addClass('error')
            sudaflag = false
            return
        }
        suda.next().html('*Correct！').addClass('success')
        sudaflag = true

    }
    // 验证comment
    function checkComment() {
        // 验证是否为空
        var vals = com.val()
        com.next().removeClass()
        if(vals === '') {
            com.next().html('*Date can not be empty').addClass('error')
            comflag = false
            return
        }
        com.next().html('*Correct！').addClass('success')
        comflag = true
    }

    // 所有输入框验证通过再提交注册
    $('#appliform').submit(function(){
        if(nameflag && idflag && gpaflag && sudaflag && comflag){
            alert('Submitted successfully!')
        }
        else{
            alert("Submit failed,Please complete the form!")
            return false
        }
    })
})