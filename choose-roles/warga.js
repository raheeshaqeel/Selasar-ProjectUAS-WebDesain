// Ambil semua card kategori
const roleCards = document.querySelectorAll(".role-card");

// Fungsi memilih atau membatalkan kategori
roleCards.forEach((card) => {
  card.addEventListener("click", function () {
    // Toggle selected pada card yang diklik
    this.classList.toggle("selected");

    // Update status pilihan
    const isSelected = this.classList.contains("selected");

    this.setAttribute("aria-pressed", isSelected);
  });
});

// Tombol Selanjutnya
const nextButton = document.getElementById("nextButton");

nextButton.addEventListener("click", function () {
  // Ambil semua card yang sedang dipilih
  const selectedCards = document.querySelectorAll(".role-card.selected");

  // Ambil nama kategori dari card terpilih
  const selectedInterests = Array.from(selectedCards).map((card) => {
    return card.dataset.interest;
  });

  // Validasi: user harus memilih minimal satu kategori
  if (selectedInterests.length === 0) {
    alert("Pilih minimal satu kategori yang kamu minati!");
    return;
  }

  // Simpan pilihan kategori ke localStorage
  localStorage.setItem("wargaInterests", JSON.stringify(selectedInterests));

  // Arahkan ke halaman selanjutnya
  window.location.href = "choose_role.html";
});
