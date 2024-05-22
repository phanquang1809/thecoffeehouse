
// Lặp qua từng phần tử và đặt nội dung văn bản của nó thành rỗng
var elements = document.querySelectorAll('.product-page');
elements.forEach(function (element) {
  element.style.display = 'none'
});
hienthi()
addThumbCarousel()
let productData = JSON.parse(localStorage.getItem("proc")) || [];
var productParentId = productData.parentId.replace('related-', '')
var itemIdCounter = 1;
appendRelatedProductItems(productParentId, dataStorage[productParentId + 'Data'])
function hienthi() {
  let productData = JSON.parse(localStorage.getItem("proc")) || [];
  var procItem = document.querySelector('.product-item-info')
  var procTitle = document.querySelector('.product-item-title')
  var procPrice = document.querySelector('.product-item-price')
  var procCatrgory = document.querySelector('.breadcrumb-category')
  var breadcrumbTitle = document.querySelector('.breadcrumb-title')
  var procDesc = document.querySelector('.product-detail-description')
  if (procTitle && procPrice) {
    if (productData) {
      procItem.setAttribute('parent-id', productData.parentId)
      procTitle.textContent = productData.info;
      procPrice.textContent = productData.price;
      procCatrgory.textContent = productData.catTitle;
      procCatrgory.href = productData.catLink;
      breadcrumbTitle.textContent = productData.info;
      procDesc.textContent = productData.desc
      if (/CloudTea|Chai|Nóng/.test(procTitle.textContent)) {
        var option = document.querySelector('.option-size')
        if (option) {
          option.style.display = 'none'
        }
      }
      var topping = document.querySelectorAll('.product-topping-item')
      if (/Cà Phê|Cold Brew|CloudFee/.test(procCatrgory.textContent)) {
        topping.forEach((e) => {
          if (/topp4|topp5/.test(e.parentElement.getAttribute('id'))) {
            e.parentElement.style.display = 'none'
          }
        })
      }
      else if (/Trà Trái Cây|Trà sữa Macchiato|Hi-Tea/.test(procCatrgory.textContent)) {
        topping.forEach((e) => {
          if (/topp1|topp3/.test(e.parentElement.getAttribute('id'))) {
            e.parentElement.style.display = 'none'
          }
        })
      }
      else if (/Trà Xanh/.test(procCatrgory.textContent)) {
        topping.forEach((e) => {
          if (/topp3|topp4|topp5/.test(e.parentElement.getAttribute('id'))) {
            e.parentElement.style.display = 'none'
          }
        })
      }
      else if (/Bánh|tại nhà/.test(procCatrgory.textContent)) {
        var option = document.querySelector('.option-size')
        var topping = document.querySelector('.option-topping')
        if (option && topping) {
          option.style.display = 'none'
          if (/Chai/.test(procTitle.textContent))
            topping.style.display = 'block'
          topping.style.display = 'none'
        }
      }
      else if (/Đá xay/.test(procCatrgory.textContent)) {
        var optionTopping = document.querySelector('.option-topping')
        if (optionTopping) {
          if (/Smoothie/.test(procTitle.textContent)) {
            topping.forEach((e) => {
              if (/topp3|topp1/.test(e.parentElement.getAttribute('id'))) {
                e.parentElement.style.display = 'none'
              }
            })
          }
          else {
            optionTopping.style.display = 'none'
          }
        }

      }
      else {
        topping.forEach((e) => {
          if (/topp1|topp2|topp3|topp4|topp5/.test(e.parentElement.getAttribute('id'))) {
            e.parentElement.style.display = 'block'
          }
        })
      }
    }
  }
}
//lấy sản phẩm liên quan trong cùng danh mục
function relatedProduct(imgSrc, name, price, description) {
  var itemId = 'proc' + itemIdCounter++;
  var item = document.createElement('div');
  item.classList.add('col-xxl-2', 'col-xl-2', 'col-lg-2', 'col-md-3','col-sm-4','col-4');
  item.innerHTML = `
        <div id="${itemId}" class="item">
            <div class="item-img"><a href="./product.html"><img loading="lazy" class="img-src" src="${imgSrc}"></a></div>
            <div class="item-info">
                <a href="./product.html">${name}</a>
                <div class="item-price">${price}</div>
                <div class="description">${description}</div>
            </div>
        </div>
    `;
  return item;
}
function appendRelatedProductItems(containerId, data) {
  var currentProc = document.querySelector('.product-item-title')
  var container = document.getElementById('related-' + containerId);
  var related=document.getElementById('related')
  if (container && currentProc) {
    related.style.display="block"
    currentProc = currentProc.textContent
    container.style.display = 'flex'
    var filteredData = data.filter(function (product) {
      return product.name !== currentProc;
    });
    if(filteredData.length>0)
      {
        var shuffledData = filteredData.sort(() => Math.random()-0.5);
        var selectedItems = shuffledData.slice(0, 6);
        selectedItems.forEach(function (product) {
          var item = relatedProduct(product.imgSrc[0], product.name, product.price, product.description);
          container.appendChild(item);
        });
      }
   else
   {
    related.style.display="none"
   }
  }
}

