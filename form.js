document.getElementById("intake-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const params = new URLSearchParams({
    name: form.name.value,
    gender: form.gender.value,
    age: form.age.value,
    education: form.education.value,
    duration_amp: form.duration_amp.value,
    interest_quit: form.interest_quit.value
  });

  fetch("https://script.google.com/macros/s/AKfycbw0RRQ2ali5Le4sUcr9dA7S6DOJbYbOt-YcnJblFQS7thB8sOEUFOmByMSr3gh79Kq5/exec?" + params)
    .then(response => response.text())
    .then(result => {
      alert("ส่งข้อมูลสำเร็จแล้ว! 💚");
      form.reset();
    })
    .catch(err => {
      alert("เกิดข้อผิดพลาด: " + err.message);
    });
});
