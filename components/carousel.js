function seggregate(q,parent)
{
    fetch(`http://localhost:2345/products/${q}`).then(function(res){
   return res.json(); 
  }).then(function(res){
      showcarousel(res.products,parent);
    });
}

function showcarousel(p,parent)
{
    let string = "";
    parent.innerHTML=null;
    p.forEach(element => {
        console.log(element._id);
        let image = (element.image)[0];
        let discount_price = Math.floor(((element.retail_price-element.discount_price)/element.retail_price)*100);
        let rating = (Math.random()*5).toFixed(1);
        let review = Math.ceil(Math.random()*300);
        let name = "";
        if(element.name.length > 40)
        {
            for(let i=0;i<40;i++)
            {
                name += element.name[i];
            }
            name = name+"...";
        }
        else
        {
            name = element.name;
        }
        string += `<li class="item">
        <a href = "./product.html#id=${element._id}"><div class="box" >
            <div class="slide-img">
                <img src = ${image}>                
            </div>            
            <div class="detail-box">
                <div class="type">
                    <p title = '${element.name}'>${name}</p>
                </div>
                <div class = "rating">
                    <div><p>${rating}</p><span class="material-icons">star_border</span></div>
                    <p>(${review})</p>
                </div>
                <div class="price">
                <p>₹${element.discount_price}</p>
                <p><s>₹${element.retail_price}</s></p>
                <p>${discount_price}% off</p>
                </div>
            </div>        
        </div></a>
    </li>`;
    });
    parent.innerHTML = string;
}

export {seggregate,showcarousel};