function addThumbCarousel() {
  let imgList = JSON.parse(localStorage.getItem("imgList")) || [];
  var thumbCarousel = document.getElementById('thumb-carousel')
  var itemImg = document.querySelector('.carousel-inner')
  if (thumbCarousel && itemImg) {
    imgList.forEach((img, index) => {
      var item = document.createElement('div')
      item.classList.add('carousel-item')
      item.innerHTML = ` <img src="${img}" class="d-block w-100" alt="...">`
      itemImg.appendChild(item)
      var thumb = document.createElement('div')
      thumb.classList.add('thumb')
      thumb.setAttribute('data-bs-target', '#carouselExampleIndicators');
      thumb.setAttribute('data-bs-slide-to', index.toString());
      thumb.setAttribute('aria-label','Slide ' + index.toString())
      thumb.innerHTML = `<img src="${img}" alt="">`
      thumbCarousel.appendChild(thumb);
      if (index == 0) {
        item.classList.add('active');
        thumb.classList.add('active');
      }
    })
  }
}
var thumbItems = document.querySelectorAll('.thumb')
if (thumbItems) {
  thumbItems.forEach((item) => {
    item.addEventListener('click', () => {
      thumbItems.forEach((e) => {
        e.classList.remove('active')
      })
      item.classList.add('active')
    })
  })
}
var items = document.querySelectorAll('.item')
items.forEach((item) => {
  item.addEventListener('click', () => {
    const productName = item.querySelector('.item-info a').textContent
    imgList = handleProductClick(productName).imgSrc
    localStorage.setItem("imgList", JSON.stringify(imgList))
    saveProcduct(item.id)
  })
})
//rating
// var star=document.querySelectorAll('.star-rating')
// star.forEach((starItem,index)=>{
//   starItem.addEventListener('click',()=>{
//     star.forEach((e,starIndex)=>
//       {
//         e.classList.remove('active')
//         if(starIndex<=index)
//           {
//             e.classList.add('active')
//           }
//       })
//   })
//   starItem.addEventListener('mouseenter',()=>{
//     star.forEach((e,starIndex)=>
//     {
//       if(starIndex<=index)
//         {
//           e.classList.add('active')
//         }
//     })
// })
// starItem.addEventListener('mouseleave',()=>{
//   star.forEach((e)=>
//   {
//     e.classList.remove('active')
//   })
// })
// })
const stars = document.querySelectorAll('.star-rating');
let clickedIndex = -1;

stars.forEach((starItem, index) => {
    starItem.addEventListener('click', () => {
        clickedIndex = index;
        stars.forEach((e, starIndex) => {
            e.classList.remove('active');
            if (starIndex <= index) {
                e.classList.add('active');
            }
        });
    });

    starItem.addEventListener('mouseenter', () => {
        stars.forEach((e, starIndex) => {
            if (starIndex <= index) {
                e.classList.add('active');
            }
        });
    });

    starItem.addEventListener('mouseleave', () => {
        stars.forEach((e, starIndex) => {
            e.classList.remove('active');
            if (starIndex <= clickedIndex) {
                e.classList.add('active');
            }
        });
    });
});