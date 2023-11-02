$('.tit .btn').click(function(ev){
  ev.preventDefault();
// $('.nav').toggle();
//$('.nav').fadeToggle();
$('.nav').slideToggle();
$(this).toggleClass("on");

});


    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,  /* 버튼을 클릭하면 넘어가는 개수 */
        dots:true,
        autoplay:true
    });

        $('.gallery_img').slick({
            arrows:false /* 슬릭 화살표 엾애기 겟잇나우 뷰온깃헙 애로 */
          });/* 슬릭 usage-Initialize your slider 가운데줄만 */

          $('.gallery_btn .play').click(function(){
            $('.gallery_img').slick('slickPlay');
          });/* gallery_img 항상 상수와 같은값 입력 */


          $('.gallery_btn .pause').click(function(){
            $('.gallery_img').slick('slickPause');
          });


          $('.gallery_btn .prev').click(function(){
            $('.gallery_img').slick('slickPrev');
          });

          $('.gallery_btn .next').click(function(){
            $('.gallery_img').slick('slickNext');
          });


 //텝메뉴
 //.next() 는 바로밑 요소(바로아래동생)        
 //.parent() 는 부모요소
 //.siblings() 나를 제외한 형제들
 //.find() 하위요소(내안에 있는 요소들)

 let tab_list=$('.tab_menu');

 tab_list.find('ul ul').hide(); /* ul 안에 ul을 숨겨라 */
 tab_list.find('li.active ul').show();


 $('.tab_menu>ul>li>a').click(function(ev){/* e,event */
    ev.preventDefault(); /* 클릭해도 안튕기게 */ 
    let $this = $(this);//변수를 만들 때 사용할 수 있는 특수문자 $ , _ 
//console.log($this)      
$this.next('ul').show();
$this.parent('li').siblings('li').find('ul').hide();



$this.parent('li').addClass('active');
$this.parent('li').siblings('li').removeClass('active');
});  



//lightGallery
lightGallery(document.getElementById('lightgallery'), {
  plugins: [lgThumbnail],
});




        /* 레이어 팝업 */
        $('.layer').click(function(ev){
          ev.preventDefault();//새로고침 막기 
          $('#layer').show();
          $('#layer').fadeIn();
        })


        $('#layer .close').click(function(ev){
          ev.preventDefault();//새로고침 막기 
          //$('#layer').show();
          $('#layer').fadeOut();
        })



        //window 창 열기
    
        $('.window').click(function(ev){
          ev.preventDefault();
          window.open("popup.html", "popup", "top=500,left=500,width=900,height=590");
      })
      