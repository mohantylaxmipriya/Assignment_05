// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    console.log('Student Profile loaded successfully!');

    // Show welcome greeting
    showGreeting();

    // Calculate and display average marks (Bonus feature)
    calculateAverageMarks();

    // Form validation and submission
    setupFormValidation();

    // Theme toggle functionality (Bonus feature)
    setupThemeToggle();

    // Add dynamic subject interaction
    setupSubjectInteractions();
});

// Show personalized greeting
function showGreeting() {
    const greeting = document.getElementById('greeting');
    const studentName = 'Laxmipriya Mohanty';
    greeting.textContent = `Welcome, ${studentName}! 👋`;
    setTimeout(() => greeting.classList.add('show'), 500);
}

// Calculate average marks (Bonus feature)
function calculateAverageMarks() {
    const marksCells = document.querySelectorAll('.marks-table tbody td:nth-child(2)');
    let total = 0;
    let count = 0;

    marksCells.forEach(cell => {
        const marks = parseInt(cell.textContent);
        if (!isNaN(marks)) {
            total += marks;
            count++;
        }
    });

    const average = (total / count).toFixed(2);
    const averageCell = document.querySelector('.marks-table tbody td:nth-child(3)');
    averageCell.textContent = average;
}