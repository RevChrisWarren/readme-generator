// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
    return ""
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License Link](http://choosealicense.com/licenses)`
  }
    return "";
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `
    ## Licensing
    ${license}`
  }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title);

  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `
  ${licenseBadge}
  ${licenseLink}

  # ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Licensing](#licensing)
  * [GitHub Username](#github-username)
  * [E-mail Address](#e-mail-address)

  ## Description
  ${data.description}
  
  ## Installation Instructions
  ${data.installinst}
  
  ## Usage
 ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${licenseSection}
  
  ## GitHub Username
  ${data.github}
  
  ## E-mail Address
  ${data.email}
  
`;
}

module.exports = generateMarkdown;
