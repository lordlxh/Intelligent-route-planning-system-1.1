var canSend = false;
$(function () {
    $('#footer').on('keyup', 'input', function () {
        if ($(this).val().length > 1) {
            $(this).next().css('background', '#114F8E').prop('disabled', true);
            canSend = true;
        } else {
            $(this).next().css('background', '#ddd').prop('disabled', false);
            canSend = false;
        }
    })
    $('#footer .send').click(send)
    $("#footer .my-input").keydown(function (e) {
        if (e.keyCode == 13) {
            return send();
        }
    });
})
// var arr = ['我是小助手', '有什么可以帮你的吗'];
var arr = [];

function test() {
    $(arr).each(function (i) {
        setTimeout(function () {
            reply("/static/images/que/touxiangm.png", arr[i])
        }, sj() * 500)
    })
}

function reply(headSrc, str) {
    var html = "<div class='reply'><div class='msg'><img src=" + headSrc + " /><span class='name'>斜杠青年</span><p><i class='msg_input'></i>" + str + "</p></div></div>";
    return upView(html);
}
function ask(headSrc, str) {
    if(str=="待输入"){upView("");}
    else{var html = "<div class='ask'><div class='msg'><img src=" + headSrc + " />" + "<p><i class='msg_input'></i>" + str + "</p></div></div>";}
    upView(html);
}
function upView(html) {
    let message = $('#message');
    $('#message').append(html);    

}
function send(msg) {
    if (canSend) {
        let input = $("#footer .my-input");
        ask("/static/images/que/touxiang.png", input.val()); 
        input.val("待输入");
        }        
}
function sj() {
    return parseInt(Math.random() * 10)
}

function ansFormat(ans)
{
    ans="<div class=\"reply\">\n" +
                "            <div class=\"msg\">\n" +
                "                <img src=\"/static/images/que/touxiangm.png\" alt=\"\" />\n" +
                "                <span class=\"name\">小助手</span>\n" +
                "                <p>\n" +
                "                    <i class=\"msg_input\"></i>\n" +
                                    ans
                "\n" +
                "                </p>\n" +
                "            </div>\n" +
                "        </div>"
    return ans;
}


function ajaxtest() {
    let message = $("#messageBox").val();
    $.ajax({
        url:"/users/que/",
        dataType:"JSON",
        method:"POST",
        data:{"que":message},
        success:function(data){
            console.log("success");
            console.log(data);
            let mes = $("#message").html();
            mes+=ansFormat(data["data"]);
            $("#message").html(mes);
        },
        error:function (data) {
            console.log("error");
            console.log(data);
            let mes = $("#message").html();
            mes+=ansFormat("对不起，小雪也不知道呢");
            $("#message").html(mes);
        }
    });
}
