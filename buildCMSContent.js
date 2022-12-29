const path = require('path');
const yaml = require('js-yaml');
var fs = require('fs');

const OUTPUT_DIRECTORY = 'public/content';
const OUTPUT_CMS_CONFIGS_DIRECTORY = 'src/cmsConfigs';
const INPUT_FOLDERS = ['posts'];
const INFO_DELIMITER = '---';

// A function that reads a yaml file and returns the content as a JSON object using js-yaml
const readYamlFile = (filePath) => {
    try {
        const fileContent = fs.readFileSync
            (filePath, 'utf8');
        const jsonContent = yaml.load(fileContent);
        return jsonContent;
    } catch (e) {
        console.log(e);
    }
};

// A function that loops through a file created by Netlify CMS and returns the content as a JSON object
const cmsFileToJSON = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const fileContentArray = fileContent.split('\n');
    let nDelimiters = 0;
    let info = {};
    let body = "";
    let currentVar = "";
    let currentVarValue = "";
    fileContentArray.forEach(
        line => {
            if (line.startsWith(INFO_DELIMITER)) {
                nDelimiters += 1;
                if (nDelimiters == 2) info[currentVar] = currentVarValue;
            } else if (nDelimiters < 2) {
                if (line.startsWith(' ')) {
                    currentVarValue += " " + line.trimStart();
                }
                else {
                    if (currentVar !== "") info[currentVar] = currentVarValue;
                    currentVar = line.split(': ')[0];
                    currentVarValue = line.split(': ')[1];
                }
            } else {
                body += line + "\n";
            }
        }
    );
    info['body'] = body;
    return info;
};

// A function that writes a JSON object to a file path
const writeJSONToFile = (filePath, jsonContent) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(jsonContent),{
            encoding: 'utf8',
            flag: 'wx'
        });
    } catch (e) {
        console.log(e);
    }
};

const deleteFolderRecursive = (folderPath) => {
    const files = fs.readdirSync(folderPath);
    // Store folder of filePath in a variable
    files.forEach(file => {
        if (file !== '.gitkeep') {
            const filePath = path.join(folderPath, file);
            console.warn('Deleting file: ' + filePath);
            if(fs.lstatSync(filePath).isDirectory())
                fs.rmSync(filePath, { recursive: true, force: true });
            else
                fs.unlinkSync(filePath);
        }
    });
}

const main = () => {
    const config = readYamlFile('./public/admin/config.yml');
    // Deletes a files in public/content and src/cmsConfigs
    deleteFolderRecursive(path.join(__dirname, `/${OUTPUT_DIRECTORY}`));
    deleteFolderRecursive(path.join(__dirname, `/${OUTPUT_CMS_CONFIGS_DIRECTORY}`));

    const outputFiles = [];
    INPUT_FOLDERS.forEach(folder => {
        const files = fs.readdirSync(path.join(__dirname, `/${folder}`));
        const outputFolder = path.join(__dirname, OUTPUT_DIRECTORY, folder);
        fs.mkdirSync(outputFolder, { recursive: true });
        files.forEach(file => {
            const filePath = path.join(__dirname, `/${folder}/${file}`);
            const cmsFileAsJSON = cmsFileToJSON(filePath);
            const jsonFileName = file.split('.')[0] + '.json';
            const jsonFilePath = path.join(outputFolder, `${jsonFileName}`);
            writeJSONToFile(jsonFilePath, cmsFileAsJSON);
            delete cmsFileAsJSON['body'];
            // cmsFileAsJSON['filePath'] = `${folder}/${file}`;
            cmsFileAsJSON['filePath'] = `${folder}/${path.parse(file).name}`;
            outputFiles.push(cmsFileAsJSON);
        });
        const postConfigFilePath = path.join(__dirname, OUTPUT_CMS_CONFIGS_DIRECTORY, `${folder}.json`);
        console.log(postConfigFilePath);
        writeJSONToFile(postConfigFilePath, outputFiles);
    });
}

main();