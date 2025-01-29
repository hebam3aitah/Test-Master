// scripts.js

// Ensure you include SweetAlert library in your HTML: 
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

function handleDonate() {
    Swal.fire({
        title: 'شكراً لتبرعك!',
        text: 'سيتم توجيهك إلى صفحة الدفع.',
        icon: 'success',
        confirmButtonText: 'اذهب إلى صفحة الدفع'
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = 'https://example.com/donation-page'; // Replace with the actual donation page URL
        }
    });
}

function handleVolunteer() {
    Swal.fire({
        title: 'شكراً لتطوعك!',
        text: 'سيتم التواصل معك قريباً لتقديم التفاصيل.',
        icon: 'info',
        confirmButtonText: 'حسناً'
    });
}