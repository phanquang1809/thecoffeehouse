var itemIdCounter = 1;
function createProductItem(imgSrc, name, price, description) {
    var itemId = 'proc' + itemIdCounter++;
    var item = document.createElement('div');
    item.classList.add('col-xxl-4', 'col-xl-4', 'col-lg-4', 'col-md-6', 'col-sm-6', 'col-6');
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
function appendProductItems(containerId, dataStorage) {
    var container = document.getElementById(containerId);
    if (container) {
        dataStorage.forEach(function (product) {
            var item = createProductItem(product.imgSrc[0], product.name, product.price, product.description);
            container.appendChild(item);
        });
    }
}

//Category Cà Phê
appendProductItems('caphehighlight', dataStorage.caphehighlight);
appendProductItems('caphevn', dataStorage.caphevn);
appendProductItems('caphemay', dataStorage.caphemay);
appendProductItems('coldbrew', dataStorage.coldbrew);

//Category Trà
appendProductItems('tratraicay', dataStorage.tratraicay);
appendProductItems('macchiato', dataStorage.macchiato);

//Category Cloud
appendProductItems('cloudfee', dataStorage.cloudfee);
appendProductItems('cloudteamochi', dataStorage.cloudteamochi);

//Category Hitea
appendProductItems('hiteatra', dataStorage.hiteatra);
appendProductItems('hiteadatuyet', dataStorage.hiteadatuyet);

//Category Trà xanh - Chocolate
appendProductItems('traxanh', dataStorage.traxanh);
appendProductItems('chocolate', dataStorage.chocolate);

//Category Đá Xay
appendProductItems('daxayfrosty', dataStorage.daxayfrosty);

//Category Bánh - Snack
appendProductItems('banhman', dataStorage.banhman);
appendProductItems('banhngot', dataStorage.banhngot);
appendProductItems('banhpastry', dataStorage.banhpastry);

//Category Tại nhà
appendProductItems('caphetainha', dataStorage.caphetainha);
appendProductItems('chaifresh0da', dataStorage.chaifresh0da);