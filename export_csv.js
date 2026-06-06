const fs = require('fs');

const htmlContent = fs.readFileSync('C:/Users/Eyal Pick/OneDrive/Documents/Antigravity_Projects/Spain_Portugal_07_2026/index.html', 'utf8');

// Extract the itineraryData array using a robust regex
const match = htmlContent.match(/const itineraryData = (\[[\s\S]*?\]);\s*const countdownDays/);

if (!match) {
    console.error('Could not find itineraryData in index.html');
    process.exit(1);
}

// Evaluate the string to a javascript array
// Since the string might contain unescaped line breaks in strings or other things, eval is easiest here
let itineraryData;
try {
    itineraryData = eval(match[1]);
} catch (e) {
    console.error('Error parsing itineraryData:', e);
    process.exit(1);
}

// Create CSV content
// Columns: Day, Date, Title, Drive Time, Hotel, Restaurant, Activities
let csvContent = '\uFEFF'; // BOM for UTF-8 Excel compatibility
csvContent += 'יום,תאריך,כותרת המסלול,זמן נסיעה משוער,מלון מתוכנן,מסעדה מומלצת,אטרקציות ופעילויות\n';

itineraryData.forEach(day => {
    const actTitles = day.activities ? day.activities.map((a, idx) => `${idx + 1}. ${a.title}`).join(' | ') : '';
    
    // Helper to safely wrap in quotes for CSV
    const escapeCsv = (str) => {
        if (!str) return '""';
        return '"' + String(str).replace(/"/g, '""') + '"';
    };

    csvContent += [
        day.dayNum,
        escapeCsv(day.dateText),
        escapeCsv(day.titleHe),
        escapeCsv(day.driveTime),
        escapeCsv(day.lodging ? day.lodging.nameHe : ''),
        escapeCsv(day.eatsHe ? day.eatsHe : ''),
        escapeCsv(actTitles)
    ].join(',') + '\n';
});

fs.writeFileSync('C:/Users/Eyal Pick/OneDrive/Documents/Antigravity_Projects/Spain_Portugal_07_2026/Itinerary_Spain_Portugal.csv', csvContent, 'utf8');
console.log('Successfully generated Itinerary_Spain_Portugal.csv');
