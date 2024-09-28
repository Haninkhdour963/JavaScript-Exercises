function formatText(command) {
    document.execCommand(command, false, null);
}

function setAlignment(alignment) {
    document.execCommand('justify' + alignment, false, null);
}

function uppercase() {
    const notepad = document.getElementById('notepad');
    notepad.innerHTML = notepad.innerHTML.toUpperCase();
}

function lowercase() {
    const notepad = document.getElementById('notepad');
    notepad.innerHTML = notepad.innerHTML.toLowerCase();
}

function capitalize() {
    const notepad = document.getElementById('notepad');
    notepad.innerHTML = notepad.innerHTML
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function clearText() {
    document.getElementById('notepad').innerHTML = '';
}

function changeTextColor(color) {
    document.execCommand('foreColor', false, color);
}

function changeFillColor(color) {
    document.execCommand('backColor', false, color);
}

function changeFontSize(size) {
    if (size) {
        document.execCommand('fontSize', false, '7'); // Use size '7' for custom sizes
        const fontElements = document.getElementsByTagName('font');
        for (let i = 0; i < fontElements.length; i++) {
            fontElements[i].size = '';
            fontElements[i].style.fontSize = size;
        }
    }
}

function changeFontFamily(family) {
    if (family) {
        document.execCommand('fontName', false, family);
    }
}

function printText() {
    const content = document.getElementById('notepad').innerHTML;
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
            <head><title>Print</title></head>
            <body>${content}</body>
        </html>
    `);
    newWindow.document.close();
    newWindow.print();
}
