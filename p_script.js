let div = document.querySelector('.product')

function getProducts(){
    //1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    
    //2. Creating the req
    //method, url, sync/asyc, userid, pwd
    xhr.open('GET', 'products.json', true);

    //3.Send the request
    xhr.send();

    //4.when req is loading..
    xhr.onprogress = function(){
        div.textContent = 'Loading...';
    }

    xhr.onload = function(){
        //
        let products = JSON.parse(xhr.responseText);
        console.log(products);
    }

}

r.onprogress = function(){
    div.textContent = 'Loading...';
}

r.onload = function(){
    let products = JSON.parse(xhr.responseText);
    let(arrayOfProducts) = products;

    arrayOfProducts.forEach((element) => {

        let html = '
        <div>

        </div>
        ';
    });

}