`tsc --init --sourceMap --rootDir src --outDir dist`
Run and debug will get you modules issue
choose node
test.ts will not do in default launch.json when we add more files
we wil get a module error so we need to in `"program": "${workspaceFolder}\\dist\\index.js",` 

install ts as dev dependency 
then you need to configure task.json
then hit f1 and run default build task
 