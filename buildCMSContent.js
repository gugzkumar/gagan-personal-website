const path = require('path');
const yaml = require('js-yaml');
var fs = require('fs');

const INPUT_CMS_DIRECTORY = 'public/content';
const OUTPUT_CMS_CONFIGS_DIRECTORY = 'src/cmsConfigs';

// A function that reads a yaml file and returns the content as a JSON object using js-yaml
const readYamlFile = (filePath) => {
    try {
        console.log('Reading file: ' + filePath);
        const fileContent = fs.readFileSync
            (filePath, 'utf8');
        const jsonContent = yaml.load(fileContent);
        return jsonContent;
    } catch (e) {
        console.log(e);
    }
};

// A function that writes a JSON object to a file path
const writeJSONToFile = (filePath, jsonContent) => {
    try {
        console.log('Writing file: ' + filePath);
        fs.writeFileSync(filePath, JSON.stringify(jsonContent), {
            encoding: 'utf8',
            flag: 'wx'
        });
    } catch (e) {
        console.log(e);
    }
};

// A function that deletes all files in a folder
const deleteFolderRecursive = (folderPath) => {
    const files = fs.readdirSync(folderPath);
    // Store folder of filePath in a variable
    files.forEach(file => {
        if (file !== '.gitkeep') {
            const filePath = path.join(folderPath, file);
            console.warn('Deleting file: ' + filePath);
            if (fs.lstatSync(filePath).isDirectory())
                fs.rmSync(filePath, { recursive: true, force: true });
            else
                fs.unlinkSync(filePath);
        }
    });
}

// A function that reads a json file and returns the content as a JSON object
const readJSONFile = (filePath) => {
    try {
        console.log('Reading file: ' + filePath);
        const fileContent = fs.readFileSync
            (filePath, 'utf8');
        const jsonContent = JSON.parse(fileContent);
        return jsonContent;
    } catch (e) {
        console.log(e);
    }
};

//  A function that copies a file from one file path to another
const copyFile = (srcPath, destPath) => {
    try {
        console.log('Copying file: ' + srcPath + ' to ' + destPath);
        fs.copyFileSync(srcPath, destPath);
    } catch (e) {
        console.log(e);
    }
};

const main = () => {
    // Read public/admin/config.yml and convert it to JSON
    const { collections } = readYamlFile(path.join(__dirname, 'public/admin/config.yml'));
    const inputFolders = collections.map(collection => collection.name);

    // Deletes a files in src/cmsConfigs
    deleteFolderRecursive(path.join(__dirname, `/${OUTPUT_CMS_CONFIGS_DIRECTORY}`));

    const jsonFiles = [];
    // Loop through all folders in INPUT_FOLDERS
    inputFolders.forEach(folder => {
        // Read all files in the folder
        const files = fs.readdirSync(path.join(__dirname, INPUT_CMS_DIRECTORY, folder));
        // Loop through all files in the folder
        files.forEach(file => {
            const filePath = path.join(__dirname, INPUT_CMS_DIRECTORY, folder, file);
            const cmsFileAsJSON = readJSONFile(filePath);
            // Remove body from the JSON object to reduce the size of the config file
            delete cmsFileAsJSON['body'];
            cmsFileAsJSON['routePath'] = `${folder}/${path.parse(file).name}`;
            jsonFiles.push(cmsFileAsJSON);
        });
        // Write the JSON object to a file in src/cmsConfigs containing metadata for all files in the folder
        const postConfigFilePath = path.join(__dirname, OUTPUT_CMS_CONFIGS_DIRECTORY, `${folder}.json`);
        writeJSONToFile(postConfigFilePath, jsonFiles);
    });
}

main();