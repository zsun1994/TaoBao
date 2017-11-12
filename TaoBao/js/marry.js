/**
 * Created by Administrator on 2017/10/24.
 */

$(function(){
    $(function(){
        $('.father').hover(function(){
            $(this).children('.son').stop(true,true).slideDown();
        },function(){
            $(this).children('.son').slideUp()
        })
    });//收货地址
    $(function(){
        $('.ct a').click(function(){
            $(this).addClass('bg').siblings().removeClass('bg')
        })
    });//搜索
    $(function(){
        $('.ct input').focus(function(){
            $('.ct .sb').hide()
        }).blur(function(){
            $('.ct .sb').show()
        })
    });
    $(function(){
        $('.shang').click(function(){
            var index = $(this).index();
            var xia_ul = $('.xia_ul');
            $(this).addClass('look').siblings().removeClass('look');
            xia_ul.removeClass('show').addClass('hid').eq(index).addClass('show').removeClass('hid');//所有隐藏，当前显示
            // xia_ul.eq(index).fadeIn().siblings().fadeOut()
        });
    });//二级菜单
    $(function(){
        var index = 1;
        var img = $('.banner img');
        var digital = $('.digital');
        img.eq(0).show().siblings().hide();
        function autoPlay(){
            setInterval(function(){
                img.eq(index).fadeIn().siblings().fadeOut();
                digital.removeClass('bgg').eq(index).addClass('bgg');
                index++;
                if(index==img.length){
                    index=0
                }
            },2000)
        }
        autoPlay();
        $(function(){
            digital.click(function () {
                var i = $(this).index();
                index = i;//定时轮播为下一张
                img.eq(i).fadeIn().siblings().fadeOut();
                digital.removeClass('bgg').eq(i).addClass('bgg');
            })
        })
    });//图片轮播
    /*$(function () {
     var list_img = $('.list_one ul li img');
     list_img.hover(function(){
     $(this).fadeTo('slow',0)
     },function (){
     $(this).fadeTo('slow',1)
     })
     });//图片透明度
     */

    $(function(){
        $('.picc').hover(function(){
            $('.chance_list').show()
        },function(){
        })
    })
    $(function(){
        $('.close').click(function(){
            $('.chance_list').hide()
        })
    });//切换更多市场
    $(function(){
        $('.sb').hover(function(){
            $('.girl_kind').stop(true,true).show(800);
        },function(){
            $('.girl_kind').hide(500);
        })
    });
    $(function(){
        $('.girl_kind li').click(function(){
            $('.so_text').text($(this).text())
        })
    });//搜女装
})();

