# Portfolio-Frontend
Developer: Blake Thollaug

Description: I developed a portfolio website using the JavaScript, React, HTML, and CSS technologies that is as easy on the eye as its development environment is manageable. This website has a template layout and style with content components for each page's content that are all served, but only conditionally rendered within the template, effectively permitting lightning fast client-side page handlng!

New Pages: As a reference, I have created a generic version of all the files necessary to create new pages, so making new pages is as straightforward as making a copy of those files, changing file names, updating imports, and creating the content that you'd like to display on the new page. Every page has a content component located in the Pages directory. Each content component has a corresponding content object stored as a JS module located in the ContentPropModules directory (to minimize loose data within the content component and structure content props in a single object). Content props are displayed within content components using the display components in the RenderComp directory. Ensure that the names for the new files are unique, but follow the theme of the directory.

Import the new content component to App.js by adding an import statement to the top of the file:
import { NewPage } from './Pages/NewPage';

and add rendering code around line 127:
{page === 4 &&
    <NewPage
        featureAlertFunct={featureAlertFunct}
        mobile={mobile}
    />
}

Ensure that the added code has the same name as the new page's content component in the filename within the path for the import statement, and the same name in the rendering code, and a unique page number. The default page number is 1, and you can set your new page's number to that and comment out the HomePage rending code, so that your new page renders by default while you are working on it. At this point, navigate back to the content component for the new page, and import display components and a content module for use in creating the page using the same import statement syntax as before. Now, you have set everything up for creating a whole new page!

To access any page, use the goPage() function, which takes the page number to which you'd like to navigate as an argument, and then renders the page with that number.