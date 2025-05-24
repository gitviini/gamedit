
function getPath(filePath = "") {
    return import.meta.dirname + "/src" + filePath
}

export {getPath}