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
const generateMarkdown = (data) => {
    var desc = 'Description';
    var contents = 'Table of Contents';
    var installation = 'Installation';
    var use = 'Usage';
    var contribute = 'Contributing';
    var ques = 'Questions';
    var test = 'Tests';
    var license = 'License';


  return `# ${data.title}

  # ${contents}

  1. [Description](#description)
  2. [Installation] (#installation)
  3. [Installation Instructions](#installation)
  4. [Usage](#use)
  5. [Contributing](#contribute)
  6. [Questions] (#questions)
  7. [Tests] (#tests)
  8. [License] (#license)

  # ${desc} <a name="description"></a>

  ${data.Description}

  # ${installation} <a name="installation></a>

  # ${use} <a name="use"></a>

  # ${contribute} <a name="contribute></a>

  ${data.contribution}

  # ${ques} <a name="questions></a>

  ${data.GitHub} 

  ${data.Email}

  ${data.Dependancies}

  ${data.repository}

  # ${test} <a name="tests"></a>

  ${data.Tests} 

  # ${license} <a name="license></a>

  ${data.License}`;

}


module.exports = {generateMarkdown};