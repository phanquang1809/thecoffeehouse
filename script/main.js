// nút chạy về đầu trang
 const scrollTopButton = document.getElementById('scrollTopButton');
 scrollTopButton.addEventListener('click', function() {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });
let lastScrollY = window.scrollY;
 window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY || window.scrollY==0) {
          // Cuộn xuống
          scrollTopButton.style.display = 'none';
      } else {
          // Cuộn lên
          scrollTopButton.style.display = 'block';
      }
      lastScrollY = window.scrollY;
  });
// chức năng ẩn hiện top-bar-info
const divs = document.querySelectorAll('.top-bar-info > div');
const numDivs = divs.length;
let currentIndex = 0;
divs.forEach(div => div.classList.remove('active'));
divs[currentIndex].classList.add('active');
function toggleNextDiv() {
    divs[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % numDivs;
    divs[currentIndex].classList.add('active');
}
setInterval(toggleNextDiv, 3000); 

//khai báo các danh mục cha và danh mục con
const categoryLv1 =
{
  'all': 'category-all',
  'caphe': 'category-caphe',
  'tra': 'category-tra',
  'cloud': 'category-cloud',
  'hitea': 'category-hitea',
  'traxanh-choco': 'category-traxanh-choco',
  'daxay': 'category-daxay',
  'banh-snack': 'category-banh-snack',
  'tainha': 'category-tainha'
};
const categoryLv2 = {
  //caphe
  'caphehighlight': 'category-caphehighlight',
  'caphemay': 'category-caphemay',
  'caphevn': 'category-caphevn',
  'coldbrew': 'category-coldbrew',
  //tra
  'tratraicay': 'category-tratraicay',
  'macchiato': 'category-macchiato',
  //cloud
  'cloudfee': 'category-cloudfee',
  'cloudteamochi': 'category-cloudteamochi',
  //hitea
  'hiteatra': 'category-hiteatra',
  'hiteadatuyet': 'category-hiteadatuyet',
  //traxanh-choco
  'traxanh': 'category-traxanh',
  'chocolate': 'category-chocolate',
  //daxay
  'daxayfrosty': 'category-daxayfrosty',
  //banh-snack
  'banhman': 'category-banhman',
  'banhngot': 'category-banhngot',
  'banhpastry': 'category-banhpastry',
  //tainha
  'caphetainha': 'category-caphetainha',
  'chaifresh0da': 'category-chaifresh0da'
};
//Load sang trang collection theo đúng danh mục được click
const url = new URLSearchParams(window.location.search);
const category = url.get('category');
if (category) {
  const categoryId = document.getElementById(category);
  if (categoryId) {
    setTimeout(function () {
      showActive(category)
    }, 1000);
  }
}
//Kích hoạt và hiển thị sản phẩm theo category tương ứng
function showActive(id) {
  updateUrl(id);
  activeCategory(id);
  showProduct(id);
  window.scrollTo({ top: 40, behavior: 'smooth' });
}
//Kích hoạt category
function activeCategory(category) {
  var sidebarItems = document.querySelectorAll('.sidebar-item');
  var sidebarMenuItems = document.querySelectorAll('.sidebar-menu-item')
  sidebarItems.forEach(function (e) {
    e.classList.remove('active');
    e.classList.remove('child-active')
  });
  sidebarMenuItems.forEach((e) => {
    e.classList.remove('active-color')
  })
  if (categoryLv1.hasOwnProperty(category)) {
    var sidebarItem = document.getElementById(categoryLv1[category])
    sidebarItem.classList.add('active')
    if (category != 'all') {
      sidebarItem.nextElementSibling.style.display = 'block'
    }
  }
  else {
    var sidebarItem = document.getElementById(categoryLv2[category])
    sidebarItem.parentElement.parentElement.previousElementSibling.classList.add('child-active')
    sidebarItem.parentElement.parentElement.style.display = 'block'
    sidebarItem.classList.add('active-color')
  }
}
function showProduct(category) {
  var listCategory = document.querySelectorAll('.category');
  var catItem = document.getElementById(category.replace('category-', ''));

  listCategory.forEach((cat) => {
    cat.classList.remove('show');
    if (category !== 'all') {
      cat.style.display = 'none'; 
    } else {
      cat.classList.add('show'); 
    }
  });

  if (categoryLv1.hasOwnProperty(category)) {
    var catProc = catItem.querySelectorAll('.category');
    catProc.forEach((proc) => {
      proc.classList.remove('show');
      proc.style.display = 'flex';
      setTimeout(() => {
        proc.classList.add('show'); 
      }, 10); 
    });
  } else {
    catItem.classList.remove('show'); 
    catItem.style.display = 'flex';
    setTimeout(() => {
      catItem.classList.add('show'); 
    }, 10); 
  }
}

//Cập nhật lại url
function updateUrl(category) {
  var currentURL = window.location.href;
  var baseUrl = currentURL.split('?')[0];
  console.log(baseUrl);
  var newUrl = baseUrl + '?category=' + category
  history.pushState({ path: newUrl }, '', newUrl);
}
//Hiển thị sản phẩm theo danh mục được chọn
var selectMenu = document.querySelector('.form-select');
if(selectMenu)
  {
    selectMenu.addEventListener('change', function() {
      var selectedOption = this.options[this.selectedIndex]; 
      showProduct(selectedOption.value)
      updateUrl(selectedOption.value)
      window.scrollTo({
        top: 40,
        behavior: 'smooth'
      });
    });
  }
//Đẩy thông tin sản phẩm được click xuống localstorage
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
//Coffee Story
var pageTabItems = document.querySelectorAll('.page-tab-item')
pageTabItems.forEach((item) => {
  console.log(item);
  item.addEventListener('click', () => {
    pageTabItems.forEach((e) => {
      e.classList.remove('active')
    })
    item.classList.add('active')
  })
})
const togglePasswordButton = document.querySelectorAll(".eyes-icon");
togglePasswordButton.forEach((item) => {
  item.addEventListener("click", (e) => {
    const input = e.currentTarget.previousElementSibling;
    const type =
      input.getAttribute("type") === "password" ? "text" : "password";
    input.setAttribute("type", type);
    if (type == "text") {
      e.currentTarget.classList.remove("fa-eye-slash");
      e.currentTarget.classList.add("fa-eye");
    } else {
      e.currentTarget.classList.remove("fa-eye");
      e.currentTarget.classList.add("fa-eye-slash");
    }
  });
});
