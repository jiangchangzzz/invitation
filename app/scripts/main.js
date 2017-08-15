'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let wrapper = document.querySelector('.swiper-wrapper');

  function init() {
    renderSwiper(wrapper);

    let lecturerSwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      hashnav: true,
      hashnavWatchState: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      preloadImages: false,
      lazyLoading: true,
      lazyLoadingInPrevNext: true
    });

    if(!location.hash){
      let cur=document.querySelector('.swiper-slide-active').dataset.hash;
      location.hash='#'+cur;
    }
  }
  init();

  //渲染swiper内容
  function renderSwiper(element) {
    let str = '';
    let search=parseSearch(location.search);
    console.log(search);
    if(search.type){
      switch(search.type){
        case 'lecturer':
          str=templateLecturers();
          break;
        case 'staff':
          str=templateStaffs();
          break;
        case 'vip':
        default:
          str=templateGuests();
          break;
      }
    }
    else{
      str=templateGuests();
    }

    element.innerHTML = str;
  }

  function templateLecturers(){
    let str='';
    lecturers.forEach(function (lecturer) {
      let lecturerTemplate = `
                <div class="swiper-slide" data-hash="${encodeURIComponent(lecturer.name)}">
                    <div class="introduction container">
                        <div class="introduction-head">
                            <img class="swiper-lazy" data-src="/images/${lecturer.img}">
                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                        </div>
                        <h2 class="introduction-title">${lecturer.name} (${lecturer.desc})</h2>
                        <p class="introduction-sub">演讲主题：<strong>${lecturer.title}</strong></p>
                        <p class="introduction-content">${lecturer.content}</p>
                        <p class="introduction-link">大会官网：<a href="http://2017.imweb.io/" target="_blank">http://2017.imweb.io/</a></p>
                    </div>
                </div>
            `;
      str += lecturerTemplate;
    });
    return str;
  } 

  function templateGuests(){
    let str='';
    guests.forEach(function(guest){
      let guestTemplate = `
        <div class="swiper-slide" data-hash="${encodeURIComponent(guest.name)}">
          <div class="introduction container">
              <div class="introduction-head">
                <img class="swiper-lazy" data-src="/images/${guest.img}">
                <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
              <h2 class="introduction-title">${guest.name}</h2>
              <p class="introduction-sub">嘉宾介绍：<strong>${guest.desc}</strong></p>
              <p class="introduction-link">大会官网：<a href="http://2017.imweb.io/" target="_blank">http://2017.imweb.io/</a></p>
            </div>
          </div>
      `;
      str+=guestTemplate;
    });
    return str;
  }

  function templateStaffs(){
    let str='';
    staffs.forEach(function(staff){
      let staffName=staff.name!==staff.en ? `(${staff.name})`:'';
      let staffTemplate=`
        <div class="swiper-slide" data-hash="${encodeURIComponent(staff.name)}">
          <div class="introduction container">
            <div class="introduction-head">
              <img class="swiper-lazy" data-src="/images/${staff.img}">
              <div class="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </div>
            <h2 class="introduction-title">${staff.en} ${staffName}</h2>
            <p class="introduction-sub">成员简介：<strong>${staff.desc}</strong></p>
            <p class="introduction-link">大会官网：<a href="http://2017.imweb.io/" target="_blank">http://2017.imweb.io/</a></p>
          </div>
        </div>
      `;
      str+=staffTemplate;
    });
    return str;
  }

  //格式化查询字符串
  function parseSearch(str){
    let res={};
    if(str.length && str[0]==='?'){
      str=str.slice(1);
      let array=str.split('&');
      array.forEach(function(item){
        let itemArr=item.split('=');
        let name=itemArr.shift();
        let value=itemArr.join('=');
        res[name]=value;
      });
    }
    return res;
  }
});
