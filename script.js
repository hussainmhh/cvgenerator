document.getElementById('generate-cv').addEventListener('click', function () {
    // Fetching form data
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const linkedin = document.getElementById('linkedin').value;
    const website = document.getElementById('website').value;
    const degree = document.getElementById('degree').value;
    const institution = document.getElementById('institution').value;
    const graduationYear = document.getElementById('graduation-year').value;
    const gpa = document.getElementById('gpa').value;
    const jobTitle = document.getElementById('job-title').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const jobDescription = document.getElementById('job-description').value;
    const skill = document.getElementById('skill').value;

    // Displaying CV content
    const cvContent = `
        <h2>${name}</h2>
        <p>${address}</p>
        <p>${phone} | ${email}</p>
        <p>${linkedin} | ${website}</p>
        <hr>
        <h3>Education</h3>
        <p>${degree}, ${institution}</p>
        <p>Graduation Year: ${graduationYear}</p>
        <p>GPA: ${gpa}</p>
        <hr>
        <h3>Experience</h3>
        <p>${jobTitle} at ${company}</p>
        <p>${duration}</p>
        <p>${jobDescription}</p>
        <hr>
        <h3>Skills</h3>
        <p>${skill}</p>
    `;

    document.getElementById('cv-content').innerHTML = cvContent;

    // Show the Download PDF button
    document.getElementById('download-pdf').style.display = 'block';
});

document.getElementById('download-pdf').addEventListener('click', function () {
    var element = document.getElementById('cv-content');
    html2pdf().from(element).save();
});
