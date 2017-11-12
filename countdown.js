/**
 * Created by Administrator on 2017/11/12.
 */
    $(function(){
        var starttime = new Date("2017/11/20");
        setInterval(function () {
            var nowtime = new Date();
            var time = starttime - nowtime;//时间相减得到的是毫秒差
            var day = parseInt(time / 1000 / 60 / 60 / 24);
            var hour = parseInt(time / 1000 / 60 / 60 % 24);
            var minute = parseInt(time / 1000 / 60 % 60);
            var seconds = parseInt(time / 1000 % 60);
            //$('.timespan').html(day + "天" + hour + "小时" + minute + "分钟" + seconds + "秒");
            $('.countdown li:first-child a').text(hour)
            $('.countdown li:nth-child(2) a').text(minute)
            $('.countdown li:last-child a').text(seconds)
        }, 1000);
    })
