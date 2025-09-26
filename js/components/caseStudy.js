export default function createCaseStudy(projectData){
    // Main div
    const componentDiv = document.createElement('div')
    componentDiv.id = `cs_${projectData.Title}`
    componentDiv.className = 'txt-light col-lg-12 g-4 p-4 rounded-3 my-1 fade-in cs:hidden'
    componentDiv.style = `
        background-color: var(--gray1);
        margin: auto;
        display: none;
    `

    const textDiv = document.createElement('div')
    textDiv.id = `cs_${projectData.Title}`
    textDiv.className = 'm-0 p-0 row'

    // Tech Stack
    const pElement = document.createElement('p')
    pElement.className = 'txt-secondary col-3 m-0'
    pElement.textContent = [...projectData.Skills, ...projectData.CaseStudy.AdditionalTech].join(' | ')
    textDiv.appendChild(pElement)

    // Executive description
    const p2Element = document.createElement('p')
    p2Element.className = 'txt-light col-9 m-0'
    p2Element.textContent = projectData.CaseStudy.Description
    textDiv.appendChild(p2Element)

    componentDiv.append(textDiv)

    return componentDiv
}