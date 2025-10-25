<script setup lang="ts">
import { ref, computed } from 'vue'; // Πρόσθεσε τα ref και computed

// 1. Ρυθμίσεις SEO (όπως και πριν)
useHead({
  title: 'Χειροποίητα Εκκλησιαστικά Κεντήματα | [Όνομα Φίλης]',
  meta: [
    { name: 'description', content: 'Χειροποίητα εκκλησιαστικά κεντήματα φτιαγμένα με παραδοσιακές τεχνικές.' },
    { name: 'keywords', content: 'εκκλησιαστικα κεντηματα, χειροποιητα κεντηματα, ραπτικη, χρυσοκεντηματα' }
  ],
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap', rel: 'stylesheet' }
  ]
});

// 2. Η μεταβλητή που "θυμάται" το φίλτρο. Ξεκινάει με 'All'.
const activeCategory = ref('All');

// 3. Τα δεδομένα μας, ΤΩΡΑ ΜΕ 'category'
const allItems = [
  {
    category: 'Bio', // <-- Η νέα κατηγορία
    image: '/images/Screenshot_1.png',
    title: 'Βιογραφικό',
    description: 'Λίγα λόγια για την τέχνη του χειροποίητου εκκλησιαστικού κεντήματος.',
    date: 'Η ΦΙΛΟΣΟΦΙΑ ΜΟΥ'
  },
  {
    category: 'Samples', // <-- Η νέα κατηγορία
    image: '/images/Screenshot_2.png',
    title: 'Κέντημα Εικόνας',
    description: 'Κατασκευασμένο με χρυσοκλωστή και μεταξωτές κλωστές.',
    date: 'ΔΕΙΓΜΑΤΑ ΕΡΓΩΝ'
  },
  {
    category: 'Samples', // <-- Κι άλλο δείγμα
    image: '/images/Screenshot_3.png',
    title: 'Λεπτομέρεια Υφάσματος',
    description: 'Κάθε βελονιά γίνεται στο χέρι, εξασφαλίζοντας μοναδική ποιότητα.',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },
  {
    category: 'Contact', // <-- Η νέα κατηγορία
    image: '/images/Screenshot_4.png',
    title: 'Επικοινωνία',
    description: 'Επικοινωνήστε μαζί μου για ειδικές παραγγελίες και αποκαταστάσεις.',
    date: 'ΕΠΙΚΟΙΝΩΝΙΑ'
  },
  // Πρόσθεσε όσα άλλα θες...
  {
    category: 'Samples',
    image: '/images/Screenshot_5.png',
    title: 'Κάλυμμα Αγίας Τραπέζης',
    description: 'Με χειροποίητο κέντημα του σταυρού.',
    date: 'ΔΕΙΓΜΑΤΑ ΕΡΓΩΝ'
  }
];

// 4. Η "μαγική" φιλτραρισμένη λίστα
const filteredItems = computed(() => {
  // Αν το φίλτρο είναι 'All', δείξ' τα όλα
  if (activeCategory.value === 'All') {
    return allItems;
  }
  // Αλλιώς, φίλτραρε τη λίστα
  return allItems.filter(item => item.category === activeCategory.value);
});

const isShrinking = ref(false)
watch(() => filteredItems.value.length, (next, prev) => {
  if (prev !== undefined) isShrinking.value = next < prev
})
</script>

<template>
  <div class="page-wrapper">

    <header class="main-header">
      <div class="logo">
        Χειροποίητα Κεντήματα Κωνσταντίνα
      </div>
      <nav class="main-nav">
        <span>Filter:</span>
        <button 
          type="button" 
          @click="activeCategory = 'All'" 
          :class="{ active: activeCategory === 'All' }">
          All
        </button>
        <button 
          type="button" 
          @click="activeCategory = 'Bio'" 
          :class="{ active: activeCategory === 'Bio' }">
          Βιογραφικο
        </button>
        <button 
          type="button" 
          @click="activeCategory = 'Samples'" 
          :class="{ active: activeCategory === 'Samples' }">
          Δείγματα
        </button>
        <button 
          type="button" 
          @click="activeCategory = 'Contact'" 
          :class="{ active: activeCategory === 'Contact' }">
          Επικοινωνία
        </button>
      </nav>
    </header>

    <TransitionGroup 
      tag="main" 
      name="list" 
      :class="['content-grid', { 'is-shrinking': isShrinking }]"
    >
      
      <article v-for="item in filteredItems" :key="item.title" class="grid-item">
        
        <div class="item-image">
          <NuxtImg 
            :src="item.image" 
            :alt="item.title" 
            format="webp" 
            quality="80"
            loading="lazy"
          />
        </div>
        
        <!-- <h3 class="item-title" @click="activeCategory = item.category">
          {{ item.title }}
        </h3>
        <p class="item-description">{{ item.description }}</p>
        <p class="item-date">{{ item.date }}</p> -->
      
        <h3 
          class="item-title" 
          :class="{ 'is-clickable': activeCategory !== item.category }"
          @click="activeCategory = item.category">
          {{ item.title }}
        </h3>
        <p class="item-description">{{ item.description }}</p>
        <p class="item-date">{{ item.date }}</p>


      </article>

    </TransitionGroup>

   <!-- <section id="contact" class="contact-section">
      <div class="container">
        <h2>Επικοινωνία</h2>
        <p>Για παραγγελίες, ερωτήσεις ή ειδικές κατασκευές, μη διστάσετε να επικοινωνήσετε.</p>
        <div class="contact-details">
          <p><strong>Email:</strong> info@domainfilis.gr</p>
          <p><strong>Τηλέφωνο:</strong> 210 123 4567</p>
          <p><strong>Διεύθυνση:</strong> [Όνομα Οδού 123, Πόλη]</p>
        </div>
      </div>
    </section> -->

   <footer class="main-footer">
      
      <div class="footer-brand">
        Κωνσταντίνα © 2025
      </div>
      
      <div class="footer-credits">
        Curated by Theofanis
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

