function search(){
    let q = document.getElementById("searchbox").value;
    if(q != "")
    {
        fetch("https://flipkart-dummy-server.herokuapp.com/products").then(function(res){
        return res.json(); 
        }).then(function(res){
            console.log(res);
            var list=res.products;
            let matching = [];
            let myPattern = new RegExp('(\\w*'+q+'\\w*)','gi');
            list.forEach(el=>
            {
                if(el.name.match(myPattern))
                {
                    matching.push(el);
                }
            });
            if(matching.length != 0)
            {
                displayResults(matching);
            }
            else
            {
                output.innerHTML = null;
                output.style.display = "block";
                let failed_results = document.createElement('li');
                failed_results.innerText = "No Search Results Found";
                output.append(failed_results);
            }
        });
    }
    else{
        output.style.display = "none";
    }
}
var delay;
function debounce(fun,time)
{
    if(delay)
    {
        clearTimeout(delay);
    }
    delay = setTimeout(()=>{fun()},time);
}
function displayResults(p)
{
    output.innerHTML = null;
    output.style.display = "block";
    console.log(p);
    p.forEach(element => {
        let name = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.href = `./product.html#id=${element._id}`;
        anchor.innerText = element.name;
        name.append(anchor);
        output.append(name);
    });

}

export {search,debounce,displayResults};