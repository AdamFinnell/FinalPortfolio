import { projects } from "./projects.js"

window.scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    })
}
