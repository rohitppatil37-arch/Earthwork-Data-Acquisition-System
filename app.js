document.addEventListener("DOMContentLoaded", async () => {
  await loadConfig();
  populateSubdivisions();
});

function populateSubdivisions() {
  const select = document.getElementById("subdivision");
  select.innerHTML = `<option value="">उपविभाग निवडा...</option>`;

  CONFIG.subdivisions.forEach(sub => {
    const opt = document.createElement("option");
    opt.value = sub["Subdivision Code"];
    opt.textContent = sub["Subdivision Name"];
    select.appendChild(opt);
  });
}
