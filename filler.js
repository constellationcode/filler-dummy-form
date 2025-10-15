// Data dummy yang akan kita gunakan
const dummyData = {
    firstName: "John",
    lastName: "Doe",
    fullName: "John Doe",
    email: `JohnDoe${Math.floor(Math.random() * 1000)}@example.com`,
    phone: "081234567890",
    password: "JohnDoeis_Person123?",
    company: "John Doe Inc.",
    address: "John Doe Street, No. 123, Pochinki, heaven"
  };
  
  // Fungsi utama untuk mengisi form
  function fillForms() {
    console.log("Looking for inputs...");
  
    // Dapatkan semua elemen input dan textarea di halaman
    const inputs = document.querySelectorAll('input, textarea');
  
    inputs.forEach(input => {
      // Abaikan input yang tersembunyi, tombol, atau sudah terisi
      if (input.type === 'hidden' || input.type === 'submit' || input.type === 'button' || input.type === 'checkbox' || input.type === 'radio' || input.value) {
        return;
      }
  
      const type = input.type.toLowerCase();
      const name = (input.name || input.id || input.placeholder || '').toLowerCase();
  
      if (name.includes('email')) {
        input.value = dummyData.email;
      } else if (type === 'password') {
        input.value = dummyData.password;
      } else if (name.includes('phone') || name.includes('tel') || type === 'tel') {
        input.value = dummyData.phone;
      } else if (name.includes('first') && name.includes('name')) {
        input.value = dummyData.firstName;
      } else if (name.includes('last') && name.includes('name')) {
        input.value = dummyData.lastName;
      } else if (name.includes('full') && name.includes('name') || name.includes('nama') && name.includes('lengkap')) {
        input.value = dummyData.fullName;
      } else if (name.includes('company') || name.includes('perusahaan')) {
        input.value = dummyData.company;
      } else if (name.includes('address') || name.includes('alamat') || input.tagName.toLowerCase() === 'textarea') {
        input.value = dummyData.address;
      } else if (type === 'text') {
        // Untuk input teks umum lainnya
        input.value = dummyData.fullName;
      }
    });
  
    console.log("Done Filling Forms.");
  }
  
  // Jalankan fungsi
  fillForms();