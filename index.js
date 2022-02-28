const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

function init() {

  
    
    console.log(path.join(process.cwd(), "README.md"))
    
    inquirer
      .prompt([
        {type: "input",
        message: "enter the GitHub user: ",
        name: "user",  
        },
        { type: "input",
          message: "enter the information: ",
          name: "info",  
        }
      ])
      .then((response) => {
        
        // return fs.writeFileSync(path.join (process.cwd(), "README.md"), generateREADME(response));

    
       
      })
    
      .catch((error) => {
        if (error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
          console.log("Prompt couldn't be rendered in the current environment")
        } else {
          // Something else went wrong
          console.log("Something else went wrong")
        }
      });
      };
    
    function generateREADME(data) {
        return `# ${data.title}
    ${data.License}
    
    <!-- TABLE OF CONTENTS -->
      <summary>Table of Contents</summary>
      <ol>
        <li><a href="#description">Description</a></li>
        <li><a href="#installation">Installation </a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
        <li><a href="#tests">tests</a></li>
        <li><a href="#questions">Questions</a></li>
    </ol>
    
    ## Description
        ${data.description}
    
    ## Installation
        ${data.Installation}
    
    ## Usage
        ${data.Usage}
    
    ##  License
    
    ##  Contributing
        ${data.Contributing}
    
    ##  Tests
        ${data.Tests}
    
    ##  Questions
    ${data.Questions}
        
    [${data.GitHubUsername}](https://github.com/${data.GitHubUsername})
    
    
    ${data.EmailAddress}`
    
    
    
    
    
    
    }
    

    var htmlContent = `<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`
fs.writeFile('index.html', htmlContent, (error) => { /* handle error */ });
    init();
    