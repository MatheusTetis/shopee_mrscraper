import fs from 'fs';
import vm from 'vm';
import { JSDOM } from 'jsdom';
import { TextEncoder, TextDecoder } from 'util';


// Load the JS file as text
const code = fs.readFileSync('./2.25.869.js', 'utf-8');

// Create a fake DOM
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
    runScripts: 'outside-only',
    url: 'https://example.com',
});

// Create a sandbox
const context = {
    window: dom.window,
    document: dom.window.document,
    navigator: dom.window.navigator,
    console,
    TextEncoder: TextEncoder,
    TextDecoder: TextDecoder,
    globalThis: dom.window,
  };

vm.createContext(context); // Create sandbox
vm.runInContext(code, context);

// Access your module:
const modules = context.globalThis.mfeModules;

const [name, deps, loader] = modules[0];
const platformLoader = loader(); // This returns a promise that resolves to the module
platformLoader().then(exports => {
  console.log(exports); // contains default + named exports
});

