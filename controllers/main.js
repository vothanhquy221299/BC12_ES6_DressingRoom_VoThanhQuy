const callData = new CallData();
const getEle = (id) =>{
    return document.getElementById(id);
}
const getListTypeItem = (typeName, insideCloth) =>{
    let content = '';
    callData.getItems()
    .then((result) =>{
        result.data.map((item) =>{
            if(item.type == typeName){
                content +=`
                    <div class="col-3">
                    <div class="card item-card">
                    <img src="${item.imgSrc_jpg}" class="card-img-top">
                    <div class="card-body item-content">
                      <h6 class="card-title">${item.name}</h6>
                      <button class="btn btn-danger">Try it</button>
                    </div>
                  </div>
                    </div>
                `;
            }
        });
        getEle('listItem').innerHTML = content;
    })
    .catch((error) =>{
        console.log(error)
    })
} 

const tabShirt = getEle('tab-tshirt');
tabShirt.onclick = function(){
    getListTypeItem('topclothes', 'bikinitop');
}

const tabPants = getEle('tab-pants');
tabPants.onclick = function(){
    getListTypeItem('botclothes', 'bikinibottom')
}

const tabShoes = getEle('tab-shoes');
tabShoes.onclick = function(){
    getListTypeItem('shoes', 'feet');
}

const tabHandbag = getEle('tab-handbag');
tabHandbag.onclick = function(){
    getListTypeItem('handbags', 'handbag')
}

const tabNecklace = getEle('tab-necklace');
tabNecklace.onclick = function(){
    getListTypeItem('necklaces', 'necklace')
}

const tabHairStyle = getEle('tab-hairstye');
tabHairStyle.onclick = function(){
    getListTypeItem('hairstyle', 'hairstyles')
}

const tabBackground = getEle('tab-background');
tabBackground.onclick = function(){
    getListTypeItem('background', 'backgrounds')
}