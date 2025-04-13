const fs = require('fs');
const vm = require('vm');

function importAndRunJavaScript(filePath) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');

        // Create a new context for the script.
        const scriptContext = {
            module: {exports: {}},
            exports: {}
        };
        vm.createContext(scriptContext);

        // Create a Script object from the file content
        const script = new vm.Script(fileContent, {
            filename: filePath
        });

        // Run the script within the context.
        script.runInContext(scriptContext);

        // Determine what to return. If the file doesn't explicitly export,
        // we'llreturn the entire context.
        // You may need to adjust this based on what the file actually does.
        if(Object.keys(scriptContext.module.exports).length > 0) {
            return scriptContext.module.exports;
        } else {
            return scriptContext;
        }
    } catch (error) {
        console.error('Error importing and running JavaScript:', error);
        return null; // Or handle the error as appropriate
    }
}

// Example of usage
const filePath = './2.25.819.js';
const importedResult = importAndRunJavaScript(filePath);

if(importedResult) {
    console.log(importedResult);
    // You might need to check importedResult to see what is available.
    // If it's the context, you can access variables and function
    // that were defined in the file
    console.log(importedResult.mfeModules[0][2].toString().slice(0, 1000))

    console.log(importedResult.mfeModules[0][2]("test")("test"))
    console.log(globalThis.window)
}