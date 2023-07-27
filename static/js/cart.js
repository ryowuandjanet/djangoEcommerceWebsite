var updateBtns = document.getElementsByClassName('update-cart')

for(var i=0;i < updateBtns.length; i++) {
  updateBtns[i].addEventListener("click",function(){
    var productId = this.dataset.product
    var action = this.dataset.action
    console.log('productId : ', productId, 'action : ', action)

    console.log("user ; ", user)
    if(user === 'AnonymousUser'){
      console.log("未登錄")
    }else {
      updateUserOrder(productId,action)
    }
  })
}

function updateUserOrder(productId,action){
  console.log("使用者己登錄，資料傳送中...")

  var url = '/update_item/'

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type':'appliction/json',
      'X-CSRFToken': csrftoken
    },
    body:JSON.stringify({
      "productId": productId,
      "action": action
    })
  })
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    location.reload()
  })
}