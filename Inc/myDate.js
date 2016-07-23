function myDate(){
    var currentDate=new Date();
    var yy=currentDate.getFullYear();
    var MM=currentDate.getMonth()+1;
    var dd=currentDate.getDate();
    var H=currentDate.getHours();
    var m=currentDate.getMinutes();
    var s=currentDate.getSeconds();

    if(H<10){
        H="0"+H;
    }
    if(m<10){
        m="0"+m;
    }
    if(s<10){
        s="0"+s;
    }

    var result=yy+"年 "+MM+"月 "+dd+"日 "+H+":"+m+":"+s;
    return result;
}