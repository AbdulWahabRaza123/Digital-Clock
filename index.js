window.setInterval(Time,1000);
function Time()
{
    date=new Date();
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    document.getElementById("time").innerText=htime+":"+mtime+":"+stime;
}