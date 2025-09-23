export default function createProjectComponent(projectData) {
    // Main div
    const componentDiv = document.createElement('div') 
    componentDiv.className = 
        "rounded-xl mt-1 p-0 px-2 col-md-4 space-y-2 fade-in"

    // name
    const nameElement = document.createElement('p') 
    nameElement.className = "fs-4 txt-primary m-0" 
    nameElement.textContent = projectData.Title 
    componentDiv.appendChild(nameElement) 

    // tech used 
    if (projectData.Skills && projectData.Skills.length > 0) {
        const skillsElement = document.createElement('div') 
        skillsElement.className = "flex flex-wrap gap-2 mt-0" 

        projectData.Skills.forEach(skill => {
            const skillBadge = document.createElement('span') 
            skillBadge.className = "badge rounded-pill txt-primary me-1 my-1 " 
            skillBadge.style = 'background-color: var(--blue);'
            skillBadge.textContent = skill 
            skillsElement.appendChild(skillBadge) 
        }) 

        componentDiv.appendChild(skillsElement) 
    }

    // description
    const descriptionElement = document.createElement('p') 
    descriptionElement.className = "txt-secondary my-1" 
    descriptionElement.textContent = projectData.Description 
    componentDiv.appendChild(descriptionElement) 

    // github link
    const linkElement = document.createElement('span') 
    linkElement.innerHTML = `
        <a href=${projectData.Link} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="ms-1 bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg></a>
    `
    componentDiv.appendChild(linkElement) 

    // case study section
    if (projectData.CaseStudy) {
        const caseStudyElement = document.createElement('button')
        caseStudyElement.type = 'button'
        caseStudyElement.setAttribute('data-target', `cs_${projectData.Title}`)
        caseStudyElement.className = `btn badge rounded-pill`
        caseStudyElement.style = 'background-color: var(--orange);'
        caseStudyElement.innerHTML = "Estudo de caso"
        componentDiv.appendChild(caseStudyElement)
    }

    // paper link section
    if (projectData.PaperLink) {
        const paperElement = document.createElement('a')
        paperElement.setAttribute('target', '_blank')
        paperElement.setAttribute('href', projectData.PaperLink)
        paperElement.className = 'btn badge rounded-pill'
        paperElement.style = 'background-color: var(--blue);'
        paperElement.innerHTML = "Artigo"
        componentDiv.appendChild(paperElement)
    }

    return componentDiv 
}