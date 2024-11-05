import jsonPortfolioData from './dataDajer.json'

const PersonalInfo= {
    name: jsonPortfolioData.personalInfo.name,
    age: jsonPortfolioData.personalInfo.age,
    role: jsonPortfolioData.role,
    skills: jsonPortfolioData.skills.map((skill) => skill),
    description: jsonPortfolioData.personalInfo.description
}

export default PersonalInfo;