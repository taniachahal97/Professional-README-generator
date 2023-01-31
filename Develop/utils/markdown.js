// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license); //working // MIT

  return `![GitHub license](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  return `The project is covered under the ${license} open source license`


}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {

    var licenseChoice = renderLicenseBadge(data.License); 
    var licenseNotice = renderLicenseSection(data.License);
    console.log(licenseChoice); // logged badge link 
    var desc = 'Description';
    var contents = 'Table of Contents';
    var installation = 'Installation';
    var use = 'Usage';
    var contribute = 'Contributing';
    var ques = 'Questions';
    var test = 'Tests';
    var license = 'License';


  return `# ${data.title} \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 ${licenseChoice}

  # ${contents}

  1. [Description](#description)
  2. [Installation Instructions](#installation)
  3. [Usage](#use)
  4. [Contributing](#contribute)
  5. [Questions](#questions)
  6. [Tests](#tests)
  7. [License](#license)

  # ${desc} <a name="description"></a>

  ${data.Description}

  # ${installation} <a name="installation"></a>

  ${data.install}

  # ${use} <a name="use"></a>

  ${data.usage}

  # ${contribute} <a name="contributing"></a>

  ${data.contribution}

  # ${ques} <a name="questions"></a>

  This is the link to my GitHub profile : https://github.com/${data.GitHub} 

  You can reach me via email at ${data.Email}

  ${data.Dependancies}

  ${data.repository}

  # ${test} <a name="tests"></a>

  Run the following command to test the programme

  > ${data.Tests} 

  # ${license} <a name="license"></a>

  ${licenseNotice}`

}


module.exports = {generateMarkdown};