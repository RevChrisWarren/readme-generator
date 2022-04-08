module.exports = templateData => {
    console.log(templateData);

return `
# ${templateData.title}

## Description
### ${templateData.description}

## Installation Instructions
### ${templateData.installinst}

## Usage
### ${templateData.usage}

## Contributing
### ${templateData.contributing}

## Tests
### ${templateData.tests}

## Licensing
### ${templateData.license}

## GitHub Username
### ${templateData.github}

### E-mail Address
### ${templateData.email}
`
}