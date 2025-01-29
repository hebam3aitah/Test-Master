// // Function to show the registration form
// function showForm() {
//     document.getElementById("form-section").style.display = "block";
// }

// // Handle form submission
// document.getElementById("registration-form").addEventListener("submit", function(event) {
//     event.preventDefault();  // Prevent page refresh

//     // Get form data
//     const name = document.getElementById("name").value;
//     const contact = document.getElementById("contact").value;
//     const challenge = document.getElementById("challenge").value;

//     // Display thank you message (for now, just log it)
//     alert(`شكرًا لتسجيل فريقكم! \nاسم الحي: ${name} \nجهة الاتصال: ${contact} \nالتحدي: ${challenge}`);

//     // Optionally, reset the form after submission
//     document.getElementById("registration-form").reset();
// });
// // Function to handle volunteer form submission
// document.getElementById("volunteer-form").addEventListener("submit", function(event) {
//     event.preventDefault();
    
//     // Get form values
//     const name = document.getElementById("volunteer-name").value;
//     const contact = document.getElementById("volunteer-contact").value;
//     const donationType = document.getElementById("donation-type").value;
//     const teamFormation = document.getElementById("team-formation").checked;

//     // Display volunteer info (for now, just log it)
//     alert(`شكرًا لتقديم تبرعك! \nاسم المتطوع: ${name} \nجهة الاتصال: ${contact} \nالتبرع: ${donationType} \nهل ترغب بتشكيل فريق: ${teamFormation ? 'نعم' : 'لا'}`);

//     // Optionally, reset the form after submission
//     document.getElementById("volunteer-form").reset();
// });

// // Handle project selection (radio buttons)
// document.getElementById("project-type-form").addEventListener("change", function() {
//     const selectedProject = document.querySelector('input[name="project-type"]:checked');
//     if (selectedProject) {
//         alert(`لقد اخترت نوع المشروع: ${selectedProject.value}`);
//     }
// });
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle volunteer form submission
    document.getElementById("Nvolunteer-form").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById("Nvolunteer-name").value;
        const contact = document.getElementById("Nvolunteer-contact").value;
        const donationType = document.getElementById("Ndonation-type").value;
        const teamFormation = document.getElementById("Nteam-formation").checked;

        // Display volunteer info (for now, just log it)
        alert(`شكرًا لتقديم تبرعك! \nاسم المتطوع: ${name} \nجهة الاتصال: ${contact} \nالتبرع: ${donationType} \nهل ترغب بتشكيل فريق: ${teamFormation ? 'نعم' : 'لا'}`);

        // Optionally, reset the form after submission
        document.getElementById("Nvolunteer-form").reset();
    });

    // Handle project selection (radio buttons)
    document.getElementById("Nproject-type-form").addEventListener("change", function() {
        const selectedProject = document.querySelector('input[name="project-type"]:checked');
        if (selectedProject) {
            alert(`لقد اخترت نوع المشروع: ${selectedProject.value}`);
        }
    });
});

// Function to show the registration form
function showForm() {
    document.getElementById("Nform-section").style.display = "block";
}

document.querySelector('.Nregister-btn').addEventListener('click', function() {
    document.getElementById('loading').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 2000); // إخفاء بعد 2 ثانية
});
