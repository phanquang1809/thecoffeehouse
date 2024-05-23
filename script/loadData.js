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
function appendProductItems(containerId, data) {
    var container = document.getElementById(containerId);
    if (container) {
        data.forEach(function (product) {
            var item = createProductItem(product.imgSrc[0], product.name, product.price, product.description);
            container.appendChild(item);
        });
    }
}

//Category Cà Phê
appendProductItems('caphehighlight', dataStorage.caphehighlightData);
appendProductItems('caphevn', dataStorage.caphevnData);
appendProductItems('caphemay', dataStorage.caphemayData);
appendProductItems('coldbrew', dataStorage.coldbrewData);

//Category Trà
appendProductItems('tratraicay', dataStorage.tratraicayData);
appendProductItems('macchiato', dataStorage.macchiatoData);

//Category Cloud
appendProductItems('cloudfee', dataStorage.cloudfeeData);
appendProductItems('cloudteamochi', dataStorage.cloudteamochiData);

//Category Hitea
appendProductItems('hiteatra', dataStorage.hiteatraData);
appendProductItems('hiteadatuyet', dataStorage.hiteadatuyetData);

//Category Trà xanh - Chocolate
appendProductItems('traxanh', dataStorage.traxanhData);
appendProductItems('chocolate', dataStorage.chocolateData);

//Category Đá Xay
appendProductItems('daxayfrosty', dataStorage.daxayfrostyData);

//Category Bánh - Snack
appendProductItems('banhman', dataStorage.banhmanData);
appendProductItems('banhngot', dataStorage.banhngotData);
appendProductItems('banhpastry', dataStorage.banhpastryData);

//Category Tại nhà
appendProductItems('caphetainha', dataStorage.caphetainhaData);
appendProductItems('chaifresh0da', dataStorage.chaifresh0daData);