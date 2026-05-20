import HtmlBlock from '../../components/HtmlBlock';

const html = `
<div class="main-wrapper">
<div class="content-box">

<div style="font-size:12px;color:#555;margin-bottom:5px;">
  <a href="../index.html" style="color:#cc0000;">Abt Model:B22CS309NSS</a> | UPC Code : :825225868720
</div>
<h1 style="font-size:17px;font-weight:bold;color:#222;margin-bottom:10px;line-height:1.3;">Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h1>
<div class="page-card" style="padding:0;">
  <div style="display:flex;gap:20px;padding:15px;">
    <div class="product-images">
      <div class="main-img">
        <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=500&h=380&fit=crop&q=85" alt="Hot Tub" class="product-main-img" style="width:100%;height:250px;object-fit:contain;">
      </div>
      <p style="font-size:11px;color:#888;text-align:center;margin:4px 0;">Roll over image to zoom in</p>
      <div class="thumbs">
        <img src="https://images.unsplash.com/photo-1582564286939-400a311013a2?w=500&h=380&fit=crop&q=85" alt="" style="border:2px solid #cc0000;">
        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=380&fit=crop&q=85" alt="">
        <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=500&h=380&fit=crop&q=85" alt="">
        <img src="https://images.unsplash.com/photo-1596178060810-72660ee8b9e2?w=500&h=380&fit=crop&q=85" alt="">
      </div>
      <p style="font-size:11px;color:#cc0000;text-align:center;margin-top:8px;cursor:pointer;">+ Larger View</p>
    </div>

    <div class="product-info" style="flex:1;">
      <div class="stars">&#9733;&#9733;&#9733;&#9733;&#9734; <span style="font-size:12px;color:#888;">(14 reviews)</span></div>
      <div class="retail">Retail Price:$2199.00</div>
      <div class="sale-label">Sale price</div>
      <div class="sale-price">$1979.00</div>
      <div class="guarantee" style="font-size:11px;color:#4a7c3f;">Low Price Guarantee</div>
      <table class="spec-table" style="margin:12px 0;">
        <tr><td style="font-weight:bold;width:160px;color:#555;font-size:12px;">Size/Seating Capacity</td><td style="font-size:12px;color:#333;">77&quot;, 77&quot;, 32&quot; / 6 Persons</td></tr>
        <tr><td style="font-weight:bold;color:#555;font-size:12px;">Seating Design</td><td style="font-size:12px;color:#333;">Bucket, Lounge, Chair, Bench</td></tr>
        <tr><td style="font-weight:bold;color:#555;font-size:12px;">Water Capacity / Dry Weight</td><td style="font-size:12px;color:#333;">305 Gallons / 573 lbs.</td></tr>
        <tr><td style="font-weight:bold;color:#555;font-size:12px;font-weight:bold;">Number of Pumps</td><td style="font-size:12px;color:#333;">2</td></tr>
        <tr><td style="font-weight:bold;color:#555;font-size:12px;">Electrical</td><td style="font-size:12px;color:#333;">5.5 KW 40 amp Heavy Heater, 220V, 50 amp /ETL Certificate</td></tr>
      </table>
      <div class="stock">In Stock (available)</div>
      <button class="btn-addcart" onclick="addToCart('Emerald Bay XL Hot Tub',1979)">&oplus; ADD TO CART</button>
    </div>

    <div class="price-calculator">
      <h3>Price Calculator</h3>
      <div class="calc-row"><label>Interior Color:</label><select class="calc-select"><option value="">---</option><option>Black</option><option>Blue</option><option>Silver</option></select></div>
      <div class="calc-row"><label>Outside Shell Color:</label><select class="calc-select"><option value="">---</option><option>Gray</option><option>Tan</option></select></div>
      <div class="calc-row"><label>Circulation Pump:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Polar Foam:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Cover / Steps:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Extra Filter Sets:</label><select class="calc-select"><option value="">---</option><option>1</option><option>2</option></select></div>
      <div class="calc-row"><label>Deluxe Cover Lifter:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Salt Water Sanitation System:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>TV/DVD/Entertainment:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Backyard Delivery:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Jets:</label><select class="calc-select"><option value="">---</option><option>90</option><option>60</option></select></div>
      <div class="calc-row"><label>Perimeter Lighting:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Premium Popup Speakers:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Waterfall:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Spa Surround:</label><select class="calc-select"><option value="">---</option><option>Yes</option><option>No</option></select></div>
      <div class="calc-row"><label>Quantity:</label><input type="number" value="1" min="1" style="width:50px;padding:3px;border:1px solid #ccc;font-size:12px;"></div>
      <div class="total" style="background:#cc0000;color:#fff;text-align:center;padding:8px;font-weight:bold;margin:10px 0;">Total Price: <span class="calc-total-val">$650.00</span></div>
      <button class="btn-primary" style="width:100%;" onclick="addToCart('Emerald Bay XL Hot Tub',650)">&oplus; ADD TO CART</button>
      <div class="download-resources" style="margin-top:15px;">
        <h3 style="font-size:12px;font-weight:bold;color:#333;margin-bottom:8px;">Download Resources</h3>
        <a href="#" style="font-size:11px;color:#cc0000;display:block;margin-bottom:4px;">&#128196; Full Line Brochure</a>
        <a href="#" style="font-size:11px;color:#cc0000;display:block;margin-bottom:4px;">&#128196; Owner's Manual</a>
        <a href="#" style="font-size:11px;color:#cc0000;display:block;">&#128196; Specifications Sheet</a>
        <img src="https://via.placeholder.com/80x25/cc0000/ffffff?text=PDF" alt="PDF" style="margin-top:8px;width:60px;">
      </div>
    </div>
  </div>

  <div style="padding:0 15px;">
    <div class="tabs">
      <div class="tab active" onclick="switchTab(this,0)">Details</div>
      <div class="tab" onclick="switchTab(this,1)">Quick Specs</div>
      <div class="tab" onclick="switchTab(this,2)">Accessories</div>
      <div class="tab" onclick="switchTab(this,3)">Reviews</div>
      <div class="tab" onclick="switchTab(this,4)">Q &amp; A</div>
    </div>
    <div class="tab-content" id="tab-0">
      <h4 style="font-size:12px;font-weight:bold;margin-bottom:8px;">Product Details</h4>
      <p style="font-size:11px;color:#666;">Energy Star Rated - No</p>
      <h4 style="font-size:13px;font-weight:bold;margin:8px 0;">Emerald Bay XL TV DVD Stereo Hot Tub with 90 Jets</h4>
      <p style="font-size:11px;color:#666;">The Hottub B22CS309NS<br>stain</p>
      <p style="font-size:11px;color:#666;line-height:1.7;margin-top:8px;">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
    </div>
    <div class="tab-content hidden" id="tab-1">
      <h4 style="font-size:12px;font-weight:bold;margin-bottom:8px;">Quick Specifications</h4>
      <p style="font-size:11px;color:#666;">Size: 77&quot; x 77&quot; x 32&quot; | 6 Person Capacity | 90 Jets | 305 Gallons</p>
    </div>
    <div class="tab-content hidden" id="tab-2">
      <p style="font-size:11px;color:#666;">Accessories available separately. Contact us for more information.</p>
    </div>
    <div class="tab-content hidden" id="tab-3">
      <p style="font-size:11px;color:#666;">&#9733;&#9733;&#9733;&#9733;&#9734; (14 reviews) - Excellent product, highly recommended.</p>
    </div>
    <div class="tab-content hidden" id="tab-4">
      <p style="font-size:11px;color:#666;">Have a question? Contact our support team at 888-201-8899.</p>
    </div>
  </div>
</div>

<div class="also-viewed" style="margin-top:15px;">
  <h3>Customers Who Viewed This Item Also</h3>
  <div style="position:relative;overflow:hidden;">
    <button class="av-nav prev">&lsaquo;</button>
    <div class="also-viewed-slider" style="padding:0 25px;">
      <div class="av-item"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=380&fit=crop&q=85" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1596178060810-72660ee8b9e2?w=500&h=380&fit=crop&q=85" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
      <div class="av-item"><img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=280&fit=crop&q=80" alt=""><div class="av-info"><div class="av-price">$2,549.15</div><div class="av-name">Bosch 22 Cu. Ft Stainless Refrigerator</div><div style="font-size:10px;color:#888;">B22CS309NSS</div></div></div>
    </div>
    <button class="av-nav next">&rsaquo;</button>
  </div>
</div>

</div>
</div>
`;

export default function ProductPage() {
  return <HtmlBlock html={html} />;
}
