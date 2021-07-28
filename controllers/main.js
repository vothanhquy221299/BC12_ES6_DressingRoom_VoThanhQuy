const callData = new CallData();
const getEle = (id) =>{
    return document.getElementById(id);
}
const getListTypeItem = (typeName) =>{
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
                      <button class="btn btn-danger" onclick="tryClothes('${item.imgSrc_png}','${item.type}')">Try it</button>
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

function tryClothes(src, type){
    document.querySelector(`.${type}`).style.display = 'block';
    document.querySelector(`#${type}_img`).src = src;
}

const tabShirt = getEle('tab-tshirt');
tabShirt.onclick = function(){
    getListTypeItem('topclothes');
}

const tabPants = getEle('tab-pants');
tabPants.onclick = function(){
    getListTypeItem('botclothes')
}

const tabShoes = getEle('tab-shoes');
tabShoes.onclick = function(){
    getListTypeItem('shoes');
}

const tabHandbag = getEle('tab-handbag');
tabHandbag.onclick = function(){
    getListTypeItem('handbags')
}

const tabNecklace = getEle('tab-necklace');
tabNecklace.onclick = function(){
    getListTypeItem('necklaces')
}

const tabHairStyle = getEle('tab-hairstye');
tabHairStyle.onclick = function(){
    getListTypeItem('hairstyle')
}

const tabBackground = getEle('tab-background');
tabBackground.onclick = function(){
    getListTypeItem('background')
}