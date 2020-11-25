$(function(){

    let layer = layui.layer;

  $.ajax({
        url:"/my/userinfo",
        success:function(res){
            // console.log(res);

            if( res.status !== 0){
                return layer.msg("获取用户信息失败");
            }
            let name = res.data.nickname || res.data.username;
            let first = name[0].toUpperCase();
            $("#welcome").text( "欢迎" + name);

            if( res.data.user_pic){
                $(".layui-nav-img").show().sttr( "src" , res.data.user_pic );
                $(".text-avatar").hide();
            }else{
                $(".layui-nav-img").hide();
                $(".text-avatar").text(first).show();
            }
        },
    });

    $("#logouBtn").click(function(){
        layer.confirm('确认退出登录', {icon: 3, title:'提示'}, function(index){
            localStorage.removeItem("token");

            location.href = "login.html";
            
            layer.close(index);
          });
    })


})