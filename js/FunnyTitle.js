<!--浏览器搞笑标题-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    $('[rel="icon"]').attr('href', "https://img1.imgtp.com/2022/07/02/O6Bbw780.jpg");
    document.title = 'ヽ(●-`Д´-)ノ你别走啊！';
    clearTimeout(titleTime);
  }
  else {
    $('[rel="icon"]').attr('href', "https://img1.imgtp.com/2022/07/02/O6Bbw780.jpg");
    document.title = 'ヾ(Ő∀Ő3)ノ终于回来啦！' + OriginTitle;
    titleTime = setTimeout(function () {
      document.title = OriginTitle;
    }, 2000);
  }
});
