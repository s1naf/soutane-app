<script setup lang="ts">

// 1. Ρυθμίσεις SEO
useHead({
  title: 'Χειροποίητα Εκκλησιαστικά Κεντήματα | [Όνομα Φίλης]',
  meta: [
    { name: 'description', content: 'Χειροποίητα εκκλησιαστικά κεντήματα φτιαγμένα με παραδοσιακές τεχνικές και υλικά υψηλής ποιότητας.' },
    { name: 'keywords', content: 'εκκλησιαστικα κεντηματα, χειροποιητα κεντηματα, ραπτικη, χρυσοκεντηματα' }
    // ... (και τα άλλα meta tags που είχαμε)
  ],
  // ... (οι γραμματοσειρές μένουν ίδιες)
});

// 3. Τα δεδομένα μας. Αντί να τα γράφουμε στο HTML, τα βάζουμε εδώ.
// Εδώ θα βάλεις τις φωτογραφίες και τα κείμενα της φίλης σου.
const galleryItems = [
  {
    image: '/images/Screenshot_1.png', // Από το /public/images/
    title: 'Βιογραφικό',
    description: 'Λίγα λόγια για εμένα, την πορεία μου και την αγάπη μου για την παραδοσιακή ραπτική.',
    date: 'Η ΦΙΛΟΣΟΦΙΑ ΜΟΥ'
  },
  {
    image: '/images/Screenshot_2.png',
    title: 'Ράσο τύπου Α (Κλασικό)',
    description: 'Κατασκευασμένο από 100% Ιταλικό ύφασμα, με έμφαση στην άνεση και την αντοχή.',
    date: 'ΔΕΙΓΜΑΤΑ'
  },
  {
    image: '/images/Screenshot_3.png',
    title: 'Λεπτομέρεια Ραφής',
    description: 'Κάθε βελονιά γίνεται στο χέρι, εξασφαλίζοντας μοναδική ποιότητα.',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },
  {
    image: '/images/Screenshot_4.png',
    title: 'Επικοινωνία',
    description: 'Επικοινωνήστε μαζί μου για ειδικές παραγγελίες ή για να συζητήσουμε τις ανάγκες σας.',
    date: 'ΕΠΙΚΟΙΝΩΝΙΑ'
  }
];
</script>

<template>
  <div class="page-wrapper">

    <header class="main-header">
      <div class="logo">
        Η Τέχνη της [Όνομα Φίλης]
      </div>
      <nav class="main-nav">
        <span>Filter:</span>
        <a href="#" class="active">All</a>
        <a href="#">Βιογραφικό</a>
        <a href="#">Δείγματα</a>
        <a href="#">Επικοινωνία</a>
      </nav>
    </header>

    <main class="content-grid">

      <article v-for="item in galleryItems" :key="item.title" class="grid-item">

        <div class="item-image">
          <NuxtImg
              :src="item.image"
              :alt="item.title"
              format="webp"
              quality="80"
              loading="lazy"
          />
        </div>

        <h3 class="item-title">{{ item.title }}</h3>
        <p class="item-description">{{ item.description }}</p>
        <p class="item-date">{{ item.date }}</p>

      </article>

    </main>

    <footer class="main-footer">
      <div class="footer-brand">
        [Όνομα Φίλης] © 2025
      </div>
      <div class="footer-credits">
        Curated by [Το Όνομά σου]
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* * Αυτό είναι το CSS που "χτίζει" το design.
 * Βασίζεται στη γραμματοσειρά 'Inter' που φορτώσαμε.
*/

/* --- Γενική Δομή --- */
:global(body) {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #ffffff;
  color: #1a1a1a;
  margin: 0;
  padding: 0;
}

.page-wrapper {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px;
  box-sizing: border-box;
}

/* --- Header / Navigation --- */
.main-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 0;
  margin-bottom: 20px;
}
.logo {
  font-size: 1.1rem;
  font-weight: 500;
}
.main-nav {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  font-size: 1.1rem;
}
.main-nav span {
  color: #888; /* Το "Filter:" είναι γκρι */
}
.main-nav a {
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 500;
  transition: color 0.2s ease;
}
.main-nav a:hover {
  color: #666;
}
.main-nav a.active {
  /* Μπορείς να βάλεις ένα styling για το ενεργό φίλτρο */
}

/* --- Το Grid με τις Εικόνες --- */
.content-grid {
  display: grid;
  /* * Αυτή είναι η μαγεία: 4 στήλες.
   * Σε μικρότερες οθόνες, θα το αλλάξουμε (δες @media παρακάτω)
  */
  grid-template-columns: repeat(4, 1fr);
  gap: 30px; /* Κενό μεταξύ των στηλών και γραμμών */
}

.grid-item {
  /* Δεν χρειάζεται καθόλου styling (πλαίσια, σκιές, κλπ) */
  /* Το design είναι "γυμνό" */
}

.item-image {
  background-color: #f0f0f0; /* Ένα placeholder χρώμα όσο φορτώνει η εικόνα */
  margin-bottom: 12px;
}
.item-image img {
  /* Αυτό κάνει την εικόνα να γεμίζει το div */
  width: 100%;
  height: auto;
  /* * Κρατάμε μια αναλογία π.χ. 4:3.
   * Μπορείς να το αλλάξεις ή να το βγάλεις αν οι εικόνες σου έχουν άλλες αναλογίες.
  */
  aspect-ratio: 4 / 3;
  object-fit: cover; /* Κόβει την εικόνα για να ταιριάξει, αντί να παραμορφώνεται */
  display: block;
}

.item-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 8px 0;
}

.item-description {
  font-size: 1rem;
  font-weight: 400;
  color: #555; /* Λίγο πιο γκρι το κείμενο */
  line-height: 1.5;
  margin: 0 0 12px 0;
}

.item-date {
  font-size: 0.8rem;
  font-weight: 500;
  color: #888;
  text-transform: uppercase; /* ΚΕΦΑΛΑΙΑ, όπως στο design */
  letter-spacing: 0.5px;
  margin: 0;
}

/* --- Footer --- */
.main-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
  margin-top: 60px;
  border-top: 1px solid #eee;
  font-size: 1rem;
  font-weight: 500;
  color: #666;
}

/* --- Responsive Design (Για Κινητά) --- */

/* Για Tablets */
@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 στήλες */
    gap: 25px;
  }
  .page-wrapper {
    padding: 0 25px;
  }
}

/* Για Κινητά */
@media (max-width: 640px) {
  .content-grid {
    grid-template-columns: 1fr; /* 1 στήλη */
    gap: 40px; /* Μεγαλύτερο κενό κάθετα */
  }
  .page-wrapper {
    padding: 0 20px;
  }
  .main-header {
    flex-direction: column; /* Το μενού μπαίνει κάτω από το logo */
    gap: 20px;
    align-items: flex-start;
  }
  .main-nav {
    align-items: flex-start;
  }
  .item-title {
    font-size: 1.2rem; /* Λίγο μεγαλύτερος τίτλος στα κινητά */
  }
}
</style>