'use strict';

document.addEventListener('DOMContentLoaded', function () {
  let wrapper = document.querySelector('.swiper-wrapper');

  function init() {
    //let currentGuest=getCurrentGuest(guests);
    renderSwiper(wrapper, lecturers, guests);

    let lecturerSwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      hashnav: true,
      hashnavWatchState: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev'
    });
  }
  init();

  function renderSwiper(element, lecturers, guests) {
    let str = '';

    lecturers.forEach(function (lecturer) {
      let lecturerTemplate = `
                <div class="swiper-slide" data-hash="${encodeURIComponent(lecturer.name)}">
                    <div class="introduction container">
                        <div class="introduction-head">
                            <img id="img" src="/images/${lecturer.img}" alt="${lecturer.name}">
                        </div>
                        <h2 class="introduction-title" id="name">${lecturer.name} (${lecturer.desc})</h2>
                        <p class="introduction-sub">演讲主题：<strong id="title">${lecturer.title}</strong></p>
                        <p class="introduction-content" id="content">${lecturer.content}</p>
                        <p class="introduction-link">报名官网：<a href="http://2017.imweb.io/" target="_blank">http://2017.imweb.io/</a></p>
                    </div>
                </div>
            `;
      str += lecturerTemplate;
    });

    guests.forEach(function(guest){
      let guestTemplate = `
        <div class="swiper-slide" data-hash="${encodeURIComponent(guest.name)}">
          <div class="introduction container">
              <div class="introduction-head">
                <img id="img" src="/images/${guest.img}" alt="${guest.name}">
              </div>
              <h2 class="introduction-title" id="name">${guest.name}</h2>
              <p class="introduction-sub">嘉宾介绍：<strong id="title">${guest.desc}</strong></p>
              <p class="introduction-link">报名官网：<a href="http://2017.imweb.io/" target="_blank">http://2017.imweb.io/</a></p>
            </div>
          </div>
      `;
      str+=guestTemplate;
    });

    element.innerHTML = str;
  }

  //获取当前嘉宾信息
  // function getCurrentGuest(guests){
  //   let search=parseSearch(location.search);
  //   let currentGuest=null;
  //   if(search.guest){
  //     let guestName=decodeURIComponent(search.guest);
  //     guests.every(function(guest){
  //       if(guest.name===guestName){
  //         currentGuest=guest;
  //         return false;
  //       }
  //       else{
  //         return true;
  //       }
  //     })
  //   }
  //   return currentGuest;
  // }

  //格式化查询字符串
  // function parseSearch(str){
  //   let res={};
  //   if(str.length && str[0]==='?'){
  //     str=str.slice(1);
  //     let array=str.split('&');
  //     array.forEach(function(item){
  //       let itemArr=item.split('=');
  //       let name=itemArr.shift();
  //       let value=itemArr.join('=');
  //       res[name]=value;
  //     });
  //   }
  //   return res;
  // }
});
