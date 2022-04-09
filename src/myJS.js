function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("必须填写姓名");
        return false;
    }
}
function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("不是有效的 e-mail 地址");
        return false;
    }
}
function countDown(time) {
    var nowTime = +new Date();
    var inputTime = +new Date(time);
    var times = (inputTime - nowTime) / 1000;
    var d = parseInt(times / 60 / 60 / 24);
    var h = parseInt(times / 60 / 60 % 24);
    var m = parseInt(times / 60 % 60);
    var s = parseInt(times % 60);
    return d + '天' + h + '时' + m + '分' + s + '秒'
}
console.log(countDown('2022-4-9 18:00:00'));


