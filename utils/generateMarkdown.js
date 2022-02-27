// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ## Description

${data.description}

  ## Table of Contents
  * [Install](#install)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Testing](#testing)
  * [Questions](#questions)

## Install

To install all necessary dependencies, use the following command:

~~~
${data.install}
~~~

## Usage

To use the appplication, use the following command: 

~~~
${data.usage}
~~~

## License

This project is under the ${data.license} license!

## Contributing
To contribute please ${data.contrib}

## Testing

To test the application, use the following command:

~~~
${data.test}
~~~

## Questions

For any questions regarding the repo or application, please contact me at ${data.email}. I do have additional projects on display at https://github.com/${data.github}/.
`;
}

module.exports = {
   generateMarkdown,
};
