// Function to load dynamic content
function loadContent(content) {
  const dashboardContent = document.getElementById('dashboard-content');
  dashboardContent.innerHTML = content;
}

// Event listener for 'Home' link
document.getElementById('home-link').addEventListener('click', function(event) {
  event.preventDefault();
  
  
  const homeContent = `
    <h1>Home Page</h1>
    <div class="dashboard-grid">
      <div class="card">
        <h2>Welcome Back!</h2>
      </div>
    </div>
  `;
  
  loadContent(homeContent);
});

document.getElementById('user-profile-link').addEventListener('click', function(event) {
  event.preventDefault();

  const profileContent = `
    <h1>User Profile</h1>
    <div class="dashboard-grid">
      <div class="card">
        <h2>Your Profile Information</h2>
        <p>Details about your profile go here.</p>
      </div>
    </div>
  `;
  
  loadContent(profileContent);
});
