// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

${data.description}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Testing](#Testing)
  * [Questions](#Questions)

## Installtaion

To install all necessary dependencies, use the following command:

${data.install}

## Usage

To use the appplication, use the following command: 

${data.usage}

## Contributing
To contribute please ${data.contrib}

## Testing

To test the application, use the following command:

${data.test}

## Questions

For any questions regarding the repo or application, please contact me at ${data.email}. I do have additional projects on display at https://github.com/${data.github}/.
`;
}

module.exports = {
   generateMarkdown,
};
