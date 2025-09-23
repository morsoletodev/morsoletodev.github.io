import getJsonFile from "./getJsonFile.js"
import createProjectComponent from "../components/project.js"
import createCaseStudy from "../components/caseStudy.js"

const projectsContainer = document.getElementById('projects-container')

async function createDiv(){
    const componentDiv = document.createElement('div')
    componentDiv.className = `row`
    return componentDiv
}

async function prepare_buttons() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const target = document.getElementById(button.dataset.target)

            if (target.style.display === 'none') {
                target.style.display = 'flex'
            } else {
                target.style.display = 'none'
            }
        })
    })
}

const fetchAndRenderProjects = async () => {
    projectsContainer.innerHTML = ''

    try {
        const projectsData = await getJsonFile();
        
        if (!projectsData || projectsData.length === 0) {
            throw new Error("No projects data found")
        }

        const projectsPerRow = 3;
        for (let i = 0; i < projectsData.length; i += projectsPerRow) {
            const projectDiv = await createDiv()
            const caseStudyDiv = await createDiv()

            for (let j = 0; j < projectsPerRow && (i + j) < projectsData.length; j++) {
                const project = projectsData[i + j]
                projectDiv.appendChild(createProjectComponent(project))

                if (project.CaseStudy)
                    caseStudyDiv.appendChild(createCaseStudy(project))
                
            }

            projectsContainer.appendChild(projectDiv)
            if (caseStudyDiv.childElementCount > 0) 
                projectsContainer.appendChild(caseStudyDiv)
        }

    } catch (error) {
        console.error("Error loading projects:", error)
        const errorDiv = document.createElement('div')
        errorDiv.className = "bg-red-100 rounded-lg p-4 text-red-700 text-sm"
        errorDiv.textContent = "Could not load projects. Please try again later."
        projectsContainer.appendChild(errorDiv)
    } 

    prepare_buttons()
}

window.onload = fetchAndRenderProjects