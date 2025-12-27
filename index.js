function login() {
  let u = document.getElementById("user").value;
  let p = document.getElementById("pass").value;
  let msg = document.getElementById("msg");

  if (u === "student" && p === "1234") {
    window.location.href = "dashboard.html";
  } else {
    msg.innerHTML = "❌ Invalid username or password";
    msg.style.color = "red";
  }
}



<script>
function openNote(topic){
  const notes = {
    notepad: "<h3>Notepad</h3><p>Notepad is a basic text editor...</p>",
    python: "<h3>Python</h3><p>Python is a high-level programming language...</p>",
    excel: "<h3>MS Excel</h3><p>Excel is used for calculations and data analysis...</p>",
    fundamentals: "<h3>Computer Fundamentals</h3><p>Basic concepts of computer...</p>"
  };

  document.getElementById("noteContent").innerHTML =
    notes[topic] || "<h3>Notes coming soon</h3>";
}
</script>
