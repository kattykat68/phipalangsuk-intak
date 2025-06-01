document.getElementById("intake-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    gender: form.gender.value,
    age: form.age.value,
    education: form.education.value,
    duration_amp: form.duration_amp.value,
    interest_quit: form.interest_quit.value
  };
  fetch("https://script.google.com/macros/s/AKfycbw0RRQ2ali5Le4sUcr9dA7S6DOJbYbOt-YcnJblFQS7thB8sOEUFOmByMSr3gh79Kq5/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.ok) {
      alert("ส่งข้อมูลเรียบร้อยแล้ว! ขอบคุณค่ะ 💚");
      form.reset();
    } else {
      alert("เกิดข้อผิดพลาดในการส่งข้อมูล");
    }
  });
});
