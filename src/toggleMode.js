let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle("light")

    const modo = darkMode ? "light" : "dark"
    event.currentTarget
        .querySelector("span").textContent = `${modo} esta ativo`

    darkMode = !darkMode
})