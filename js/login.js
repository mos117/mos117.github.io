var back=document.getElementById('back');
window.onmousemove = function(event){
    var x=-event.clientX/10;
    var y=-event.clientY/15;
    back.style.backgroundPositionX = x+"px";
    back.style.backgroundPositionY = y+"px";
}
//这段代码实现了背景图片的位置跟随鼠标移动而移动，其中backgroundPositionX属性和backgroundPositionY属性设置了背景图片的位置。

var zh=document.getElementById('zh');
var mm=document.getElementById('mm');
function login(){
    if(zh.value==""||mm.value==""){
        alert("账号或密码不能为空");
        return false;
    }
    else if(zh.value!="123"||mm.value!="123456"){    
        alert("账号或密码错误(可以选择游客登录)");
        return false;
    }
}
//这段代码实现了对表单信息的校验，包括账号和密码不能为空，以及判断输入的账号密码是否正确，如果不正确则弹出提示框。

var con=document.getElementById('con')
function loadoff(){
    con.style.display="none";
}
function loadon(){
    con.style.display="flex";
}
window.onload=function(){
    loadon();
    setTimeout(loadoff,3000);
}
//这段代码实现了页面在加载时显示一个加载动画，并在一定时间后自动消失。其中，con元素是表示加载动画的元素，loadon()函数设置该元素的display属性为flex，使它显示在页面上；loadoff()函数则是在指定的时间（这里是3秒）后，将该元素的display属性设置为none，即隐藏它。window.onload事件会在页面加载完毕后执行，首先调用loadon()函数显示加载动画，然后通过setTimeout()函数调度在3秒后执行loadoff()函数，隐藏加载动画。
