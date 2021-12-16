async function checkpincode(){
    let input = document.querySelector('.del > div input').value;
    let res = await fetch(`https://api.postalpincode.in/pincode/${input}`);
    let address = await res.json();
    console.log(address);
}
export {checkpincode}