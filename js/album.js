window.onload=function(){
    setTimeout(getpre,1000);
    timer=setInterval(getpre,3000);
    var pics=new Array();
    var dots=new Array();
    var banner=document.getElementById('banner');
    for(var i=1;i<=5;i++){
        var lbli=document.createElement('li');
        var lbimg=document.createElement('img');

        lbimg.src="../image/pics0"+i+".jpg";
        lbimg.style.width="750px"
        lbimg.style.height="421px"
        lbli.appendChild(lbimg);

        banner.appendChild(lbli);
        pics.push(lbli);
        pics[pics.length-1].style.left="0px";

        lbimg.onmouseenter=function(){
            clearInterval(timer);
        }
        lbimg.onmouseleave=function(){
            timer=setInterval(getpre,3000);
        }    
        var bottomdot=document.createElement("div");
        bottomdot.style.left=140*(i+1)+"px";
        bottomdot.name=i;
        dots.push(bottomdot);
        banner.appendChild(bottomdot);

        if(i>3){
            lbli.id=i-3;
        }else{
            lbli.id=i+2;
        }
        
    }
/*这段 JavaScript 代码包含了网页加载完成后执行的函数 window.onload，用于初始化轮播组件。

在该函数中，首先使用 setTimeout 函数在页面加载完成后等待 1s，然后调用函数 getpre()。之后，通过使用 setInterval 函数每隔 3s 就调用一次 getpre() 函数，以实现自动轮播的效果。

接下来，定义了两个数组 pics 和 dots，用于分别存储轮播图和轮播点元素。其中，通过调用 document.createElement() 函数创建了一个 li 元素（文档中的列表元素），同时也创建了一个 img 元素（图片元素）。之后，使用 lbimg.src 将图片的链接设置为相应的地址，再设置 lbimg 的宽和高，之后将 lbimg 添加到 lbli 中，最后添加到 banner 元素中。

接下来，将 lbli 添加到 pics 数组中，并将其初始位置设置为 0px。同时，为每个图片设置了鼠标的进入和离开事件，用于暂停和继续轮播。并创建了圆点元素，设置了圆点的样式和位置，并将圆点添加到 banner 中。最后根据图片的数量设置了每个 li 元素的 id 属性，用于后续样式的调整。

综上所述，该段代码通过创建 HTML 元素和事件处理程序，并设置元素样式和位置，实现了页面加载后的初始化工作，包括轮播图、圆点等相关的效果。*/
var len=pics.length-1;
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;
/* 通过计算数组的长度得到 len 的值。之后，将 pics[len-2] 元素的 left 属性设置为 0px，表示将该图片显示在最前面。将 pics[len-2] 元素以及其前面三个元素的 opacity 属性设置为 0，表示隐藏，防止同时出现多个图片。将 pics[len-1] 元素的 zIndex 设置为 100，表示该元素位于上层并显示在最前面。将 pics[len-1] 元素的 left 属性设置为 200px，表示该图片向左偏移，同时将其 transform 属性设置为 scale(1.3)，表示图片尺寸放大。最后，将 pics[len] 元素移出屏幕并将其 opacity 属性设置为 0.5，用于实现视觉效果。*/


function getnext(){
    var give_up=pics[len];
    pics.pop();
    pics.unshift(give_up);
    for(var i=0;i<pics.length;i++){
        pics[i].style.zIndex=i;
        pics[i].style.transform="scale(1)";
    }
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;

    dotmov();
    pics[len-2].onclick=function(){
        getnext();
    }
    pics[len].onclick=function(){
        getpre();
    }
}
/*实现了“下一张”图片的切换功能。首先，将最后一张图片 give_up 移出 pics 数组，然后使用 unshift() 方法将其添加至数组的头部，达到图片轮播的效果。接下来，使用循环遍历所有图片元素，重新设置其 zIndex 和 transform 属性。接下来，调整 pics 数组中最后几个元素的样式，将 pics[len-2] 元素设置为最前面显示，后面三个元素的 opacity 属性设为 0，使用 zIndex 属性调整 pics[len-1] 元素等级，同时将其向右移动，并增大其尺寸，最后将 pics[len] 元素移至屏幕外，并将其降低透明度。最后，调用 dotmov() 函数更新圆点状态。同时设置 pics[len-2] 和 pics[len] 元素的点击事件，当点击时分别调用 getnext() 和 getpre() 函数，用于实现图片前进和后退的功能。*/
function getpre(){
    var give_up=pics[0];
    pics.push(give_up);
    pics.shift();
    for(var i=0;i<pics.length;i++){
        pics[i].style.zIndex=i;
        pics[i].style.transform="scale(1)";
    }
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;
    dotmov();
    pics[len-2].onclick=function(){
        getnext();
    }
    pics[len].onclick=function(){
        getpre();
    }
    
}
/*定义了函数 getpre()，通过将视觉上的第一张图片 give_up 移至图片数组的末尾，实现了图片的轮播效果。然后，使用 shift() 方法将数组的第一个元素移除，接着通过循环遍历的方式，重新对 pics 数组中的所有元素进行样式设置：分别设置元素的 zIndex 和 transform 属性。接下来，调整 pics 数组中最后几个元素的样式，将 pics[len-2] 元素设置为最前面显示，后面三个元素的 opacity 属性设为 0，使用 zIndex 属性调整 pics[len-1] 元素等级，同时将其向右移动，并增大其尺寸，最后将 pics[len] 元素移至屏幕外，并将其降低透明度。最后，调用 dotmov() 函数更新圆点状态。通过设置 pics[len-2] 和 pics[len] 元素的点击事件，当分别点击其时，调用 getnext() 函数或 getpre() 函数，用于实现图片前进或后退的功能。 */

dots[0].style.background="rgb(48, 72, 77)";
function dotmov(){
    for(var i=0;i<dots.length;i++){
        if(dots[i].name==pics[len-1].id){
            dots[i].style.background="rgb(48, 72, 77)";
        }else{
            dots[i].style.background="rgb(123, 168, 175)";
        }
    }
}

}
/* 这段 JavaScript 代码实现了轮播图下面圆点的动态效果。

首先，通过 dots[0] 的方式修改圆点中第一个元素的 background 样式属性，将其设置为选中状态的颜色。

接下来，定义了函数 dotmov()，用于动态修改圆点的选中状态。循环遍历圆点元素，判断当前圆点的 name 属性是否等于最后一张图片元素的 id 属性，如果是，则将该圆点的 background 样式属性设置为选中状态的颜色，否则将其设置为非选中状态的颜色。 */