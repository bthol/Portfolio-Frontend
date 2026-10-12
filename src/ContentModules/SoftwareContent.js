// module containing static data
// dynamic data is in jsx page
const SoftwareContent = {
    software: [
        {
            name: "GoodEval",
            url: "https://goodeval-1d265775b25d.herokuapp.com/",
            softwareType: "Application Software",
            platform: "Website",
            purpose: "Mathematical Computation and Research",
            techStack: "Django, Python, Pip, JavaScript, HTML, CSS, MathJax, Decimal.js, Flask API, Abort API, Heroku CSP",
            description: "GoodEval is a multi-page web app computational package. A main page lists all the pages, and each page is a distinctive computational software.",
            list: <ul>
                <li>Calculator features input pre-validation and post-validation, an edit mode for problem editing, and scientific grade functions presented in a theme-able interface with a history panel.</li>
                <li>Evaluator is powered by the Eval API, which evaluates a math problem string to produce an answer string, offering a whole array of built-in key functions from many key modules.</li>
                <li>Operator explores the concept of operators in a series of dynamically updating calculator forms, ranging from basic arithmetic on numbers to complex matrix operations.</li>
            </ul>,
        },
        {
            name: "Choosy",
            url: "https://bthol.github.io/Choosy/",
            softwareType: "Application Software",
            platform: "Website",
            purpose: "Randomness Utility",
            techStack: "Typescript, SASS, HTML, Github pages",
            description: "Choosy is a simple website for option selection. Need to choose? Choose Choosy!",
            list: <ul>
                <li>Exceptionally robust and simply stylish interface that adapts to a wide range of viewports with ease and clarity.</li>
                <li>Website architecture separates source and build code for integration of transpilable development dependencies.</li>
                <li>Stochastic programming constrained to randomized selection methods' selection process to preserve system stability in other respects</li>
                <li>Quick and lightweight deployment of application via GitHub Pages.</li>
            </ul>,
        },
    ]
};
export { SoftwareContent };