function search(){
    let q = document.getElementById("searchbox").value;
    if(q != "")
    {
        fetch("http://localhost:2345/products").then(function(res){
        return res.json(); 
        }).then(function(res){
            var list=res["records"];
            var ar=[];
            list.forEach((item)=>{
                var temp=item.fields.name;
                if(temp != undefined)
                {
                    ar.push(temp);                        
                }
            });
            let matching = [];
            let myPattern = new RegExp('(\\w*'+q+'\\w*)','gi');
            ar.forEach(el=>
            {
                if(el.match(myPattern))
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
    p.forEach(element => {
        let name = document.createElement('li');
        let anchor = document.createElement('a');
        anchor.href = `./product.html#product=${element}`;
        anchor.innerText = element;
        name.append(anchor);
        output.append(name);
    });

}

export {search,debounce,displayResults};