.main-nav button {
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: 'Inter', sans-serif; /* Να έχει την ίδια γραμματοσειρά */
  font-size: 1.1rem; /* Ίδιο μέγεθος με πριν */
  font-weight: 500;
  color: #1a1a1a;
  transition: color 0.2s ease;
  text-align: right; /* Να είναι δεξιά στοιχισμένα */
}

.main-nav button:hover {
  color: #666;
}

/* Αυτό είναι το στυλ για το κουμπί που είναι πατημένο */
.main-nav button.active {
  color: #000;
  text-decoration: underline; /* Το υπογραμμίζουμε για να φαίνεται */
  text-underline-offset: 4px; /* Λίγο κενό στην υπογράμμιση */
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

  /* grid-template-columns: repeat(4, 1fr); */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  gap: 30px; /* Κενό μεταξύ των στηλών και γραμμών */
  position: relative;
}

.grid-item {
  /* Δεν χρειάζεται καθόλου styling (πλαίσια, σκιές, κλπ) */
  /* Το design είναι "γυμνό" */
  width: 100%; /* <-- ΠΡΟΣΘΕΣΕ ΑΥΤΟ */
  max-width: 360px; /* <-- ΠΡΟΣΘΕΣΕ ΑΥΤΟ (το νούμερο του desktop) */
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
  /* 'cursor: pointer' ΕΦΥΓΕ ΑΠΟ ΕΔΩ */
  display: inline-block;
  transition: color 0.2s ease;
}

/* * Μόνο όταν το item ΕΙΝΑΙ clickable, 
 * βάζουμε τον cursor και το hover effect.
*/
.item-title.is-clickable {
  cursor: pointer;
}

.item-title.is-clickable:hover {
  color: #666;
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

/* --- Transitions για το Grid (List) --- */


.list-enter-active {
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. Leave (από πολλά σε λίγα) - ΠΟΛΥ ΓΡΗΓΟΡΑ */
.list-leave-active {
  transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1);
  /* Όταν μειώνονται τα items, κάνε absolute */
  position: absolute;
}

/* Όταν ΑΥΞΑΝΟΝΤΑΙ τα items, κράτα relative */
.content-grid:not(.is-shrinking) .list-leave-active {
  position: relative;
}

/* 3. Move (Το "γλίστρημα") - ΜΕΤΡΙΑ ΤΑΧΥΤΗΤΑ */
.list-move {
  transition: transform  0.6s cubic-bezier(0.55, 0, 0.1, 1);
  /* 3. Move (Το "γλίστρημα") - ΣΥΓΧΡΟΝΙΣΜΕΝΟ */
}

/* 4. Πώς μπαίνουν τα νέα items */
.list-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

/* 5. Πώς φεύγουν τα παλιά items */
.list-leave-to {
  opacity: 0;
  transform: scale(0.9);
}


/* --- Responsive Design (Για Κινητά) --- */

/* Για Tablets */
@media (max-width: 1024px) {
/* * ΣΒΗΣΕ ΑΥΤΑ ΤΑ 3:
   * .content-grid {
   * grid-template-columns: repeat(2, 1fr); 
   * gap: 25px;
   * }
   */
  .page-wrapper {
    padding: 0 25px;
  }
}

/* Για Κινητά */
@media (max-width: 640px) {
/* * ΣΒΗΣΕ ΑΥΤΑ ΤΑ 3:
   * .content-grid {
   * grid-template-columns: 1fr; 
   * gap: 40px;
   * }
   */
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
  .main-nav button {
    text-align: left; /* Αριστερή στοίχιση στα κινητά */
  }
  .item-title {
    font-size: 1.2rem; /* Λίγο μεγαλύτερος τίτλος στα κινητά */
  }
}
</style>