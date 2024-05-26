// Lặp qua từng phần tử và đặt nội dung văn bản của nó thành rỗng
var elements = document.querySelectorAll('.product-page');
elements.forEach(function (element) {
  element.style.display = 'none'
});
let data = JSON.parse(localStorage.getItem("productDetail")) || [];
showProductDetail()
addThumbCarousel()
var itemIdCounter = 1;
appendRelatedProductItems(data.category, dataStorage)

function showProductDetail() {
  const procTitle = document.querySelector('.product-item-title')
  const procPrice = document.querySelector('.product-item-price')
  const procCatrgory = document.querySelector('.breadcrumb-category')
  const breadcrumbTitle = document.querySelector('.breadcrumb-title')
  const procDesc = document.querySelector('.product-detail-description')

  procTitle.textContent = data.name;
  procPrice.textContent = data.price;
  procCatrgory.textContent = data.categoryName;
  procCatrgory.href = './collection.html?category=' + data.category;
  breadcrumbTitle.textContent = data.name;
  procDesc.textContent = data.description;

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
//Tính lại giá tiền khi thêm option và topping
var options = document.querySelectorAll('.product-option-item');
var toppings = document.querySelectorAll('.product-topping-item');
var productPrice = document.querySelector('.product-item-price');
var temp = 0;

function updatePrice(priceChange) {
  var priceProc = parseInt(productPrice.textContent.replace(/\D+/g, ''));
  priceProc += priceChange;
  productPrice.textContent = (priceProc).toLocaleString('vi-VN') + ' đ';
}

options.forEach(function(option) {
  option.addEventListener('click', function() {
    options.forEach(function(e) {
      e.classList.remove('active');
    });
    option.classList.add('active');
    var priceOpt = parseInt(option.dataset.price);
    updatePrice(priceOpt - temp);
    temp = priceOpt;
  });
});

toppings.forEach(function(topping) {
  topping.addEventListener('click', function() {
    this.classList.toggle('active');
    var priceChange = this.classList.contains('active') ? 10000 : -10000;
    updatePrice(priceChange);
  });
});

//lấy sản phẩm liên quan trong cùng danh mục
function relatedProduct(imgSrc, name, price, description) {
  var itemId = 'proc' + itemIdCounter++;
  var item = document.createElement('div');
  item.classList.add('col-xxl-2', 'col-xl-2', 'col-lg-2', 'col-md-3', 'col-sm-4', 'col-4');
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
function appendRelatedProductItems(containerId, dataStorage) {
  var filteredData = [];
  var container = document.getElementById('related-' + containerId);
  var related = document.getElementById('related')
  if (container) {
    related.style.display = "block"
    container.style.display = 'flex'
    for(var category in dataStorage)
      {
        console.log(dataStorage[category]);
        var filteredItems = dataStorage[category].filter(function (product) {
          return product.categoryParent === data.categoryParent && product.name !== data.name;
        });
        filteredData = filteredData.concat(filteredItems);
      }
    if (filteredData.length > 0) {
      var shuffledData = filteredData.sort(() => Math.random() - 0.5);
      var selectedItems = shuffledData.slice(0, 6);
      selectedItems.forEach(function (product) {
        var item = relatedProduct(product.imgSrc[0], product.name, product.price, product.description);
        container.appendChild(item);
      });
    }
    else {
      related.style.display = "none"
    }
  }
}

function addThumbCarousel() {
  let imgList = data.imgSrc;
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
      thumb.setAttribute('aria-label', 'Slide ' + index.toString())
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
  item.addEventListener('click', (e) => {
    const itemName = e.currentTarget.querySelector(".item-info a").textContent;
    for(var categoryData in dataStorage)
      {
        const itemData = dataStorage[categoryData].find(item => item.name === itemName);
        if(itemData)
          localStorage.setItem("productDetail", JSON.stringify(itemData));
      }
  })
})

const stars = document.querySelectorAll('.star-rating');
let clickedIndex = -1;

stars.forEach((starItem, index) => {
  starItem.addEventListener('click', () => {
    clickedIndex = index;
    stars.forEach((e, starIndex) => {
      e.classList.remove('active');
      if (starIndex <= index) {
        e.classList.add('active');
        e.style.transform = 'none';
      }
    });
  });

  starItem.addEventListener('mouseenter', () => {
    stars.forEach((e, starIndex) => {
      if (starIndex <= index) {
        e.classList.add('active');
        e.style.transform = 'rotate(8deg)'
      }
    });
  });
  starItem.addEventListener('mouseleave', () => {
    stars.forEach((e, starIndex) => {
      e.classList.remove('active');
      e.style.transform = 'none';
      if (starIndex <= clickedIndex) {
        e.classList.add('active');
      }
    });
  });
});
