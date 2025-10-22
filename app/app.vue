<script setup lang="ts">
// --- SEO & HEAD MANAGEMENT ---
// Αυτό είναι το σύγχρονο "composable" του Nuxt για να διαχειριστείς το <head>
// Είναι ο σωστός τρόπος για το SEO.
useHead({
  title: 'Η Τέχνη της Ραπτικής | Χειροποίητα Ράσα',
  meta: [
    {
      name: 'description',
      content: 'Χειροποίητα ράσα φτιαγμένα με τέχνη και υλικά υψηλής ποιότητας. Επικοινωνήστε για ειδικές παραγγελίες.'
    },
    {
      name: 'keywords',
      content: 'ράσα, soutane, ραπτική, χειροποίητα, εκκλησιαστικά είδη'
    }
  ],
  // Μπορείς να προσθέσεις και Open Graph tags για το Facebook/Social Media
  // <meta property="og:title" content="..."> κλπ.
});

</script>

<template>
  <div id="app-wrapper">

    <header class="navbar">
      <div class="container">
        <div class="logo">Η Τέχνη της [Όνομα Φίλης]</div>
        <nav>
          <a href="#about">Βιογραφικό</a>
          <a href="#gallery">Δείγματα</a>
          <a href="#contact">Επικοινωνία</a>
        </nav>
      </div>
    </header>

    <section class="hero">
      <div class="hero-content">
        <h1>Σύγχρονη Ραπτική με Σεβασμό στην Παράδοση</h1>
        <p>Χειροποίητα ράσα φτιαγμένα με τέχνη και υλικά υψηλής ποιότητας.</p>
        <a href="#contact" class="cta-button">Επικοινωνήστε Μαζί μας</a>
      </div>
    </section>

    <section id="about" class="about-section">
      <div class="container split-layout">
        <div class="about-image">
          <img src="/images/favicon.ico" alt="Πορτρέτο της [Όνομα Φίλης]">
        </div>
        <div class="about-text">
          <h2>Λίγα Λόγια για εμένα</h2>
          <p>Μεγάλωσα με... [Εδώ γράφεις το βιογραφικό της]. Η αγάπη μου για την ραπτική ξεκίνησε όταν... Η φιλοσοφία μου είναι να συνδυάζω την παραδοσιακή τεχνική με σύγχρονα, ανθεκτικά υφάσματα. Κάθε ράσο είναι μοναδικό, φτιαγμένο στο χέρι, με προσοχή στην παραμικρή λεπτομέρεια...</p>
          <p>Πιστεύω ότι η ποιότητα δεν είναι πολυτέλεια, αλλά αναγκαιότητα.</p>
        </div>
      </div>
    </section>

    <section id="gallery" class="gallery-section">
      <div class="container">
        <h2>Δείγματα Δουλειάς</h2>
        <div class="gallery-grid">
          <div class="gallery-item"><img src="/images/favicon.ico" alt="Δείγμα ράσου 1"></div>
          <div class="gallery-item"><img src="/images/favicon.ico" alt="Λεπτομέρεια υφάσματος"></div>
          <div class="gallery-item"><img src="/images/favicon.ico" alt="Δείγμα ράσου 2"></div>
          <div class="gallery-item"><img src="/images/favicon.ico" alt="Διαδικασία ραφής"></div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="container">
        <h2>Επικοινωνία</h2>
        <p>Για παραγγελίες, ερωτήσεις ή ειδικές κατασκευές, μη διστάσετε να επικοινωνήσετε.</p>
        <div class="contact-details">
          <p><strong>Email:</strong> info@domainfilis.gr</p>
          <p><strong>Τηλέφωνο:</strong> 210 123 4567</p>
          <p><strong>Διεύθυνση:</strong> [Όνομα Οδού 123, Πόλη]</p>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 [Όνομα Φίλης]. All rights reserved.</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* --- Global Styles (Μοντέρνα Αισθητική) --- */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

:root {
  --primary-color: #333;
  --secondary-color: #1a1a1a;
  --accent-color: #bfa05b;
  --bg-color: #f9f9f9;
  --font-main: 'Roboto', sans-serif;
}

/* Επειδή το style είναι 'scoped', για να ορίσουμε global styles
  όπως το body, χρησιμοποιούμε το :global()
*/
:global(body) {
  font-family: var(--font-main);
  background-color: var(--bg-color);
  color: var(--primary-color);
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

:global(*) {
  box-sizing: border-box;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

h1, h2 {
  font-weight: 700;
  margin-bottom: 20px;
}

h1 {
  font-size: 2.8rem;
}

h2 {
  font-size: 2.2rem;
  color: var(--secondary-color);
  text-align: center;
}

section {
  padding: 60px 0;
}

/* --- Navbar --- */
.navbar {
  background: #fff;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}
.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar .logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
}
.navbar nav a {
  color: var(--primary-color);
  text-decoration: none;
  margin-left: 20px;
  font-weight: 400;
  transition: color 0.3s ease;
}
.navbar nav a:hover {
  color: var(--accent-color);
}

/* --- Hero Section --- */
.hero {
  background: var(--secondary-color);
  color: #fff;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  padding: 100px 20px;
}
.hero-content {
  z-index: 2;
}
.hero h1 {
  font-weight: 300;
  font-size: clamp(2.5rem, 5vw, 3.5rem); /* Responsive typography */
}
.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}
.cta-button {
  background: var(--accent-color);
  color: #fff;
  padding: 12px 25px;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 700;
  transition: background 0.3s ease;
}
.cta-button:hover {
  background: #a98d4d;
}

/* --- About Section --- */
.about-section {
  background: #fff;
}
.split-layout {
  display: flex;
  flex-wrap: wrap; /* Για responsive */
  align-items: center;
  gap: 40px;
}
.about-image {
  flex: 1;
  min-width: 280px; /* Για responsive */
}
.about-image img {
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.about-text {
  flex: 1.5;
  min-width: 300px; /* Για responsive */
}
.about-text h2 {
  text-align: left;
}

/* --- Gallery Section --- */
.gallery-section h2 {
  margin-bottom: 40px;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.gallery-item img {
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Για να έχουν ίδιο μέγεθος οι εικόνες */
}
.gallery-item img:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
}

/* --- Contact Section --- */
.contact-section {
  background: #fff;
  text-align: center;
}
.contact-details {
  margin-top: 30px;
  font-size: 1.1rem;
}
.contact-details p {
  margin-bottom: 10px;
}

/* --- Footer --- */
.footer {
  background: var(--secondary-color);
  color: #aaa;
  text-align: center;
  padding: 30px 0;
}
</style>