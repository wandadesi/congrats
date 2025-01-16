document.addEventListener('DOMContentLoaded', function() {
    // Tombol animate-button
    const animateButton = document.getElementById('animate-button');
    if (animateButton) {
        animateButton.addEventListener('click', function() {
            // Arahkan ke halaman kedua
            window.location.href = 'page2.html'; // Nama file tujuan
        });
    }

    // Tombol next-button
    const nextButton = document.getElementById('next-button');
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Arahkan ke page3.html
            window.location.href = 'page3.html'; // Nama file tujuan
        });
    }

    // Tombol next-button-2
    const nextButton2 = document.getElementById('next-button-2');
    if (nextButton2) {
        nextButton2.addEventListener('click', function() {
            // Arahkan ke page4.html
            window.location.href = 'page4.html'; // Nama file tujuan
        });
    }

   

    // Menangani input dan submit form untuk jawaban "I love you more"
    const answerInput = document.getElementById('answer-input');
    const errorMessage = document.getElementById('error-message');

    if (answerInput) {
        // Menangani input perubahan untuk menyembunyikan pesan error saat mengetik
        answerInput.addEventListener('input', function() {
            errorMessage.style.display = 'none'; // Sembunyikan pesan error saat mengetik
        });

        // Menambahkan event listener untuk mengecek jawaban saat menekan tombol "Enter"
        answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const userAnswer = answerInput.value.trim().toLowerCase();

                // Cek apakah jawaban benar
                if (userAnswer === 'i love you more') {
                    // Arahkan ke halaman berikutnya jika jawaban benar
                    window.location.href = 'page5.html'; // Ganti dengan halaman yang sesuai
                } else {
                    // Tampilkan pesan error jika jawaban salah
                    errorMessage.style.display = 'block';
                    answerInput.value = ''; // Reset input field untuk mencoba lagi
                }
            }
        });
    }

    // Tombol submit untuk jawaban
    const submitButton = document.getElementById('submit-button');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            const userAnswer = answerInput.value.trim().toLowerCase();

            // Cek apakah jawaban benar
            if (userAnswer === 'i love you more') {
                // Arahkan ke halaman berikutnya jika jawaban benar
                window.location.href = 'page5.html'; // Ganti dengan halaman yang sesuai
            } else {
                // Tampilkan pesan error jika jawaban salah
                errorMessage.style.display = 'block';
                answerInput.value = ''; // Reset input field untuk mencoba lagi
            }
        });
    }
});
