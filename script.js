const quotes = [
    {
        text: "ކުކުޅަށްވުރެ ބިސް ދޮށީ ނުވާށެ",
        author: "ހަރުބަސް"
    },
    {
        text: "ލަފާ އޮޑިޔަށް އިސްނުވާށެ، ފުރާ އޮޑިޔަށް ފަސްނުވާށެ",
        author: "ހަރުބަސް"
    },
    {
        text: "ކޮންމެ އަޑިގަނޑަކަށް ފަހު އުސްގަނޑެއް އަންނާނެއެ",
        author: "ހަރުބަސް"
    },
    {
        text: "ފުޅައް ބުޑުން ދަންޏާ ދޮންހަސަނަށް ހީވާނީ ކެޔޮގަނޑު ކަނޑާހެންނެ ",
        author: "މުސްކުޅި ބަސް"
    },
    {
        text: "އައު ކުކުޅަކަށް ގާބިހެއް އެޅުން",
        author: "ހަރުބަސް"
    },
    {
        text: "އަމާބުނީތީ ފަރަށްދިއުން",
        author: "ހަރުބަސް"
    },
    {
        text: "ބަޅެއްގެ ނަގޫ ސަންފާ އޮނަކަށްލާފައި އޮތަސް ތެދެއް ނުވާނެއެ",
        author: "މުސްކުޅި ބަސް"
    },
    {
        text: "ކެޔޮކޭވަރު އެނގޭނީ ބިތުފަންގި ނެގީމައެ",
        author: "ހަރުބަސް"
    },
    {
        text: "ކާންދޭ އަތުގައި ދައިނުގަންނާށެ",
        author: "ހަރުބަސް"
    },
    {
        text: "ބަސްނުވިކޭ އޮޑިޔެއްގެ ދިރުނބާކޮޅައް ނާރާށެ",
        author: "ހަރުބަސް"
    },
    {
        text: "މީދަލަކަށް ދުވަހެއް އައްޔާ ހިކަންޖަކަށް ވެސް ދުވަހެއް އަންނާނެއެ",
        author: "ހަރުބަސް"
    },
    {
        text: "މީހުން އެނގޭނީ އެއް އޮޑިން ދަތުރުކުރީމައެ",
        author: "މުސްކުޅި ބަސް"
    },
    {
        text: "ހިކިފަސްތާ ބަކަނާޅާށެ",
        author: "ހަރުބަސް"
    },
    {
        text: "ކިތަންމެ ވަރަކަށް ދޮންކުރިއަސް ދުނބުރިއެއް އަނބަކަށް ނުވާނެއެ",
        author: "މުސްކުޅި ބަސް"
    },
    {
        text: "ހަލާދަނޑީގެ ދެކޮޅު ބަލާށެ",
        author: "ހަރުބަސް"
    },
    {
        text: "މެކުނު ފުމުނަކަސް ގާހަކަޔަކަށް ނުފުމެވޭނެއެ",
        author: "މުސްކުޅި ބަސް"
    },
    {
        text: "ވިހަނުލާނެ ކަމަށް އަތުކުރީ ތެރޭގައި ހަރުފަ ނުގެންގުޅޭށެ",
        author: "ހަރުބަސް"
    },
    {
        text: "ހެޔޮކަމެއްގެ ބަދަލުގައި ތެޔޮހަމެއް",
        author: "މިސާލުބަސް"
    },
    {
        text: "ހާރުވާ ކެޔޮގަނޑުގައި ފަލައަރި ޖަހާނެއެ",
        author: "މުސްކުޅި ބަސް"
    }
];

// DOM elements
const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

// Keep track of current quote
let currentQuoteIndex = 0;

// Function to update quote with fade effect
function updateQuote() {
    // Fade out
    quoteText.style.opacity = 0;
    quoteAuthor.style.opacity = 0;
    
    // Wait for fade out to complete
    setTimeout(() => {
        // Get next quote
        currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
        const quote = quotes[currentQuoteIndex];
        
        // Update content
        quoteText.textContent = `"${quote.text}"`;
        quoteAuthor.textContent = `- ${quote.author}`;
        
        // Fade in
        quoteText.style.opacity = 1;
        quoteAuthor.style.opacity = 1;
    }, 500);
}

// Initial opacity
quoteText.style.opacity = 1;
quoteAuthor.style.opacity = 1;

// Update quote every 08 seconds
setInterval(updateQuote, 8000);

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

function updateCalendar() {
    const now = new Date();
    // Get abbreviated weekday (e.g., 'Mon', 'Tue', etc.)
    const dayOfWeek = now.toLocaleString('en-US', { weekday: 'short' }).toUpperCase(); // Converts to uppercase
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = now.getFullYear();

    document.getElementById('calendar').textContent = `${day}-${month}-${year}-${dayOfWeek}`;
}

// Update clock and calendar when the page loads
updateClock();
updateCalendar();

// Update clock and calendar every second
setInterval(updateClock, 1000);
setInterval(updateCalendar, 60000);  // Calendar updates every minute (since the day doesn't change every second)
