const fs = require('fs');
const path = require('path');

const eventDatabasePath = path.join(__dirname, 'src', 'Components', 'EventDatabase.js');

// Function to update JavaScript file with JSON data
const updateJSFile = (jsonData) => {
    try {
        // Remove double quotes from specific keys
        const keysToRemoveQuotes = ['heading', 'location', 'description', 'img', 'category'];
        keysToRemoveQuotes.forEach(key => {
            jsonData.eventListj.forEach(event => {
                if (typeof event[key] === 'string') {
                    event[key] = event[key].replace(/"/g, '');
                }
            });
        });

        // Convert JSON data to JavaScript module format
        let jsCode = '// EventsDataBase.js\n';
        jsCode += 'export const eventList = [\n';
        jsonData.eventListj.forEach((event, index) => {
            jsCode += '    {\n';
            for (const key in event) {
                if (event.hasOwnProperty(key)) {
                    if (key === 'date') {
                        jsCode += `        ${key}: { year: ${event[key].year}, month: "${event[key].month}" }${index === jsonData.eventListj.length - 1 && key === 'category' ? '' : ',\n'}`;
                    } else if (key === 'description') {
                        jsCode += `        ${key}: \`${event[key]}\`${index === jsonData.eventListj.length - 1 && key === 'category' ? '' : ',\n'}`;
                    } else if (key === 'id') {
                        jsCode += `        ${key}: ${event[key]}${index === jsonData.eventListj.length - 1 && key === 'category' ? '' : ',\n'}`;
                    } else {
                        jsCode += `        ${key}: "${event[key]}"${index === jsonData.eventListj.length - 1 && key === 'category' ? '' : ',\n'}`;
                    }
                }
            }
            jsCode += '\n    }';
            jsCode += `${index === jsonData.eventListj.length - 1 ? '' : ','}\n`;
        });
        jsCode += '];\n';

        // Write the JavaScript module to the file
        fs.writeFileSync(eventDatabasePath, jsCode);

        console.log('Update successful. EventDatabase.js updated.');
    } catch (error) {
        console.error('Error updating JavaScript file:', error);
    }
};

// Watch for changes in the JSON file
fs.watch('EventDatabase.json', (eventType, filename) => {
    console.log(`Event type: ${eventType}`);
    console.log(`Filename: ${filename}`);

    // Read the updated JSON file
    fs.readFile('EventDatabase.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            // Update the JavaScript file with the new JSON data
            updateJSFile(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
});

console.log('Watching for changes in EventDatabase.json...');
