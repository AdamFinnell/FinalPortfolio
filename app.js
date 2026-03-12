import { projects } from "./projects.js"

window.scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    })
}

const grid = document.getElementById("projectGrid")

projects.forEach(project => {

    const card = document.createElement("a")

    card.href = project.link
    card.target = "_blank"

    card.className =
        "group block bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition"

    card.innerHTML = `
    <img src="${project.image}" class="w-full h-60 object-cover">

    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 group-hover:text-blue-400">
        ${project.name}
      </h3>

      <p class="text-gray-400 text-sm">
        ${project.description}
      </p>
    </div>
  `

    grid.appendChild(card)

})