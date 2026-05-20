import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">
  <div class="breadcrumb"><a href="../index.html">Home</a> &gt; Catagory</div>
  <div class="page-card" style="padding:15px;">
    <div class="category-layout">
      <div class="sidebar">
        <h3>Shopping Options</h3>
        <div class="filter-group">
          <h4>SEATING CAPACITY</h4>
          <ul>
            <li class="active"><a href="#">2 - 4 PEOPLE</a></li>
            <li><a href="#">5 - 7 PEOPLE</a></li>
            <li><a href="#">8 PEOPLE AND MORE</a></li>
          </ul>
        </div>
        <div class="filter-group">
          <h4>CHOOSE SIZES</h4>
          <ul>
            <li><a href="#">5 - 6 FEET LONG</a></li>
            <li><a href="#">6 - 7 FEET LONG</a></li>
            <li><a href="#">7 - 8 FEET LONG</a></li>
            <li><a href="#">8 FEET TO LARGE SIZE</a></li>
          </ul>
        </div>
        <div class="filter-group">
          <h4>SPAS BY TYLE</h4>
          <ul>
            <li><a href="#">PLUG AND PLAY 110 VOLT</a></li>
            <li><a href="#">TV - STERIO SPAS</a></li>
            <li><a href="#">CORNER SPAS</a></li>
            <li><a href="#">PORTABLE SPAS</a></li>
            <li><a href="#">DEEPER SPAS</a></li>
          </ul>
        </div>
        <div class="filter-group">
          <h4>PRICE RANGES FROM</h4>
          <ul>
            <li><a href="#">UNDER $3,000</a></li>
            <li><a href="#">$3,000 TO 4,000</a></li>
            <li><a href="#">$4,000 TO 5,000</a></li>
            <li><a href="#">$5,000 TO 6,000</a></li>
            <li><a href="#">$6,000 +</a></li>
          </ul>
        </div>
      </div>

      <div class="products-area">
        <h3 style="font-size:15px;font-weight:bold;margin-bottom:10px;">Top Product Listing</h3>
        <div class="toolbar">
          <span>6 Item(s)</span>
          <span>Show <select><option>9</option><option>18</option><option>27</option></select></span>
        </div>
        <div class="category-grid">
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&h=280&fit=crop&q=80" alt="Spa">
            <div class="p-name">XS SCYBA X SERIES 119</div>
            <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
            <div class="p-price">$500.00</div>
            <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">ADD TO WISH LIST</a><a href="product.html">MORE DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="Spa">
            <div class="p-name">XS SCYBA X SERIES 119</div>
            <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
            <div class="p-price">$500.00</div>
            <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">ADD TO WISH LIST</a><a href="product.html">MORE DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt="Spa">
            <div class="p-name">XS SCYBA X SERIES 119</div>
            <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
            <div class="p-price">$500.00</div>
            <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">ADD TO WISH LIST</a><a href="product.html">MORE DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&h=280&fit=crop&q=80" alt="Spa">
            <div class="p-name">XS SCYBA X SERIES 119</div>
            <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
            <div class="p-price">$500.00</div>
            <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">ADD TO WISH LIST</a><a href="product.html">MORE DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt="Spa">
            <div class="p-name">XS SCYBA X SERIES 119</div>
            <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
            <div class="p-price">$500.00</div>
            <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">ADD TO WISH LIST</a><a href="product.html">MORE DETAILS</a></div>
          </div>
          <div class="product-card">
            <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt="Spa">
            <div class="p-name">XS SCYBA X SERIES 119</div>
            <div class="p-desc">The goods of our stores are very reliable and due we care about the customer</div>
            <div class="p-price">$500.00</div>
            <button class="btn-cart" onclick="addToCart('XS SCYBA X SERIES 119',500)">&#128722; ADD TO CART</button>
            <div class="p-links"><a href="#">ADD TO WISH LIST</a><a href="product.html">MORE DETAILS</a></div>
          </div>
        </div>
      </div>
    </div>

    <div class="also-viewed" style="margin-top:25px;">
      <h3>Customers Who Viewed This Item Also</h3>
      <div style="position:relative;overflow:hidden;">
        <button class="av-nav prev">&lsaquo;</button>
        <div class="also-viewed-slider" style="padding:0 25px;">
          <div class="av-item"><img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
          <div class="av-item"><img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
          <div class="av-item"><img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
          <div class="av-item"><img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
        </div>
        <button class="av-nav next">&rsaquo;</button>
      </div>
    </div>
  </div>
</div>
</div>
`;

export default function CategoryPage() {
  return <HtmlBlock html={html} />;
}
