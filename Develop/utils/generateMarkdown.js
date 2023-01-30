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
  return `# ${data.title}

  # Description
  ${data.Description}

  # Contributions

  ${data.contribution}

  # Questions
  ${data.GitHub}
  ${data.Email}
  ${data.Dependancies}
  ${data.repository}

  # Tests

  ${data.Tests}

  # License

  ${data.License}

`
};

module.exports = generateMarkdown;
