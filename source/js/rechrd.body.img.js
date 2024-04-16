document.addEventListener("DOMContentLoaded", function(){
    var buttonElement = document.getElementById("show_img_button"); // 获取按钮元素
    buttonElement.addEventListener("click", function() {
        //console.log('按钮点击');
		document.getElementById("qxk_img").innerHTML = '<img src="/images/rechrd_body_1.jpg" alt="shot" style="width:30em"><br><img src="/images/rechrd_body_2.jpg" alt="shot" style="width:30em">';
        buttonElement.remove(); // 删除按钮
    });
});
