nameSpan = document.createElement('span')
nameSpan.textContent = "Randon Shaw"
nameSpan.className = "name"

wroteThis = document.createElement('span')
wroteThis.textContent = ' wrote this Javascript!'

nameHeader = document.createElement('p')
nameHeader.appendChild(nameSpan)
nameHeader.appendChild(wroteThis)

header = document.getElementById('header')
header.textContent = "JavaScript Made This!!"
header.className = "header"
header.appendChild(nameHeader)