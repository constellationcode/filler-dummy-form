// Data dummy yang akan kita gunakan
const dummyData = {
  firstName: "John ",
  lastName: "Doe",
  fullName: "John Doe",
  email: `John.Doe${Math.floor(Math.random() * 1000)}@example.com`,
  phone: "081234567890",
  password: "JohnDoeisPerson1@_",
  company: "John Fxking Doe",
  address: "John Doe street, No 123, John City, JD 45678",
  commentValue: "In the neon glow of 1980s Los Angeles, the West Hollywood Records store was rocked by a daring theft. A prized vinyl record, worth over $10,000, vanished during a busy evening, leaving the store owner desperate for answers. Vaguely recalling the details, you know the incident occurred on July 15, 1983, at this famous store. Your task is to track down the thief and bring them to justice."
};

// Fungsi utama untuk mengisi form
function fillForms() {
  console.log("Looking for input fields to fill...");

  const inputs = document.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    // Abaikan input yang tidak perlu diisi
    if (input.type === 'hidden' || input.type === 'submit' || input.type === 'button' || input.type === 'checkbox' || input.type === 'radio') {
      return;
    }

    const type = input.type.toLowerCase();
    const name = (input.name || input.id || input.placeholder || '').toLowerCase();

    if (name.includes('email')) {
      input.value = dummyData.email;
    } else if (type === 'password' || (type === 'text' && name.includes('password'))) {
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
    } else if(type === 'textarea'){
      input.value = dummyData.commentValue
    } else if (type === 'text') {
      input.value = 'JohnDoe1234';
    } else if (type === 'number') {
      input.value = '089233818237';
    }
  });

  console.log("Done Sir!");
}

// Jalankan fungsi
fillForms();