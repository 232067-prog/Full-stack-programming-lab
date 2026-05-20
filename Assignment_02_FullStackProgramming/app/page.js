import HtmlBlock from '../components/HtmlBlock';

const html = `
<div class="hero-slider">
  <div class="slide active">
    <div class="slide-text">
      <h2>Barrier Reef 158 Jet<br>TV- Stereo - Home Theater<br>Supter Spa</h2>
      <p>Extra Large and Deep  8 Person<br>158 Jet Supper Spa, TV-Home Theater Spa System,</p>
      <div class="price">$4899.00</div>
      <button class="btn-details" onclick="navigate('pages/product.html')">More Details</button>
    </div>
    <div class="slide-img">
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=320&fit=crop&q=85" alt="Hot Tub Spa" style="width:100%;height:200px;object-fit:cover;">
    </div>
  </div>
  <div class="slide">
    <div class="slide-text">
      <h2>5-7 Person<br>Portable Spa</h2>
      <p>Premium quality spa with advanced jet system</p>
      <div class="price">$3299.00</div>
      <button class="btn-details" onclick="navigate('pages/product.html')">More Details</button>
    </div>
    <div class="slide-img">
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=320&fit=crop&q=85" alt="Hot Tub" style="width:100%;height:200px;object-fit:cover;">
    </div>
  </div>
  <div class="slide">
    <div class="slide-text">
      <h2>Save 50% Today</h2>
      <p>Limited time offer on top spa brands</p>
      <div class="price">From $1,999.00</div>
      <button class="btn-details" onclick="navigate('pages/category.html')">Shop Now</button>
    </div>
    <div class="slide-img">
      <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=320&fit=crop&q=85" alt="Hot Tub Sale" style="width:100%;height:200px;object-fit:cover;">
    </div>
  </div>
  <div class="slider-dots">
    <span onclick="showSlide(0)"></span>
    <span onclick="showSlide(1)"></span>
    <span class="active" onclick="showSlide(2)"></span>
  </div>
</div>

<div class="promo-banners" style="max-width:730px;margin:5px auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:5px;">
  <div style="background:linear-gradient(135deg,#1a3a5c,#2d6a8a);color:#fff;padding:12px;min-height:100px;display:flex;flex-direction:column;justify-content:flex-end;">
    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="5-7 Person Spa" style="width:100%;height:65px;object-fit:cover;margin-bottom:6px;">
    <h3 style="font-size:13px;font-weight:bold;">5-7 PERSON SPA</h3>
    <p style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:3px;">THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIH VEL VELIT AUCTOR</p>
  </div>
  <div style="background:linear-gradient(135deg,#2d4a6a,#1a3a5c);color:#fff;padding:12px;min-height:100px;display:flex;flex-direction:column;justify-content:flex-end;">
    <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="TV Theater Spa" style="width:100%;height:65px;object-fit:cover;margin-bottom:6px;">
    <h3 style="font-size:13px;font-weight:bold;">TV THEATER SPA</h3>
    <p style="font-size:10px;color:rgba(255,255,255,0.8);margin-top:3px;">THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN</p>
  </div>
  <div style="background:#cc0000;color:#fff;padding:12px;min-height:100px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;">
    <h2 style="font-size:36px;font-weight:900;line-height:1;">SAVE<br>50%</h2>
    <p style="font-size:10px;margin-top:8px;color:rgba(255,255,255,0.9);">THIS IS PHOTOSHOPS VERSION OF LOREM IPSUM. PROIN GRAVIDA NIH VEL VELIT AUCTOR</p>
  </div>
</div>

<div style="max-width:730px;margin:10px auto;padding:0 10px;">
  <div class="section-title">NEW PRODUCTS</div>
  <div class="product-grid">
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="XS SCYBA X SERIES 119">
      <div class="p-name">XS SCYBA X SERIES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="XS SCYBA X SERIES 119">
      <div class="p-name">XS SCYBA X SERIES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt="XS SCYBA X SERIES 119">
      <div class="p-name">XS SCYBA X SERIES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="XS SCYBA X SET+ES 119">
      <div class="p-name">XS SCYBA X SET+ES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SET+ES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="images/Hottub_main_F.jpg" alt="XS SCYBA X SERIES 119">
      <div class="p-name">XS SCYBA X SERIES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="XS SCYBA X SERIES 119">
      <div class="p-name">XS SCYBA X SERIES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt="XS SCYBA X SERIES 119">
      <div class="p-name">XS SCYBA X SERIES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
    <div class="product-card">
      <img src="images/Hottub_main_F.jpg" alt="XS SCYBA X SERIES 119">
      <div class="p-name">XS SCYBA X SERIES 119</div>
      <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
      <div class="p-price">$500.00</div>
      <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
      <div class="p-links"><a href="pages/account.html">ADD TO WISH LIST</a><a href="pages/product.html">MORE DETAILS</a></div>
    </div>
  </div>
</div>
`;

export default function HomePage() {
  return <HtmlBlock html={html} />;
}
