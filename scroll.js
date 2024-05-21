// //scroll
// let lastScrollY = window.scrollY;
// const header = document.querySelector('.header');
// var sidebarScroll=document.querySelector('.sidebar')
// var sidebarItemsScroll=document.querySelectorAll('.sidebar-item')
// var sidebarMenuItemsScroll=document.querySelectorAll('.sidebar-menu-item')
// //Đặt biến lá cờ để kiểm tra khi cuộn lên có phải do click vào sidebar menu hay không nếu phải ẩn header đi
// var flag=false

// sidebarMenuItemsScroll.forEach((item)=>{
//   item.addEventListener('click',()=>{
//     header.classList.add('hidden');
//     flag=true
//     sidebarMenuItemsScroll.forEach((e)=>{
//       e.classList.remove('active-color')
//     })
//     item.classList.add('active-color')
//     sidebarScroll.classList.add('active')
//   })
// })
// sidebarItemsScroll.forEach((item)=>{
//   item.addEventListener('click',()=>{
//     sidebarMenuItemsScroll.forEach((e)=>{
//       e.classList.remove('active-color')
//     })
//     header.classList.add('hidden');
//     sidebarScroll.classList.add('active')
//     if(item.id!='category-all')
//       flag=true
//     else
//       flag=false
//   })
// })
// window.addEventListener('scroll', () => {
//     if (window.scrollY > lastScrollY) {
//         // Cuộn xuống
//         header.classList.add('hidden');
//         sidebarScroll.classList.add('active')
//         flag=false
//     } else {
//         // Cuộn lên
//         if(!flag)
//           {
//             sidebarScroll.classList.remove('active')
//             header.classList.remove('hidden');
//           }
        
//     }
//     lastScrollY = window.scrollY;
// });