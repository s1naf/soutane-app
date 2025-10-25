<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'; // <-- ΠΡΟΣΘΕΣΕ watch & nextTick
import { Swiper, SwiperSlide } from 'swiper/vue'; // <-- ΝΕΟ
import 'swiper/css'; // <-- ΝΕΟ (Το βασικό CSS του Swiper)


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
const activeCategory = ref('Όλα');

// 3. (ΝΕΟ) Τα δεδομένα για το Hero Section (Βιογραφικό)
const bioData = {
  image: '/images/Screenshot_1.png',
  title: 'Η Τέχνη μου',
  // Εμπλουτισμένο κείμενο:
  description: 'Η τέχνη του εκκλησιαστικού κεντήματος είναι μια προσευχή που γίνεται με χρυσό και μετάξι. Μια γέφυρα που ενώνει την παράδοση αιώνων με τη σύγχρονη αφοσίωση στην τελειότητα.',
  date: 'Η ΦΙΛΟΣΟΦΙΑ ΜΟΥ'
};

// 4. (ΝΕΟ) Τα δεδομένα μας ΜΟΝΟ για το grid (χωρίς το Bio)
const allItems = [
  // --- SUB-CATEGORY: ΕΙΚΟΝΕΣ ---
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_3.png',
    title: 'Λεπτομέρεια Υφάσματος',
    description: 'Εδώ, ο χρόνος μετριέται σε χιλιάδες βελονιές, καμωμένες μία προς μία στο χέρι για απαράμιλλη λεπτομέρεια.',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_1.png',
    title: 'Ύψωσις Τιμίου Σταυρού',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_2.png',
    title: 'Κέντημα Εικόνας',
    description: 'Αποτυπώνοντας το θείο με ιριδίζον μετάξι και χρυσοκλωστή. Κάθε κλωστή, ένας φόρος τιμής στην παράδοση.',
    date: 'ΔΕΙΓΜΑΤΑ ΕΡΓΩΝ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_6.png',
    title: 'Άγιος Γεώργιος ο Τροπαιοφόρος',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_7.png',
    title: 'Εικόνα Αγίου Ιεράρχη',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_9.png',
    title: 'Άγιος Παΐσιος ο Αγιορείτης',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_17.png',
    title: 'Ο Καλός Ποιμήν (Χειροποίητο Πρόσωπο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
    {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_24.png',
    title: 'Χριστός Παντοκράτωρ (Κυκλική)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_26.png',
    title: 'Η Ανάστασις (Μικροκέντημα Σταυροειδές)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_29.png',
    title: 'Άγιος Ιωάννης ο Ελεήμων (Κάδρο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/Screenshot_23.png',
    title: 'Χριστός Παντοκράτωρ (Κυκλική Βυσσινί)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },

  // --- SUB-CATEGORY: ΑΜΦΙΑ ---
  {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/Screenshot_10.png',
    title: 'Επιτραχήλιο (Σκηνή Σταύρωσης)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/Screenshot_13.png',
    title: 'Εγκόλπιον Αρχιερατικό (Μικροκέντημα)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/Screenshot_11.png',
    title: 'Ζεύγος Επιμανικίων (Χερουβείμ)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/Screenshot_22.png',
    title: 'Επιτραχήλιο (Κόκκινο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/Screenshot_30.png',
    title: 'Φαιλόνιο (Κόκκινο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },

  // --- SUB-CATEGORY: ΚΑΛΥΜΜΑΤΑ & ΥΦΑΣΜΑΤΑ ---
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_5.png',
    title: 'Κάλυμμα Αγίας Τραπέζης',
    description: 'Ο σταυρός, κεντημένος με την παραδοσιακή τεχνική, συμβολίζει την αφοσίωση και την τέχνη.',
    date: 'ΑΦΟΣΙΩΣΗ ΣΤΗΝ ΤΕΧΝΗ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_16.png',
    title: 'Η Ανάστασις (Κάλυμμα ή Λάβαρο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_18.png',
    title: 'Κάλυμμα Αγίας Τραπέζης (Αρχιερεύς)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_15.png',
    title: 'Ο Μελισμός (Σετ Αγίας Τραπέζης)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_12.png',
    title: 'Η Κοίμησις της Θεοτόκου (Επιτάφιος)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_21.png',
    title: 'Σετ Λειτουργικών Καλυμμάτων (Λευκό)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_25.png',
    title: 'Επιτάφιος (Βυσσινί Βελούδο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_27.png',
    title: 'Κάλυμμα Αγίου Ποτηρίου (Πελεκάνος)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_28.png',
    title: 'Λεπτομέρεια Κεντήματος Υφάσματος (Βυσσινί)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },

  // --- SUB-CATEGORY: ΛΕΠΤΟΜΕΡΕΙΕΣ & ΣΧΕΔΙΑ ---
  {
    category: 'Δείγματα',
    subCategory: 'Λεπτομέρειες & Σχέδια',
    image: '/images/Screenshot_8.png',
    title: 'Λεπτομέρεια Χρυσοκεντήματος (Στάχυ)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Λεπτομέρειες & Σχέδια',
    image: '/images/Screenshot_19.png',
    title: 'Σχέδιο σε Ύφασμα (Στάχυ)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },

  // --- CATEGORY: ΕΠΙΚΟΙΝΩΝΙΑ ---
  {
    category: 'Επικοινωνία',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/Screenshot_4.png', // Change this image to something relevant
    title: 'Επικοινωνία',
    description: 'Έχετε ένα όραμα; Αναλαμβάνω ειδικές παραγγελίες, από νέα άμφια έως την ευλαβική αποκατάσταση παλαιών κεντημάτων.',
    date: 'ΕΠΙΚΟΙΝΩΝΙΑ'
  },
];

// 5. Η "μαγική" φιλτραρισμένη λίστα (λειτουργεί όπως πριν)
const filteredItems = computed(() => {
  // --- "ΟΛΑ" ---
  if (activeCategory.value === 'Όλα') {
    const item2 = allItems.find(item => item.image === '/images/Screenshot_2.png');
    const item1 = allItems.find(item => item.image === '/images/Screenshot_5.png');
    const item3 = allItems.find(item => item.image === '/images/Screenshot_3.png');
    const contactItem = allItems.find(item => item.category === 'Επικοινωνία');
    return [item2, item1, item3, contactItem].filter(Boolean); // Φιλτράρει τυχόν null
  }

  // --- "ΔΕΙΓΜΑΤΑ" ---
  if (activeCategory.value === 'Δείγματα') {
    const item2 = allItems.find(item => item.image === '/images/Screenshot_2.png');
    const item1 = allItems.find(item => item.image === '/images/Screenshot_5.png');
    const item3 = allItems.find(item => item.image === '/images/Screenshot_3.png');
    return [item1, item2, item3].filter(Boolean); // Φιλτράρει τυχόν null
  }

  // --- "ΕΠΙΚΟΙΝΩΝΙΑ" (ή οτιδήποτε άλλο) ---
  return allItems.filter(item => item.category === activeCategory.value);
});


// 6. Η λογική για το transition (λειτουργεί όπως πριν)
const isShrinking = ref(false)
watch(() => filteredItems.value.length, (next, prev) => {
  if (prev !== undefined) isShrinking.value = next < prev
})

// 7. (ΝΕΟ) Δημιουργούμε ένα ref για να "πιάσουμε" το DOM element του grid
const gridContainer = ref(null);

// 8. Ref για το ΝΕΟ container με τα Reels
const reelsContainerRef = ref(null);

// 9. Μεταβλητή που ελέγχει αν τα reels είναι ορατά
const showReels = ref(false);

// 10. Μια computed property που ΟΜΑΔΟΠΟΙΕΙ τα "Δείγματα"
const groupedSampleItems = computed(() => {
  // Παίρνουμε μόνο τα "Δείγματα"
  const samples = allItems.filter(item => item.category === 'Δείγματα');
  
  // Τα ομαδοποιούμε σε ένα αντικείμενο
  return samples.reduce((acc, item) => {
    const key = item.subCategory || 'Διάφορα'; // Μια κατηγορία "fallback"
    
    if (!acc[key]) {
      acc[key] = []; // Δημιούργησε τη λίστα αν δεν υπάρχει
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof allItems>);
});

// 11. Η συνάρτηση που καλεί το "Show More" (τώρα "Show Reels")
function toggleReelsView() {
  // Αποθηκεύουμε την τρέχουσα κατάσταση
  const wasHidden = !showReels.value;
  
  // Αλλάζουμε την κατάσταση (από true σε false ή το αντίστροφο)
  showReels.value = !showReels.value;

  // Αν η κατάσταση ΗΤΑΝ "κρυμμένη" (και τώρα την ΑΝΟΙΞΑΜΕ)...
  if (wasHidden) {
    // ...κάνε scroll στο container
    nextTick(() => {
      if (reelsContainerRef.value) {
        (reelsContainerRef.value as HTMLElement).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}

// 8. (ΝΕΟ) Μια συνάρτηση που κάνει το scroll
function scrollToGrid() {
  // Ελέγχουμε αν το gridContainer υπάρχει
  if (gridContainer.value) {
    // Χρησιμοποιούμε τη native browser API για να κάνουμε scroll
    (gridContainer.value as any).$el.scrollIntoView({
      behavior: 'smooth', // Για ομαλή κίνηση
      block: 'start'      // Στοίχιση με την κορυφή του στοιχείου
    });
  }
}

// 9. (ΝΕΟ) "Ακούμε" τις αλλαγές στο activeCategory
// 9. (ΝΕΟ) Η "έξυπνη" συνάρτηση που θα καλούν τα κουμπιά
function handleFilterClick(newCategory: string, shouldScroll: boolean = true) {
  
  // (ΝΕΟ) Κρύψε τα reels κάθε φορά που αλλάζεις φίλτρο
  showReels.value = false;
  
  // 1. Άλλαξε το φίλτρο, όπως και να 'χει
  activeCategory.value = newCategory;

  
 // 2. Έλεγξε αν πρέπει να κάνει scroll (ΜΟΝΟ αν το shouldScroll είναι true)
  if (shouldScroll) {
    if (newCategory === 'All') {
      // Αν πάτησε "All" (από το header), τον στέλνουμε στην κορυφή
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Αν πάτησε "Δείγματα" (από το header), τον στέλνουμε στο grid
      nextTick(() => {
        scrollToGrid(); // Αυτό καλεί τη συνάρτηση που φτιάξαμε
      });
    }
  }
}

// (ΝΕΟ) 1. Η λίστα που καθορίζει τη ΣΕΙΡΑ των φίλτρων
const filterCategories = ['Όλα', 'Δείγματα', 'Επικοινωνία'];

// (ΝΕΟ) 2. Μια computed property που μας λέει σε ποιο "βήμα" (index) βρισκόμαστε
const currentFilterIndex = computed(() => {
  return filterCategories.indexOf(activeCategory.value);
});

// (ΝΕΟ) 3. Οι συναρτήσεις Next/Prev
function nextFilter() {
  const nextIndex = currentFilterIndex.value + 1;
  if (nextIndex < filterCategories.length) {
    // Πρόσθεσε το ", false" για να ΜΗΝ κάνει scroll
    handleFilterClick(filterCategories[nextIndex]!, false);
  }
}

function prevFilter() {
  const prevIndex = currentFilterIndex.value - 1;
  if (prevIndex >= 0) {
    // Πρόσθεσε το ", false" για να ΜΗΝ κάνει scroll
    handleFilterClick(filterCategories[prevIndex]!, false);
  }
}
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
          @click="handleFilterClick('Όλα')"  
          :class="{ active: activeCategory === 'Όλα' }">
          Όλα
        </button>
        <button 
          type="button" 
          @click="handleFilterClick('Δείγματα')" 
          :class="{ active: activeCategory === 'Δείγματα' }">
          Δείγματα
        </button>
        <button 
          type="button" 
          @click="handleFilterClick('Επικοινωνία')" 
          :class="{ active: activeCategory === 'Επικοινωνία' }">
          Επικοινωνία
        </button>

      </nav>
    
    </header>

  

    <section class="hero-bio">
      <div class="hero-content">
        <p class="hero-date">{{ bioData.date }}</p>
        <h2 class="hero-title">{{ bioData.title }}</h2>
        <p class="hero-description">{{ bioData.description }}</p>
      </div>
      <div class="hero-image">
        <NuxtImg 
          :src="bioData.image" 
          :alt="bioData.title" 
          format="webp" 
          quality="80"
          loading="lazy"
        />
      </div>
    </section>

    <nav class="filter-stepper-nav">
      <div class="stepper-prev">
        <button 
          type="button" 
          @click="prevFilter" 
          :disabled="currentFilterIndex === 0">
          &lt; {{ filterCategories[currentFilterIndex - 1] }}
        </button>
      </div>

      <span class="filter-stepper-label">
        {{ filterCategories[currentFilterIndex] }}
      </span>

      <div class="stepper-next">
        <button 
          type="button" 
          @click="nextFilter" 
          :disabled="currentFilterIndex === filterCategories.length - 1">
          {{ filterCategories[currentFilterIndex + 1] }} &gt;
        </button>
      </div>
    </nav>

<TransitionGroup ref="gridContainer" 
tag="main" 
name="list" 
:class="['content-grid', { 'is-shrinking': isShrinking }]" >
<article 
  v-for="(item, index) in filteredItems"  
  :key="item?.title || index"  
  class="grid-item"
>
  <template v-if="item"> 
    <div class="item-image">
      <NuxtImg 
        :src="item.image" 
        :alt="item.title" 
        format="webp" 
        quality="80"
        loading="lazy"
      />
    </div>
    <h3 
      class="item-title" 
      :class="{ 'is-clickable': activeCategory !== item.category }"
      @click="activeCategory = item.category"> 
      {{ item.title }} 
    </h3>
    <p class="item-description">{{ item.description }}</p> 
    <p class="item-date">{{ item.date }}</p> 
  </template>

</article>
</TransitionGroup>

  
 

  
  <section
    v-if="activeCategory === 'Δείγματα'"
    ref="reelsContainerRef" 
    :class="['reels-wrapper', { 'is-expanded': showReels }]"
  >
    <div class="reels-content">
      <div 
        v-for="(items, categoryName) in groupedSampleItems" 
        :key="categoryName"
        class="reel-category"
      >
        <h2 class="reel-category-title">{{ categoryName }}</h2>
        <Swiper
          :slides-per-view="'auto'"
          :space-between="20"
        >
          <SwiperSlide 
            v-for="item in items" 
            :key="item.title"
            class="reel-slide"
          >
            <div class="card-item">
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
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div> <div class="reels-controller">
      <hr /> <button type="button" @click="toggleReelsView" class="reels-toggle-button">
        <span v-if="!showReels">Προβολή ανά Κατηγορία</span>
        <span v-else>Απόκρυψη</span>
      </button>
    </div>

  </section>

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

/* --- Hero Bio Section --- */
.hero-bio {
  display: grid;
  /* 2 στήλες σε desktop */
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 50px;
  padding: 50px;
  margin-bottom: 60px; /* Κενό πριν το grid */
  background-color: #f8f8f8;
  border-radius: 8px;
}

.hero-image img {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3; /* Ίδια αναλογία με τις κάρτες */
  object-fit: cover;
  border-radius: 4px;
}

.hero-content {
  /* Η σειρά έχει αλλάξει στο template, οπότε δεν χρειάζεται flex-direction */
}

.hero-date {
  /* Αντιγραφή από .item-date */
  font-size: 0.8rem;
  font-weight: 500;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0 0 12px 0;
}

.hero-title {
  /* Μεγαλύτερος τίτλος */
  font-size: 2.2rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #1a1a1a;
}

.hero-description {
  /* Μεγαλύτερη περιγραφή */
  font-size: 1.1rem;
  font-weight: 400;
  color: #444;
  line-height: 1.6;
}
/* --- ΝΕΟ: Filter Stepper Nav --- */
.filter-stepper-nav {
  display: grid;
  /* Τρεις στήλες: (Κουμπί) - (Label) - (Κουμπί) */
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 30px; 
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.filter-stepper-nav button {
  background: none;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  color: #1a1a1a;
  transition: color 0.2s ease;
}

.stepper-prev {
  justify-self: start;
}
/* Στοίχιση για το δεξί κουμπί */
.stepper-next {
  justify-self: end;
}



.filter-stepper-nav button:hover {
  color: #666;
}

.filter-stepper-nav button:disabled {
  color: #aaa;
  cursor: not-allowed;
  opacity: 0.5;
}

.filter-stepper-label {
  justify-self: center;
  font-size: 1.2rem;
  color: #1a1a1a;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
/* Responsive για το filter-stepper */
@media (max-width: 640px) {
  .filter-stepper-label {
    font-size: 1rem;
  }
  .filter-stepper-nav {
    margin-bottom: 20px;
    padding: 15px 0;
  }
}


/* --- Responsive για το Hero --- */
@media (max-width: 900px) {
  .hero-bio {
    /* 1 στήλη σε tablet/κινητά */
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 30px;
  }
  
  .hero-image {
    /* Η εικόνα πάει 2η τώρα, οπότε η σειρά είναι σωστή */
  }

  .hero-title {
    font-size: 1.8rem;
  }
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
  /* justify-items: center; */
  scroll-margin-top: 20px;
}
.show-more-wrapper { /* <-- ΣΩΣΤΟ (με τελεία) */
text-align: center;
margin: 40px 0;
}
.show-more-button {
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.show-more-button:hover {
  background-color: #444;
}

/* --- CSS για τη "Card" (card-item) --- */
.card-item {
  width: 100%; 
  max-width: 360px; 
}

/* --- ΝΕΟ CSS ΓΙΑ ΤΑ REELS --- */
.reels-wrapper { /* ΣΩΣΤΟ ΟΝΟΜΑ (ίδιο με το template) */
/* Αυτός είναι ο νέος στόχος του scroll */
scroll-margin-top: 20px;
width: 100%;
}
.reels-content {
  max-height: 300px; /* Ξεκινάει "κλειστό" (teaser) */
  overflow: hidden;
  transition: max-height 0.6s ease-in-out;
  
  /* * ΑΥΤΟ ΕΙΝΑΙ ΤΟ "ΑΧΝΟΦΑΙΝΕΣΘΑΙ"
   * Δημιουργεί μια μάσκα που "σβήνει" το περιεχόμενο στο κάτω μέρος.
  */
  -webkit-mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 60%, transparent 100%);
}

.reels-wrapper.is-expanded .reels-content {
  max-height: 10000px; /* "Ανοίγει" (ένας μεγάλος αριθμός) */
  -webkit-mask-image: none; /* Αφαιρεί τη μάσκα */
  mask-image: none;
}

.reels-wrapper {
  position: relative;
  scroll-margin-top: 20px; /* Το κρατάμε για το scroll */
  margin-top: 40px; /* Κενό από το grid */
}

.reels-controller {
  text-align: center;
  /* * Τοποθετείται *πάνω* από το "σβήσιμο" της μάσκας 
   * (αλλά όχι πάνω από το περιεχόμενο) 
  */
  margin-top: -30px; /* Το τραβάει λίγο προς τα πάνω */
  position: relative; /* Για να είναι πάνω από τη μάσκα */
  z-index: 2; /* Πάνω από τη μάσκα, κάτω από το περιεχόμενο */
  
  /* Όταν ανοίξει, παίρνει τη φυσιολογική του θέση */
  transition: margin-top 0.6s ease;
}
.reels-wrapper.is-expanded .reels-controller {
  margin-top: 20px; /* Πάει στο κάτω μέρος */
}

.reels-controller hr {
  border: none;
  border-top: 1px solid #eee;
  margin-bottom: 20px;
}
.reels-toggle-button {
  /* Αντιγράφουμε το στυλ του παλιού .show-more-button */
  background-color: #1a1a1a;
  color: #ffffff;
  border: none;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.reels-toggle-button:hover {
  background-color: #444;
}

.reel-category {
  margin-bottom: 40px; /* Κενό μεταξύ των carousels */
}

.reel-category-title {
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
}

/* Αυτό ορίζει το πλάτος της κάθε κάρτας στο carousel */
.reel-slide {
  width: 320px; /* Μπορείς να παίξεις με αυτό το νούμερο */
  max-width: 100%;
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