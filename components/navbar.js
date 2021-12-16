function navbar()
{
    return `
<div>
    <a href = "index.html"><div class="logo">
        <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png">
        <div class="caption">
            <div class="flex">
                <p>Explore</p>
                <p>Plus</p>
            </div>
            <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png">
        </div>
    </div></a>
    <div>
        <div>
            <input type="text" placeholder="Search for products,brand and more" id="searchbox">
            <span class="material-icons" id = "search_icon">search</span>
        </div>
        <ul id="output"></ul>
    </div>
</div>
<div>
    <div class = "login_div">
        <p class = "login">Login</p>
        <ul class= "login_dropdown">
            <li><b>New Customer? <a href = "./sample.html" class= "signup">Signup</a></b></li>
            <li><span class="material-icons">account_circle</span> My Profile</li>
            <li><span class="material-icons">add</span> Flipkart Plus Zone</li>
            <li><span class="material-icons">list_alt</span> Orders</li>
            <li><a href = "./wishlist.html"><span class="material-icons">favorite</span> Wishlist</a></li>
            <li><span class="material-icons">confirmation_number</span> Rewards</li>
            <li><span class="material-icons">account_balance_wallet</span> Gift Cards</li>
        </ul>
    </div>
    <div class="more">
        <div class="flex">
            <p class = "text" id= "more">More</p>
            <span class="material-icons" id = "micon">arrow_drop_down</span>
        </div>
        <ul class = "dropdown">
            <li><span class="material-icons">notifications</span> Notification Preferances</li>
            <li><span class="material-icons">shopping_bag</span> Sell on Flipkart</li>
            <li><span class="material-icons">support_agent</span> 24x7 Customer Care</li>
            <li><span class="material-icons">moving</span> Advertise</li>
            <li><span class="material-icons">get_app</span> Download App</li>
    </div>
    <a href = "cart.html"><div class="flex">
        <span class="material-icons">shopping_cart</span>
        <p class = "text">Cart</p>
    </div></a>
</div>`;
}

export default navbar;