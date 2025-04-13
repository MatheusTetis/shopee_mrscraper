Hi everyone! I hope you're doing good!

Let me explain the process that I passed during the reasoning and development.

I started on Tuesday 8th trying to make reverse engineering by replicating the logic that generates the "x-sap-ri" and "x-sap-sec" headers needed to request the get_pc endpoint.

Until Friday 11th I was resolving dependencies and replicating the Shopee Javascript behavior under the covers, but I didn't manage to reuse the "l.MIf" call from the "2.25.819.js" file imported into the Shopee's DOM.

After that, I tried:
1. Splitting the code into different files to be imported into one (I got the same error on the function "c");
1. Trying to import and resolve the export Promise (I didn't manage to do it, got a Javascript gap);
1. Getting the needed headers from the requests made in the browser network:
   1. This here was the one I got results followed to the deploy;
   2. I check every request header running under the covers to get the headers that filled the needs;
   3. Then I made a request to "get_pc" endpoint using axios, with the gotten header and proxies;
   4. Finally I was able to deploy it to GitHub, connecting to Ngrok and displaying a public endpoint.