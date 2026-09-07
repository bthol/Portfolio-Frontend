// module containing static data
// dynamic data is in jsx page
const GameContent = {
    games: [
        {
            // additional properties for use in project carousel
            name:"Space Battle",
            url:"https://bthol.github.io/Space-Battle/",
            description: "Fight off the alien horde for a new high score in this arcade-style battle game!",
            techStack: "JQuery, Express.js, EJS templates, JavaScript, HTML, CSS, JS Modules, MongoDB Atlas, Mongoose ODM, Heroku CSP",
            list: <ul>
                <li>Custom RESTful API linked to a cloud database that allows game scores to be stored between sessions, so that the top 10 scores of all time can be displayed on the scoreboard page.</li>
                <li>State variables, data structures, and Document Object Model (DOM) selections are organized into respective JS modules for best code manageability practices.</li>
                <li>Pages are displayed by calling functions that mutate the DOM and pages are tracked with a global variable that updates when a page's function is run.</li>
                <li>Music and sound FX are designed and crafted with the use of software audio synthesis.</li>
            </ul>,
        },
        {
            name:"Magic 8 Ball",
            url:"https://bthol.github.io/Magic-8-Ball/",
            description: "Enter the mystical with a poignant query for the great magic 8 ball of wonder.",
        },
        {
            name:"Retro Toe",
            url:"https://bthol.github.io/Retro-Toe/",
            description: "Tic Tac Toe, but retro style!",
        },
        {
            name:"Lapis Papyrus Scalpellus",
            url:"https://bthol.github.io/Lapis-Papyrus-Scalpellus/",
            description: "Rock Paper Scissors, but Roman style!",
        },
        {
            name:"Holdiay Tree",
            url:"https://bthol.github.io/holiday-tree/",
            description: "Happy holidays!",
        },
    ]
};
export { GameContent };