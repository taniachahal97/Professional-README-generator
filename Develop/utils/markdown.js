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
    var installation = 'Installation';
    var use = 'Usage';
    var contribute = 'Contributing';
    var ques = 'Questions';
    var test = 'Tests';
    var license = 'License';


  return `# ${data.title}

  # ${desc}

  ${data.Description}

  # ${installation}

  # ${use};

  # ${contribute}

  ${data.contribution}

  # ${ques}

  ${data.GitHub} 

  ${data.Email}

  ${data.Dependancies}

  ${data.repository}

  # ${test}

  ${data.Tests}

  # ${license}

  ${data.License}`;

}


module.exports = {generateMarkdown};