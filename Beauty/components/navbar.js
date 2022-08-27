let navbar = () => {
    return `<div id="ba">
    <img src="https://www.beautybebo.com/pub/media/ads/ad-desktop.jpg" alt="">
</div>

<div id="fixed_nav">

    <div id="middle_head">
        <div id="logo">
            <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="">
        </div>

        <div id="header_search">
            
            <input id="header_search_input" type="text"name ="q" onfocus="if(this.value =='Enter Your Search...') this.value ='';" onblur ="if(this.value =='')this.value='Enter Your Search...';"
            value ="Enter Your Search..." class="input-text input-searchbox" maxlength="128" role="combobox" aria-haspopup="false" aria-expanded="true"
            aria-autocomplete="both" autocomplete="0ff">
            <i class='fa-solid fa-magnifying-glass' id="searchicon"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAEOYAC7tc-hlCIvODyfP-XEY3wG-aNUsOYQ&usqp=CAU" alt=""></i>
         
         

        </div>

        <div id="box_account_cart">
            <div id="account">
                
                <p id="user_account"><select name="current_user" id="current_user">
                <option class="dash_options" value="">👤Account </option>
                 <ul>
                    <li><a href="login.html">Login</a>
                    <li><a href="registration.html">Register </a>
                  
                   
                </ul>
                <option class="dash_options" value="Login">
                    <a href="">Login</a></option>
                <option class="dash_options" value="Register">
                    <a href="">Register</a></option>
                    
              </select></p>
            </div>

            <div id="cart">
               
                <a href=""><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJIy-bZJfN2-BTPNJCG8yLyazqkabjuSFL2A&usqp=CAU" alt=""></a>
            </div>
        </div>
    </div>

    <hr id="header_line">


    <div id="header_navigation">
        <ul>
            <li><a href="">MAKEUP</a>
                <div>
                    <ul>
                        <h2>FACE</h2>
                        <li><a href="">BB Cream</a>
                        <li><a href="">Blush </a>
                        <li><a href="">Bronzer </a>
                        <li><a href="">CC Cream</a>
                        <li><a href="">Contour</a>
                        <li><a href="">Concealer</a>
                        <li><a href=""> Compact & Powder</a>
                        <li><a href="">Face Primer</a>
                        <li><a href="">Foundation</a>
                        <li><a href="">Highlighter</a>
                        <li><a href=""> Loose Powder</a>
                        <li><a href="">Makeup Kits</a>
                    </ul>
                    <ul>
                        <h2>EYE</h2>
                        <li><a href="">Contact Lenses</a>
                        <li><a href="">Eye Kit</a>
                        <li><a href="">Eyeliner </a>
                        <li><a href="">Eye Shadow</a>
                        <li><a href="">Eye Primer</a>
                        <li><a href="">Eye Makeup Remover</a>
                        <li><a href="">Eye Brow Enhancers</a>
                        <li><a href="">Kajal</a>
                        <li><a href="">Mascara</a>
                        <li><a href="">Under Eye Concealer</a>

                    </ul>
                    <ul>
                        <h2>LIPS</h2>
                        <li><a href="">Lipstick</a>
                        <li><a href="">Liquid Lipstick </a>
                        <li><a href="">Lip Liner</a>
                        <li><a href="">Lip Gloss</a>
                        <li><a href="">Lip Balm</a>
                        <li><a href="">Lip Crayon</a>
                        <li><a href="">Lip Stain</a>
                        <li><a href="">Lip Plumber</a>
                      
                    </ul>
                    <ul>
                        <h2>NAILS</h2>
                        <li><a href="">Manicure & Pedicure Kits</a>
                        <li><a href="">Nail polish</a>
                        <li><a href="">Nail Care</a>
                        <li><a href="">Nail Polish Sets</a>
                        <li><a href="">Nail Art Kits</a>
                        <li><a href="">Nail polish Remover</a>
                    </ul>
                    <ul>
                        <h2>TOOLS BRUSHES</h2>
                        <li><a href="">Blush Brush</a>
                        <li><a href="">Eyelash Curles</a>
                        <li><a href="">Eye Brush</a>
                        <li><a href="">Face Brush</a>
                        <li><a href="">Lip Brush</a>
                        <li><a href="">Makeup Pouches</a>
                        <li><a href="">Mirrors</a>
                        <li><a href="">Sponges & Application</a>
                        <li><a href="">Sharpeners</a>
                        <li><a href="">Tweezers</a>
                    </ul>
                </div>
            </li>


            <li><a href="">SKIN</a>
                <div>
                    <ul>
                        <h2>EYE CARE</h2>
                        <li><a href="">Dark Circles</a>
                        <li><a href="">Eye Contour Care</a>
                        <li><a href="">Eye Cream</a>
                        <li><a href="">Eye Masks</a>
                        <li><a href="">Eye Serums</a>
                        <li><a href="">Puffiness</a>
                        <li><a href="">Under Eye Creams</a>
                        <li><a href="">Under Eye Wrinkles</a>
                    </ul>
                    <ul>
                        <h2>FACE CARE</h2>
                        <li><a href="">Anti-Ageing Creams</a>
                        <li><a href="">Bleach Creams</a>
                        <li><a href="">Brigtening Creams</a>
                        <li><a href="">Face Wash</a>
                        <li><a href="">Facial Wipes</a>
                        <li><a href="">Face Oil</a>
                        <li><a href="">Face Cleansers</a>
                        <li><a href="">Facial Kits</a>
                        <li><a href="">Face Tools</a>
                        <li><a href="">Moisturer</a>
                        <li><a href="">Mask & Peels</a>
                        <li><a href="">Serum</a>
                        <li><a href="">Toner & Astringents</a>
                    </ul>
                    <ul>
                        <h2>BODY CARE</h2>
                        <li><a href="">All Cream</a>
                        <li><a href="">Body Moisturizers</a>
                        <li><a href="">Body Toners</a>
                        <li><a href="">Body Sun Care</a>
                        <li><a href="">Brightening Lotion</a>
                        <li><a href="">Dark Circles & Wrinkles</a>
                        <li><a href="">Day Cream</a>
                        <li><a href="">Foot Cream</a>
                        <li><a href="">Hair Remover Cream</a>
                        <li><a href="">Hand Creams</a>
                        <li><a href="">Hands & Feet</a>
                        <li><a href="">Kits & Combos</a>
                        <li><a href="">Night Cream</a>
                    </ul>
                    <ul>
                        <li><a href=""><img
                                    src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
                                    alt=""></a>
                    </ul>
                   
                </div>
            </li>



            <li><a href="">HAIR</a>
                <div>
                    <ul>
                        <h2>HAIR CARE</h2>
                        <li><a href="">Color Protection</a>
                        <li><a href="">Dandruff</a>
                        <li><a href="">Dry Shampoo</a>
                        <li><a href="">Gels & Waxes</a>
                        <li><a href="">Hair Spray</a>
                        <li><a href="">Hair color/Dye</a>
                        <li><a href="">Hair Creams & Masks</a>
                        <li><a href="">Hair Styling</a>
                        <li><a href="">Hairfall & Thining</a>
                    </ul>
                    <ul>
                        <h2>HAIR LOSS</h2>
                        <li><a href="">Conditioner</a>
                        <li><a href="">Hair Oil</a>
                        <li><a href="">Hair Serum</a>
                        <li><a href="">Hair Growth Solutions</a>
                        <li><a href="">Shampoo</a>
                        
                        

                    </ul>
                    <ul>
                        <li><img src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"
                                alt=""></li>
                    </ul>
                   
                </div>
            </li>

            <li><a href="">PERSONAL CARE</a>
                <div id="bath">
                    <ul>
                        <h2>BATH & BODY</h2>
                        <li><a href="">Body Cleansers</a>
                        <li><a href="">Body Massage oil</a>
                        <li><a href="">Body Wash</a>
                        <li><a href="">Creams</a>
                        <li><a href="">Essentilas Oils</a>
                        <li><a href="">Foot Cream</a>
                        <li><a href="">Scrubs & Exfoliants</a>
                        <li><a href="">Ubtan & Face Wash</a>
                       
                    </ul>
                    <ul>
                        <h2>BATHING ACCESSORIES</h2>
                        <li><a href="">Bath Brushes</a>
                        <li><a href="">Loofahs</a>
                        <li><a href="">Shower Caps</a>
                        <li><a href="">Sponges</a>
                        

                    </ul>
                    <ul>
                        <h2>BATH & SHOWER</h2>
                        <li><a href="">Body Soaps</a>
                        <li><a href="">Shower Gel</a>
                        
                    </ul>
                    <ul>
                        <li><img src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
                                alt=""></li>
                    </ul>
                    
                </div>
            </li>
            <li><a href="">MOM & BABY CARE</a>
                <div id="baby">
                    <ul>
                        <h2>BABY CARE</h2>
                        <li><a href="">Bath Time</a>
                        <li><a href="">Diapers</a>
                        <li><a href="">Lotions & Cream</a>
                        <li><a href="">Oils</a>
                        <li><a href="">Powder</a>
                        <li><a href="">Shampoo</a>
                        <li><a href="">Soaps</a>
                        <li><a href="">Sterilizer & Cleaners</a>
                        <li><a href="">Rash Cream</a>
                        <li><a href="">Wipes</a>
                        
                    </ul>
                    <ul>
                        <h2>MOM CARE</h2>
                        <li><a href="">Lotions & Creams</a>
                        <li><a href="">Personal care</a>
                        
                    </ul>
                    <ul>
                        <li><img src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
                                alt=""></li>
                    </ul>
                   
                    
                </div>
            </li>
            <li><a href="">FRAGRANCE</a>
                <div>
                    <ul>
                        <li><a href="">Perfumes</a>
                        <li><a href="">Deodorants roll ons</a>
                        <li><a href="">Body Mist/Spray</a>
                        
                    </ul>
                  
                    
                 
                </div>
            </li>
            <li><a href="">AYURVEDA</a>
                <div>
                    <ul>
                        <h3>NATURAL SKIN CARE</h3>
                        <li><a href=""> Body Wash</a>
                        <li><a href="">Bod Lotion</a>
                        <li><a href="">Cleansers</a>
                        <li><a href="">Cream </a>
                        <li><a href="">Eye Care</a>
                        <li><a href="">Face Wash</a>
                        <li><a href="">Gel</a>
                        <li><a href="">Lip Care</a>
                        <li><a href="">Mask</a>
                        <li><a href="">Pack</a>
                        <li><a href="">Scrub</a>
                        <li><a href="">Sun Protection</a>
                    </ul>
                    <ul>
                       <h3>NATURAL HAIR CARE</h3>
                        <li><a href="">Conditioner</a>
                        <li><a href="">Hair Oils</a>
                        <li><a href="">Hair Serum</a>
                        <li><a href="">Hair Gel</a>
                        <li><a href="">Shampoo</a>
                    </ul>
                    <ul>
                        <li><img src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg"
                                alt=""></li>
                    </ul>
                    
                </div>
            </li>
            <li><a href="">BRANDS</a>
                <div>
                    <ul>
                        
                        <h3>TOP BRANDS</h3>
                        <li><a href="">LAKME</a>
                        <li><a href="">L-OREAL-PARIS </a>
                        <li><a href="">JOY</a>
                        <li><a href="">AROMA MAGIC</a>
                        <li><a href="">LOTUS HERBALS </a>
                        <li><a href="">BIOTIQUE</a>
                        <li><a href="">VLCC</a>
                        <li><a href="">VEGA </a>
                        <li><a href="">MAYBELLINE</a>
                        <li><a href="">MAMAEARTH</a>
                        <li><a href="">CHICCO</a>
                        <li><a href="">NEUTROGENA</a>
                        
                    </ul>
                  
                    
                 
                </div>
            </li>
            <li><a href="">MY CART</a>
               
            </li>
            
                
                      
    </div>
</div>`
};

export default navbar;