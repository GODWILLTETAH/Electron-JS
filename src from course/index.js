const fs = require ('fs');
        const path = require ('path');
        btnCreate = document.getElementById('btnCreate');
        btnRead = document.getElementById('btnRead');
        btnDelete = document.getElementById('btnDelete');
        fileName = document.getElementById('fileName');
        fileContent = document.getElementById('fileContent');

        let pathName = path.join(__dirname, 'Files');

        btnCreate.addEventListener('click', function (event){
            let file = path.join(pathName, fileName.value)
            let content = fileContent.value
            fs.writeFile(file, content, function(err){
                if (err) {
                    return console.log ('err')
                }
                console.log('file was created')
            })
        })