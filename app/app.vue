<script setup lang="ts">

// Βασικές εισαγωγές και composables
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';

// Swiper (carousel) components και βασικό CSS
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';


// SEO: βασικές ρυθμίσεις
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

// Κατάσταση: ενεργή κατηγορία φίλτρου
const activeCategory = ref('Όλα');



// Δεδομένα Hero (βιογραφικό)
const bioData = {
  image: '/images/screenshot_1.png',
  title: 'Η Τέχνη μου',
  // Εμπλουτισμένο κείμενο:
  description: 'Η τέχνη του εκκλησιαστικού κεντήματος είναι μια προσευχή που γίνεται με χρυσό και μετάξι. Μια γέφυρα που ενώνει την παράδοση αιώνων με τη σύγχρονη αφοσίωση στην τελειότητα.',
  date: 'Η ΦΙΛΟΣΟΦΙΑ ΜΟΥ'
};

// Δεδομένα για το grid (χωρίς το Hero)
const allItems = [
  // --- SUB-CATEGORY: ΕΙΚΟΝΕΣ ---
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_3.png',
    title: 'Λεπτομέρεια Υφάσματος',
    description: 'Εδώ, ο χρόνος μετριέται σε χιλιάδες βελονιές, καμωμένες μία προς μία στο χέρι για απαράμιλλη λεπτομέρεια.',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_1.png',
    title: 'Ύψωσις Τιμίου Σταυρού',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_2.png',
    title: 'Κέντημα Εικόνας',
    description: 'Αποτυπώνοντας το θείο με ιριδίζον μετάξι και χρυσοκλωστή. Κάθε κλωστή, ένας φόρος τιμής στην παράδοση.',
    date: 'ΔΕΙΓΜΑΤΑ ΕΡΓΩΝ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_6.png',
    title: 'Άγιος Γεώργιος ο Τροπαιοφόρος',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_7.png',
    title: 'Εικόνα Αγίου Ιεράρχη',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_9.png',
    title: 'Άγιος Παΐσιος ο Αγιορείτης',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_17.png',
    title: 'Ο Καλός Ποιμήν (Χειροποίητο Πρόσωπο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
    {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_24.png',
    title: 'Χριστός Παντοκράτωρ (Κυκλική)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_26.png',
    title: 'Η Ανάστασις (Μικροκέντημα Σταυροειδές)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_29.png',
    title: 'Άγιος Ιωάννης ο Ελεήμων (Κάδρο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Εικόνες',
    image: '/images/screenshot_23.png',
    title: 'Χριστός Παντοκράτωρ (Κυκλική Βυσσινί)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΕΙΚΟΝΕΣ'
  },

  // --- SUB-CATEGORY: ΑΜΦΙΑ ---
  {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/screenshot_10.png',
    title: 'Επιτραχήλιο (Σκηνή Σταύρωσης)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/screenshot_13.png',
    title: 'Εγκόλπιον Αρχιερατικό (Μικροκέντημα)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/screenshot_11.png',
    title: 'Ζεύγος Επιμανικίων (Χερουβείμ)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/screenshot_22.png',
    title: 'Επιτραχήλιο (Κόκκινο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Άμφια',
    image: '/images/screenshot_30.png',
    title: 'Φαιλόνιο (Κόκκινο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΑΜΦΙΑ'
  },

  // --- SUB-CATEGORY: ΚΑΛΥΜΜΑΤΑ & ΥΦΑΣΜΑΤΑ ---
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_5.png',
    title: 'Κάλυμμα Αγίας Τραπέζης',
    description: 'Ο σταυρός, κεντημένος με την παραδοσιακή τεχνική, συμβολίζει την αφοσίωση και την τέχνη.',
    date: 'ΑΦΟΣΙΩΣΗ ΣΤΗΝ ΤΕΧΝΗ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_16.png',
    title: 'Η Ανάστασις (Κάλυμμα ή Λάβαρο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_18.png',
    title: 'Κάλυμμα Αγίας Τραπέζης (Αρχιερεύς)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_15.png',
    title: 'Ο Μελισμός (Σετ Αγίας Τραπέζης)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_12.png',
    title: 'Η Κοίμησις της Θεοτόκου (Επιτάφιος)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_21.png',
    title: 'Σετ Λειτουργικών Καλυμμάτων (Λευκό)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_25.png',
    title: 'Επιτάφιος (Βυσσινί Βελούδο)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_27.png',
    title: 'Κάλυμμα Αγίου Ποτηρίου (Πελεκάνος)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },
   {
    category: 'Δείγματα',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_28.png',
    title: 'Λεπτομέρεια Κεντήματος Υφάσματος (Βυσσινί)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'ΛΕΙΤΟΥΡΓΙΚΑ ΥΦΑΣΜΑΤΑ'
  },

  // --- SUB-CATEGORY: ΛΕΠΤΟΜΕΡΕΙΕΣ & ΣΧΕΔΙΑ ---
  {
    category: 'Δείγματα',
    subCategory: 'Λεπτομέρειες & Σχέδια',
    image: '/images/screenshot_8.png',
    title: 'Λεπτομέρεια Χρυσοκεντήματος (Στάχυ)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },
  {
    category: 'Δείγματα',
    subCategory: 'Λεπτομέρειες & Σχέδια',
    image: '/images/screenshot_19.png',
    title: 'Σχέδιο σε Ύφασμα (Στάχυ)',
    description: 'Συμπλήρωσε μια σύντομη περιγραφή για το έργο...',
    date: 'Η ΤΕΧΝΗ ΜΑΣ'
  },
  
  // --- CATEGORY: ΕΠΙΚΟΙΝΩΝΙΑ ---
  {
    category: 'Επικοινωνία',
    subCategory: 'Καλύμματα & Υφάσματα',
    image: '/images/screenshot_4.png',
    title: 'Επικοινωνία',
    description: 'Έχετε ένα όραμα; Αναλαμβάνω ειδικές παραγγελίες, από νέα άμφια έως την ευλαβική αποκατάσταση παλαιών κεντημάτων.',
    date: 'ΕΠΙΚΟΙΝΩΝΙΑ'
  },
];

// Φιλτραρισμένη λίστα items
const filteredItems = computed(() => {
  // --- "ΟΛΑ" ---
  if (activeCategory.value === 'Όλα') {
    const item2 = allItems.find(item => item.image === '/images/screenshot_2.png');
    const item1 = allItems.find(item => item.image === '/images/screenshot_5.png');
    const item3 = allItems.find(item => item.image === '/images/screenshot_3.png');
    const contactItem = allItems.find(item => item.category === 'Επικοινωνία');
    return [item2, item1, item3, contactItem].filter(Boolean); // Φιλτράρει τυχόν null
  }
  
  // --- "ΔΕΙΓΜΑΤΑ" ---
  if (activeCategory.value === 'Δείγματα') {
    const item2 = allItems.find(item => item.image === '/images/screenshot_2.png');
    const item1 = allItems.find(item => item.image === '/images/screenshot_5.png');
    const item3 = allItems.find(item => item.image === '/images/screenshot_3.png');
    return [item1, item2, item3].filter(Boolean); // Φιλτράρει τυχόν null
  }
  
  // --- "ΕΠΙΚΟΙΝΩΝΙΑ" (ή οτιδήποτε άλλο) ---
  return allItems.filter(item => item.category === activeCategory.value);
});

// Ταξινόμηση/σειρά φίλτρων
const filterCategories = ['Όλα', 'Δείγματα', 'Επικοινωνία'];

// Υπολογισμός τρέχοντος index φίλτρου
const currentFilterIndex = computed(() => {
  return filterCategories.indexOf(activeCategory.value);
});

// Μετρητής για transitions (χρήσιμο για leave/enter)
const isShrinking = ref(false)
watch(() => filteredItems.value.length, (next, prev) => {
  if (prev !== undefined) isShrinking.value = next < prev
})

// Refs για DOM elements
const gridContainer = ref(null);

// Ref για το container με τα Reels
const reelsContainerRef = ref(null);

// Ref για το section "Επικοινωνία"
const contactContainer = ref(null);

// Ορατότητα για Reels
const showReels = ref(false);

// Ομαδοποίηση "Δείγματα" ανά subCategory
const groupedSampleItems = computed(() => {
  const samples = allItems.filter(item => item.category === 'Δείγματα');
  
  return samples.reduce((acc, item) => {
    // Αν δεν υπάρχει subCategory, απλά αγνόησέ το
    if (!item.subCategory) {
      return acc; 
    }
    
    const key = item.subCategory; // Παίρνουμε το κλειδί
    
    if (!acc[key]) {
      acc[key] = []; 
    }
    acc[key].push(item);
    return acc;
  }, {} as Record<string, typeof allItems>);
});

// Toggle εμφάνισης των Reels και ομαλό scroll στο container
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
// Συναρτήσεις Scroll
function scrollToGrid() {
  if (gridContainer.value) {
    (gridContainer.value as any).$el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function scrollToContact() {
  if (contactContainer.value) {
    (contactContainer.value as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Κεντρικός χειριστής αλλαγής φίλτρων
function handleFilterClick(newCategory: string, shouldScroll: boolean = true) {
  showReels.value = false; // "Μηδενίζει" τα reels
  activeCategory.value = newCategory;

  if (shouldScroll) {
    if (newCategory === 'Όλα') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } 
    else if (newCategory === 'Δείγματα') { 
      nextTick(() => { scrollToGrid(); });
    } 
    else if (newCategory === 'Επικοινωνία') { 
      nextTick(() => { scrollToContact(); });
    }
  }
}

// Λογική stepper φίλτρων


function nextFilter() {
  const nextIndex = currentFilterIndex.value + 1;
  if (nextIndex < filterCategories.length) {
    handleFilterClick(filterCategories[nextIndex]!, false);
  }
}

function prevFilter() {
  const prevIndex = currentFilterIndex.value - 1;
  if (prevIndex >= 0) {
    handleFilterClick(filterCategories[prevIndex]!, false);
  }
}
// --- Modal state ---
const isModalOpen = ref(false);
const activeModalList = ref<typeof allItems>([]); // Η λίστα της υπο-κατηγορίας που βλέπουμε
const activeModalIndex = ref(0);

// Άνοιγμα modal με βάση τη λίστα και το index
function openModal(itemsList: typeof allItems, clickedIndex: number) {
  activeModalList.value = itemsList;
  activeModalIndex.value = clickedIndex;
  isModalOpen.value = true;
}

// 3. Συνάρτηση που κλείνει το Modal
function closeModal() {
  isModalOpen.value = false;
}

// 4. Συναρτήσεις πλοήγησης (Next/Prev) μέσα στο Modal
function nextModalItem() {
  if (activeModalIndex.value < activeModalList.value.length - 1) {
    activeModalIndex.value++;
  }
}
function prevModalItem() {
  if (activeModalIndex.value > 0) {
    activeModalIndex.value--;
  }
}

// 5. (BONUS) Πλοήγηση με βελάκια πληκτρολογίου
function handleKeydown(e: KeyboardEvent) {
  if (!isModalOpen.value) return; // Αν δεν είναι ανοιχτό το modal, μην κάνεις τίποτα

  if (e.key === 'ArrowRight') {
    nextModalItem();
  } else if (e.key === 'ArrowLeft') {
    prevModalItem();
  } else if (e.key === 'Escape') {
    closeModal();
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});

const contactItemData = computed(() => {
  // Βρίσκουμε το item της επικοινωνίας από την αρχική λίστα
  return allItems.find(item => item.category === 'Επικοινωνία');
});



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

    <TransitionGroup
      ref="gridContainer" 
      tag="main"
      name="list"
      :class="['content-grid', { 'is-shrinking': isShrinking }]"
      v-if="activeCategory !== 'Επικοινωνία'"
    >
      <template v-for="item in filteredItems" :key="item?.title">
        <article v-if="item" class="grid-item">
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
        </article>
      </template>
    </TransitionGroup>

    <section
      ref="contactContainer" 
      v-else-if="activeCategory === 'Επικοινωνία' && contactItemData"
      class="contact-view"
    >
    
    <article class="grid-item">
      <div class="item-image">
        <NuxtImg 
          :src="contactItemData.image" 
          :alt="contactItemData.title" 
          format="webp" 
          quality="80"
          loading="lazy"
        />
      </div>
      <h3 class="item-title">{{ contactItemData.title }}</h3>
      <p class="item-description">{{ contactItemData.description }}</p>
      <p class="item-date">{{ contactItemData.date }}</p>
    </article>

  <div class="contact-info-panel">
      <div class="contact-details-list">
        <div class="contact-item">
          <strong>Τηλέφωνο:</strong>
          <span class="contact-styled-text">210 123 4567</span>
        </div>
        <div class="contact-item">
          <strong>Email:</strong>
          <span class="contact-styled-text">info@domainfilis.gr</span>
        </div>
        <div class="contact-item">
          <strong>Διεύθυνση:</strong>
          <span>Οδός Δείγματος 12, 123 45, Αθήνα</span>
        </div>
      </div>
      <div class="contact-map">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201217.1565171796!2d23.57321526462707!3d37.99083200870933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd1f067043f1%3A0x2736354576668ddd!2sAthens!5e0!3m2!1sen!2sgr!4v1730009475168!5m2!1sen!2sgr" 
          width="100%" 
          height="100%" 
          style="border:0;" 
          allowfullscreen 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
  </div>
</section>
  
 

  
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
          v-for="(item, index) in items" :key="item.title"
          class="reel-slide"
          @click="openModal(items, index)" >
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
    </div>
    <div class="reels-controller">
      <hr v-if="showReels" />
      <button type="button" @click="toggleReelsView" class="reels-toggle-button">
        <span v-if="!showReels">Προβολή ανά Κατηγορία</span>
        <span v-else>Απόκρυψη</span>
      </button>
    </div>

  </section>

   

   <footer class="main-footer">
      
      <div class="footer-brand">
        Κωνσταντίνα © 2025
      </div>
      
      <div class="footer-credits">
        Curated by Theofanis
      </div>
      
    </footer>

    <Transition name="modal-fade">
      <div 
        v-if="isModalOpen" 
        class="modal-backdrop" 
        @click.self="closeModal"
      >
        <div class="modal-content">
          
          <button type="button" @click="closeModal" class="modal-close-btn">&times;</button>
          
          <button 
            type="button" 
            class="modal-nav modal-prev"
            @click="prevModalItem"
            :disabled="activeModalIndex === 0"
          >
            &lt;
          </button>
          
          <button 
            type="button" 
            class="modal-nav modal-next"
            @click="nextModalItem"
            :disabled="activeModalIndex >= activeModalList.length - 1"
          >
            &gt;
          </button>

          <div class="modal-image-wrapper" v-if="activeModalList[activeModalIndex]">
            <NuxtImg 
              :src="activeModalList[activeModalIndex]!.image" 
              :alt="activeModalList[activeModalIndex]!.title" 
              format="webp" 
              quality="90"
              width="1200" style="max-height: 90vh; width: auto; max-width: 100%;"
            />
            <p class="modal-caption">
              {{ activeModalList[activeModalIndex]!.title }}
            </p>
          </div>
          
        </div>
      </div>
    </Transition>
    </div> 
    

 
</template>

<style scoped>
/* Βασικό CSS που "χτίζει" το design (Inter font) */

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

/* Στυλ ενεργού κουμπιού */
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

/* --- Contact View Section --- */
.contact-view {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  /* Το "μαξιλαράκι" για το scroll (όπως και στο .content-grid) */
  scroll-margin-top: 20px; 
}

.contact-info-panel {
  /* Αυτή είναι η δεξιά στήλη */
}

.contact-details-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  padding-top: 10px; /* Λίγο κενό για να ευθυγραμμιστεί */
}

.contact-item {
  font-size: 1rem;
}
.contact-item strong {
  display: block;
  font-weight: 500;
  color: #888;
  margin-bottom: 4px;
}
.contact-item span {
  font-weight: 500;
  font-size: 1.1rem;
}
.contact-styled-text {
  color: #1a1a1a;
  text-decoration: none;
  border-bottom: 1px solid #ccc;
  transition: border-color 0.2s ease;
}
.contact-item a:hover {
  border-color: #1a1a1a;
}

.contact-map {
  width: 100%;
  height: 300px; /* Ή όσο ύψος θέλουμε */
  background-color: #f0f0f0; /* Placeholder */
  border-radius: 8px;
  overflow: hidden;
}

/* --- Filter Stepper Nav --- */
.filter-stepper-nav {
  display: grid;
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
  background-color: #f0f0f0;
  margin-bottom: 12px;
  display: block; /* Σημαντικό */
  
  /* --- Η ΔΙΟΡΘΩΣΗ ΕΙΝΑΙ ΕΔΩ --- */
  aspect-ratio: 4 / 3; /* Το "κουτί" παίρνει την αναλογία */
  overflow: hidden; /* Κρύβει ό,τι περισσεύει */
  border-radius: 4px; /* (Προαιρετικό, αλλά όμορφο) */
}
.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; 
  display: block;
  /* (Βγάλαμε το aspect-ratio από εδώ) */
}

.item-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 0 8px 0;
  /* 'cursor: pointer' ΕΦΥΓΕ ΑΠΟ ΕΔΩ */
  display: inline-block;
  transition: color 0.2s ease;
}

/* Μόνο όταν το item είναι clickable βάζουμε cursor/hover */
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

/* --- CSS ΓΙΑ ΤΟ MODAL --- */

/* Το "σβήσιμο" (Fade) */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* 1. Το Μαύρο Φόντο (Backdrop) */
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

/* 2. Το Κουτί του Modal (Content) */
.modal-content {
  position: relative;
  background-color: transparent;
  padding: 0;
  border-radius: 0;
  max-width: 90vw;
  max-height: 95vh;
  box-shadow: none;
}

/* 3. Η Εικόνα και ο Τίτλος */
.modal-image-wrapper {
  text-align: center;
}
.modal-image-wrapper img {
  display: block; 
  border-radius: 8px; /* <-- ΑΛΛΑΓΗ (Η εικόνα παίρνει το radius) */
  box-shadow: 0 5px 20px rgba(0,0,0,0.3); /* (Για να ξεχωρίζει) */
}
.modal-caption {
  font-size: 1rem;
  font-weight: 500;
  color: #fff; /* <-- ΑΛΛΑΓΗ (Να φαίνεται στο μαύρο) */
  margin-top: 15px;
}

/* 4. Τα Κουμπιά (Close & Nav) */
.modal-close-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  width: 30px;
  height: 30px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  z-index: 1002;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

.modal-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.2s ease;
}
.modal-nav:hover {
  background-color: #fff;
}
.modal-nav:disabled {
  opacity: 0.2;
  cursor: not-allowed;
}

.modal-prev {
  left: -50px;
}
.modal-next {
  right: -50px;
}

/* 5. Κάνε τα Slides "clickable" */
.reel-slide {
  width: 320px; 
  max-width: 100%;
  cursor: pointer; /* Δείχνει ότι πατιέται */
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
  .page-wrapper {
    padding: 0 25px;
  }
}

/* Για Κινητά */
@media (max-width: 640px) {
  .page-wrapper {
    padding: 0 20px;
  }
  .main-header {
    flex-direction: column;
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

/* Responsive για το Contact View */
@media (max-width: 900px) {
  .contact-view {
    grid-template-columns: 1fr; /* 1 στήλη σε tablet/κινητά */
    gap: 40px;
  }
}

/* --- Responsive για το Modal --- */
@media (max-width: 768px) {
  
  /* Φέρνει τα βελάκια μέσα στην οθόνη */
  .modal-nav {
    background-color: rgba(255, 255, 255, 0.5); /* Πιο διακριτικά */
  }
  .modal-prev {
    left: 10px; /* <-- ΑΛΛΑΓΗ (Από -50px) */
  }
  .modal-next {
    right: 10px; /* <-- ΑΛΛΑΓΗ (Από -50px) */
  }

  /* Μετακινεί το (X) για να πατιέται εύκολα */
  .modal-close-btn {
    top: 5px;
    right: 5px;
    background-color: rgba(255, 255, 255, 0.8);
  }
}

</style>