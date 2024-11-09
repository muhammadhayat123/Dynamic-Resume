var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect data from form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var summary = document.getElementById('summary').value;
    var education = document.getElementById('education').value.split('\n');
    var experience = document.getElementById('experience').value.split('\n');
    var skills = document.getElementById('skills').value.split('\n');
    var projects = document.getElementById('projects').value.split('\n');
    var languages = document.getElementById('languages').value.split('\n');
    var certifications = document.getElementById('certifications').value.split('\n');
    // Helper function to generate list items from multi-line inputs
    var generateList = function (items) {
        return "<ul>".concat(items.map(function (item) { return "<li>".concat(item, "</li>"); }).join(''), "</ul>");
    };
    // Updated Resume Structure
    var resumeHTML = "\n       <div class=\"resume-header\">\n        <h2>".concat(name, "</h2>\n       </div>\n       <div class=\"profile-summary\">\n        <p><b>Profile Summary:</b></p>\n        <p>").concat(summary, "</p>\n       </div>\n\n        <h3>Education</h3>\n        ").concat(generateList(education), "\n        \n        <h3>Work Experience</h3>\n        ").concat(generateList(experience), "\n        \n        <h3>Skills</h3>\n        ").concat(generateList(skills), "\n\n        <h3>Projects</h3>\n        ").concat(generateList(projects), "\n\n        <h3>Languages</h3>\n        ").concat(generateList(languages), "\n\n        <h3>Certifications</h3>\n        ").concat(generateList(certifications), "\n        \n        <hr>\n        <p><b>Contact Information:</b> ").concat(email, " | ").concat(phone, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume element is missing");
    }
});
