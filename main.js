//佳佳制作---内蒙古大学生创新创业MOOC学院
//网课通用自动化脚本
var video=document.getElementById("video");
console.warn("佳佳制作---内蒙古大学生创新创业MOOC学院")
console.warn("网课通用自动化脚本")
lesson_name=$("#courseName").text()
var data='%c'+lesson_name
console.log(data,"color:#0a0;font-size:3em")
function getTitle(){
    lesson_title=$("#34108").attr("title")
    var data='%c'+lesson_title
    console.log(data,"color:#0a0;font-size:2em")
}
getTitle()
var t=0;
var i=0;//计数器
setInterval(
    function(){
        video.playbackRate = 7;
        if(!video.ended){
            var answer=$("#doclasswork")
            var t=answer.text();
            if(t!=""){
                i++;
                //console.log(i)
                if(i%10===0){
                    console.log(answer.text())
                }
                video.pause();
            }else{
                video.play();
            }
            //console.warn("佳佳制作---内蒙古大学mooc平台网课自动化脚本运行中 次数：",i)
            var p = $('.black999.pull-right').attr('href');
            var id=parseInt(p.replace(/[^0-9]/ig,""));
            //console.log(id)
        }else{
            var p = $('.black999.pull-right');
            getTitle()
            console.log("跳转下一视频")
            p[0].click();
        }
    }
    ,1000)