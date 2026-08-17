import { useState } from 'react'
import './App.css'

const menuData = [
  {
    category: "Sandwiches",
    emoji: "🥪",
    items: [
      { name: "Grilled Cheese", price: "$7.99" },
      { name: "Tomato Mozzarella", price: "$8.99" },
      { name: "Cali Veggie", price: "$9.99" },
      { name: "Chipotle Panini", price: "$9.99" },
      { name: "Bombay Sandwich", price: "$9.99" },
      { name: "Samosa Sandwich", price: "$10.99" },
      { name: "Paneer Panini", price: "$10.99" },
      { name: "Paneer Tufani", price: "$10.99" },
    ],
  },
  {
    category: "Snacks",
    emoji: "🥡",
    items: [
      { name: "Samosas", price: "$7.99" },
      { name: "Lilva Kachori", price: "$7.99" },
      { name: "Veg. Spring Rolls", price: "$7.99" },
      { name: "Cheese Sticks", price: "$8.99" },
      { name: "French Fries", price: "$7.49" },
      { name: "Masala Fries", price: "$8.49" },
    ],
  },
  {
    category: "Chef's Special",
    emoji: "👨‍🍳",
    items: [
      { name: "Indo-Chinese Bhel", price: "$9.99" },
      { name: "Pav Bhaji", price: "$12.99" },
      { name: "Vada Pav", price: "$7.99" },
      { name: "Khichu", price: "$8.49" },
      { name: "Masala Burger", price: "$7.99" },
    ],
  },
  {
    category: "Chaats",
    emoji: "🌶️",
    items: [
      { name: "Samosa Chaat", price: "$8.99" },
      { name: "Pani Puri", price: "$7.49" },
      { name: "Dahi Puri", price: "$8.99" },
      { name: "Sev Puri", price: "$7.99" },
      { name: "Bhel Puri", price: "$7.99" },
      { name: "Papdi Chaat", price: "$7.99" },
      { name: "Aloo Tikki Chaat", price: "$7.99" },
      { name: "Tokri Chaat", price: "$9.99" },
    ],
  },
  {
    category: "Smoothies",
    emoji: "🥤",
    items: [
      { name: "Ice Spice Special", price: "$7.99" },
      { name: "Island Blue", price: "$7.99" },
      { name: "Knock Out", price: "$7.99" },
      { name: "Sweet 16", price: "$7.99" },
      { name: "Lime Berry", price: "$7.99" },
      { name: "Hawaiian Lava", price: "$7.99" },
      { name: "Green Machine", price: "$7.99" },
      { name: "Peanut Heaven", price: "$7.99" },
      { name: "Tropical Delicious", price: "$7.99" },
      { name: "Protein Boost (add-on)", price: "$1.99" },
      { name: "Energy Boost (add-on)", price: "$1.99" },
    ],
  },
  {
    category: "Speciality Drinks",
    emoji: "☕",
    items: [
      { name: "Mango Lassi", price: "$4.99" },
      { name: "Chikoo Shake", price: "$7.99" },
      { name: "Rose Falooda", price: "$7.99" },
      { name: "Mango Falooda", price: "$7.99" },
      { name: "Sweet Paan Falooda", price: "$8.99" },
      { name: "Desi Butterscotch Falooda", price: "$8.99" },
      { name: "Kesar Pista Falooda", price: "$8.99" },
      { name: "Tutty Fruity Falooda", price: "$8.99" },
      { name: "Malai Falooda", price: "$8.99" },
      { name: "Nutty Delight Falooda", price: "$8.99" },
      { name: "Rajbhog Falooda", price: "$8.99" },
    ],
  },
  {
    category: "Milkshakes",
    emoji: "🧋",
    items: [
      { name: "Birthday Cake", price: "$7.99" },
      { name: "Chocolate", price: "$7.99" },
      { name: "Vanilla", price: "$7.99" },
      { name: "Coffee", price: "$7.99" },
      { name: "Strawberry Cream", price: "$7.99" },
      { name: "Mudslide", price: "$7.99" },
      { name: "Sneakers", price: "$7.99" },
      { name: "Cookies n' Cream", price: "$7.99" },
    ],
  },
  {
    category: "Eggless Ice Creams",
    emoji: "🍦",
    items: [
      { name: "Rose (Falooda) Ice Cream", price: "Ask us" },
      { name: "Custard Apple (Sitaphal)", price: "Ask us" },
      { name: "Mango Ice Cream", price: "Ask us" },
      { name: "Chikoo (Sapota) Ice Cream", price: "Ask us" },
      { name: "RajBhog", price: "Ask us" },
      { name: "Sweet Paan Ice Cream", price: "Ask us" },
      { name: "Saffron-Pistachio Ice Cream", price: "Ask us" },
      { name: "Pista Kulfi", price: "Ask us" },
      { name: "Rajastani Kulfi", price: "Ask us" },
    ],
  },
]

