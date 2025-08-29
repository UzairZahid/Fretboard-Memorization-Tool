function generateAndShowNote() {
    const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    const randomNote = notes[Math.floor(Math.random() * notes.length)];

    // Display the generated note in the div
    document.getElementById('generated-note').textContent = randomNote;

    // Hide all notes first
    const allNotes = document.querySelectorAll('[class*="note"]');
    allNotes.forEach(note => {
        note.style.visibility = 'hidden';
    });

    // Show notes that match the random note
    allNotes.forEach(note => {
        if (note.textContent.trim() === randomNote) {
            note.style.visibility = 'visible';
        }
    });
}

function hideAllNotes() {
    const allNotes = document.querySelectorAll('[class*="note"]');
    allNotes.forEach(note => {
        note.style.visibility = 'hidden';
    });
    document.getElementById('generated-note').textContent = '';
}

