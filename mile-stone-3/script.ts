const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect data from form
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const summary = (document.getElementById('summary') as HTMLTextAreaElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.split('\n');
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.split('\n');
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.split('\n');
    const projects = (document.getElementById('projects') as HTMLTextAreaElement).value.split('\n');
    const languages = (document.getElementById('languages') as HTMLTextAreaElement).value.split('\n');
    const certifications = (document.getElementById('certifications') as HTMLTextAreaElement).value.split('\n');

    // Helper function to generate list items from multi-line inputs
    const generateList = (items) => {
        return `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
    };

    // Updated Resume Structure
    const resumeHTML = `
       <div class="resume-header">
        <h2>${name}</h2>
       </div>
       <div class="profile-summary">
        <p><b>Profile Summary:</b></p>
        <p>${summary}</p>
       </div>

        <h3>Education</h3>
        ${generateList(education)}
        
        <h3>Work Experience</h3>
        ${generateList(experience)}
        
        <h3>Skills</h3>
        ${generateList(skills)}

        <h3>Projects</h3>
        ${generateList(projects)}

        <h3>Languages</h3>
        ${generateList(languages)}

        <h3>Certifications</h3>
        ${generateList(certifications)}
        
        <hr>
        <p><b>Contact Information:</b> ${email} | ${phone}</p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error("The resume element is missing");
    }
});
