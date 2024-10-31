let title = document.createElement('h2')
title.className = 'main'
title.style.color = 'blue'
title.style.fontSize = '40px'
title.textContent = 'Creating HTML element DOM Day'

document.body.append(title)

for(let i = 1; i <= 10;i++){
    let title = document.createElement('h2')
    title.className = 'main'
    title.style.color = '#fff'
    title.style.fontSize = '40px'
    title.style.backgroundColor = 'black'
    title.textContent = 'Creating HTML element DOM Day' + i
    document.body.append(title)
}

const allH2Elements = document.querySelectorAll('h2.main')

for(let elem of allH2Elements){
    elem.remove()
    // document.body.removeChild(elem)
}