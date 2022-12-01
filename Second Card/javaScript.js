let myCartData = [];
let products = [];

fetch(" https://fakestoreapi.com/products").then((response) => response.json()).then((value) => { display(value) })


function display(value) {
  document.getElementById('dis').innerHTML = "";
  products = value;
  let myData = value.map(function (value, index) {
    return `<div class="item">
                    <div class="image">
                        <img src="${value.image}" alt="photo">
                    </div>
                    <div class="contant">
                        <p class="title">${value.title}</p>
                        <p class="des">${value.description}</p>
                        <p class="price">$ ${value.price}</p>
                    </div>
                    <div class="button">
                        <div class="rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                        <button class="btn-1" onclick='addCard(${index})'>Add Card</button>
                    </div>
                </div>
        `
  });
  document.getElementById('dis').innerHTML = myData.join(" ");
}



cardVal = (item) => {
  document.getElementById('pitem').innerHTML = item.length;
}

addCard = (index) => {

  let data = products[index];
    if (myCartData.length == 0) {
        data.qty = 1;
        myCartData.push(data);
    }

    else {

        let findProduct = myCartData.find((v) => {
            return v.id == data.id;
        });

        if (findProduct == undefined || findProduct == null) {
            data.qty = 1;
            myCartData.push(data);
        }
        else {
            let myneearray = myCartData.map((c) => {
                if (c.id == data.id) {
                    c.qty = c.qty + 1;
                }

                return c;
            })

            myCartData = myneearray;

        }
    }
    // console.log(myCartData)
    cardVal(myCartData)
}


display1 = () => {
  document.getElementById('dis').innerHTML = "";

  
    let myData = myCartData.map(function (value, index) {
      return `
    
    <div class="item">
                <div class="image">
                    <img src="${value.image}" alt="photo">
                </div>
                <div class="contant">
                    <p class="title">${value.title}</p>
                    <p class="price">$ ${value.price}</p>
                </div>
                <div>Quantity :- ${value.qty}<button class="btn-2" onclick="incre(${index})">+</button> 
                <button class="btn-2" onclick="decre(${index})">-</button> </div>
                    <button class="btn-1" onclick=' delItem(${index})'>Delete</button>
                    <button class="btn-1" onclick=' display()'>Go To Back</button>
                </div>
            </div>
    `
    });

    document.getElementById('totalBill').innerHTML = myCartData.reduce((accum, item) => accum + item.price * item.qty, 0)
    document.getElementById('dis').innerHTML = myData.join(" ");
  
    
    if (myCartData.length == 0) {
     
      document.getElementById('imError').innerHTML = `<img src="error.PNG" alt="">`;
    }

}

delItem = (item) => {
  myCartData.splice(item, 1);
  display1();
  cardVal(myCartData);
}

incre = (index) => {

  myCartData[index].qty += 1;
  display1();

}
decre = (index) => {
  if (myCartData[index].qty == 0) {
      return false
  }
  else {


      myCartData[index].qty -= 1;
      display1();
  }

}