const reviews = [
  { name: "Kavi B.K.", stars: 5, text: "I absolutely loved the sandwiches! The food was delicious and fresh and the staff was friendly. They have so many different flavors of ice-cream too! I had the Bombay Sandwich, the Paneer Panini, and veggie spring rolls." },
  { name: "Tika Maharana", stars: 5, text: "Really good options for Indian street food, all vegetarian. They also have really good smoothies and ice cream in authentic Indian flavors. I got the Masala veggie burger, samosa sandwich, and pav bhaji — all super delicious!" },
  { name: "Annamalai S.", stars: 5, text: "Great cafe to hangout! Chat food was super delicious. Excellent service — so courteous, friendly and polite. Great place for Indian chat food, chai, fruit shakes and Indian sandwiches. Prices are very reasonable!" },
  { name: "Diana", stars: 5, text: "Went 15 mins before closing and the owner and staff let us in and made the food in a timely manner. All the staff were so patient and accommodating. Food is always delicious — love the masala fries and the spring rolls." },
]

function StarRating({ count }) {
  return <div className="stars">{Array.from({length:5}).map((_,i)=><span key={i} className={i<count?'star filled':'star'}>★</span>)}</div>
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); setMobileMenuOpen(false) }

  return (
    <div className="app">
      <nav className="nav">
        <div className="nav-brand" onClick={() => scrollTo('hero')} style={{cursor:'pointer'}}>
          <span className="nav-logo">🌶️</span>
          <span className="nav-title">Ice Spice</span>
        </div>
        <button className="hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? '✕' : '☰'}</button>
        <ul className={"nav-links" + (mobileMenuOpen ? ' open' : '')}>
          {['About','Menu','Reviews','Contact'].map(link=>(
            <li key={link}><button onClick={() => scrollTo(link.toLowerCase())}>{link}</button></li>
          ))}
          <li><a href="tel:+18135911758" className="nav-cta">📞 Order</a></li>
        </ul>
      </nav>

      <section id="hero" className="hero">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="hero-tagline">✨ Good Vibes Only ✨</p>
          <h1 className="hero-title">Ice Spice<br />Indian Street Food Café</h1>
          <p className="hero-sub">Authentic vegetarian Indian street food, chaats & homemade ice cream in Tampa, FL</p>
          <div className="hero-badges">
            <span className="badge">⭐ 4.4 · 698 Reviews</span>
            <span className="badge">🌿 100% Vegetarian</span>
            <span className="badge">💰 $10–20 per person</span>
          </div>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={() => scrollTo('menu')}>View Menu</button>
            <a className="btn btn-secondary" href="tel:+18135911758">📞 Call to Order</a>
          </div>
        </div>
      </section>

      <section id="about" className="about section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <span className="section-label">Our Story</span>
              <h2>A Taste of India in Tampa</h2>
              <p>Ice Spice Indian Street Food Café is nestled in the heart of Tampa, offering an authentic dive into India's vibrant street food culture. This hidden gem delivers traditional vegetarian delights with fresh ingredients and bold flavors that evoke the essence of bustling Indian bazaars.</p>
              <p>From the Bombay Sandwich and samosa sandwich to pav bhaji and chaat varieties, every dish is meticulously crafted to balance texture and spice. Wash it down with a chikku milkshake or one of our unique Indian-inspired eggless ice cream flavors.</p>
              <div className="about-highlights">
                <div className="highlight"><span className="highlight-icon">🌿</span><div><strong>100% Vegetarian</strong><p>Entirely plant-based menu with vegan options available</p></div></div>
                <div className="highlight"><span className="highlight-icon">🍦</span><div><strong>Homemade Ice Cream</strong><p>Eggless Indian ice cream flavors made fresh in-house</p></div></div>
                <div className="highlight"><span className="highlight-icon">🪑</span><div><strong>Relaxed Ambiance</strong><p>Outdoor seating available · Open daily until 9 PM</p></div></div>
              </div>
            </div>
            <div className="about-visual">
              <div className="visual-grid">
                <div className="visual-card v1"><span>🥙</span><p>Bombay Sandwich</p></div>
                <div className="visual-card v2"><span>🫕</span><p>Pav Bhaji</p></div>
                <div className="visual-card v3"><span>🧆</span><p>Samosa Chaat</p></div>
                <div className="visual-card v4"><span>🍦</span><p>Pista Kulfi</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="menu-section section">
        <div className="container">
          <span className="section-label">What We Serve</span>
          <h2>Our Menu</h2>
          <p className="section-sub">Fresh, authentic, and 100% vegetarian — from street food classics to homemade ice creams</p>
          <div className="menu-tabs">
            {menuData.map((cat,i)=>(
              <button key={i} className={"menu-tab"+(activeCategory===i?' active':'')} onClick={()=>setActiveCategory(i)}>{cat.emoji} {cat.category}</button>
            ))}
          </div>
          <div className="menu-items">
            <h3 className="menu-category-title">{menuData[activeCategory].emoji} {menuData[activeCategory].category}</h3>
            <div className="menu-grid">
              {menuData[activeCategory].items.map((item,i)=>(
                <div key={i} className="menu-item">
                  <span className="menu-item-name">{item.name}</span>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="reviews-section section">
        <div className="container">
          <span className="section-label">What Guests Say</span>
          <h2>Reviews</h2>
          <div className="overall-rating">
            <span className="big-rating">4.4</span>
            <div><StarRating count={4} /><p>698 Google Reviews · 4.8 on Yelp</p></div>
          </div>
          <div className="reviews-grid">
            {reviews.map((r,i)=>(
              <div key={i} className="review-card">
                <StarRating count={r.stars} />
                <p className="review-text">"{r.text}"</p>
                <p className="review-name">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section section">
        <div className="container">
          <span className="section-label">Find Us</span>
          <h2>Visit Us</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item"><span className="contact-icon">📍</span><div><strong>Address</strong><p>20304 Trout Creek Dr #101<br />Tampa, FL 33647</p></div></div>
              <div className="contact-item"><span className="contact-icon">📞</span><div><strong>Phone</strong><p><a href="tel:+18135911758">(813) 591-1758</a></p></div></div>
              <div className="contact-item"><span className="contact-icon">🕐</span><div><strong>Hours</strong><p>Open Daily · Closes 9 PM</p></div></div>
              <div className="contact-item"><span className="contact-icon">📱</span><div><strong>Instagram</strong><p><a href="https://instagram.com/icespicecafetampa" target="_blank" rel="noreferrer">@icespicecafetampa</a></p></div></div>
              <div className="contact-ctas">
                <a href="https://maps.google.com/?q=20304+Trout+Creek+Dr+%23101,+Tampa,+FL+33647" target="_blank" rel="noreferrer" className="btn btn-primary">Get Directions</a>
                <a href="tel:+18135911758" className="btn btn-secondary">Call to Order</a>
              </div>
            </div>
            <div className="map-embed">
              <iframe title="Ice Spice Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.0!2d-82.4182!3d28.1588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c72a30abe5cd%3A0x70be35a1d1988c62!2sIce%20Spice%20Indian%20Street%20Food%20Cafe!5e0!3m2!1sen!2sus!4v1720000000000" width="100%" height="350" style={{border:0,borderRadius:'16px'}} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-brand"><span>🌶️</span><span>Ice Spice Indian Street Food Café</span></div>
          <p>20304 Trout Creek Dr #101, Tampa, FL 33647 · (813) 591-1758</p>
          <p className="footer-copy">© {new Date().getFullYear()} Ice Spice Indian Street Food Café. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
