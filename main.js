const controls = document.querySelectorAll(`.controls input[type = 'range']`);
const paddingRange = document.querySelector(`input[name = 'padding']`);
const blurRange = document.querySelector(`input[name = 'blur']`);
const colorRange = document.querySelector(`input[name = 'color']`);
console.log(colorRange)
const img = document.querySelector("image");

function updateStuff() {
  const suffix = this.dataset.sizing || "";
  console.log(`El name:`, this.name);
  console.log('Set value:', this.value);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
controls.forEach((control) => {
  control.addEventListener("change", updateStuff);
  control.addEventListener("mousemove", updateStuff);
});

colorRange.addEventListener("change", updateStuff);
