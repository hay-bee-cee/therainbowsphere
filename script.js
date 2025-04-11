function showPage(page) {
    // Hide all sections
    document.getElementById('home').style.display = 'none';
    document.getElementById('community_hall').style.display = 'none';
    document.getElementById('opportunity_page').style.display = 'none';
    document.getElementById('spring_of_inspiration').style.display = 'none';
    document.getElementById('library').style.display = 'none';
    document.getElementById('announcement').style.display = 'none';
    document.getElementById('event').style.display='none';
    document.getElementById('about').style.display = 'none';
    document.getElementById('contact').style.display = 'none';
   

    // Show the selected section
    document.getElementById(page).style.display = 'block';
    // Remove 'active' class from all buttons
document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));

// Add 'active' class to the clicked button
document.querySelectorAll('nav button, footer nav button').forEach(btn => {
    if (btn.getAttribute('onclick')?.includes(page)) {
        btn.classList.add('active');
    }
});


    // Store the selected page in localStorage
    localStorage.setItem('currentPage', page);
}

// Check localStorage for the last visited page
document.addEventListener("DOMContentLoaded", function() {
    const savedPage = localStorage.getItem('currentPage') || 'home';
    showPage(savedPage);
});



