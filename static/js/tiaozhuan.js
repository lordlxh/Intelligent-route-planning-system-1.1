 function getQueryString(name) {
var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
var r = window.location.search.substr(1).match(reg);
if (r != null) return unescape(r[2]); return null;
}

function nextsce(){
sid=getQueryString("sid");
pid=getQueryString("pid");
sid1=parseInt(sid);
if(sid<20){
    sid1=sid1+1;
    window.location.href="/users/scenic/?sid="+sid1+"&pid="+pid;
}
else{
    alert('已经是最后一页了');
}
}
function persce(){
sid=getQueryString("sid");
pid=getQueryString("pid");
sid1=parseInt(sid);
if(sid!=1){
    sid1=sid1-1;

    window.location.href="/users/scenic/?sid="+sid1+"&pid="+pid;
}
else{
    alert('已经是第一页了');
}
}