async function buttonClick(event) {
    event.preventDefault()
    let target = event.target
    let url = target.dataset.articlesLink;
    console.log(url)
    let response = await fetch(url);
    let articles_json = await response.json()
    let button = document.getElementById('button')

    if (articles_json?.likes === 1) {
        button.classList.remove('btn-info')
        button.classList.add('btn-success')
    } else {
        button.classList.remove('btn-success')
        button.classList.add('btn-info')
    }
}

async function buttonClickCom(event) {
    event.preventDefault()
    let target = event.target
    let url = target.dataset.commentsLink;
    console.log(url)
    let response = await fetch(url);
    let comments_json = await response.json()

    let button_c = document.getElementById('button_c')
    if (comments_json?.likes === 1) {
        button_c.classList.remove('btn-info')
        button_c.classList.add('btn-success')
    } else {
        button_c.classList.remove('btn-success')
        button_c.classList.add('btn-info')
    }
}

async function getArticles() {
    let button = document.getElementById('button')
    let button_c = document.getElementById('button_c')

    button.addEventListener('click', buttonClick)
    button_c.addEventListener('click', buttonClickCom)

}

window.addEventListener('load', getArticles)

