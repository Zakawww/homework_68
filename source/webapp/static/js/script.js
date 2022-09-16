async function buttonClick(event) {
    event.preventDefault()
    let target = event.target
    let url = target.dataset.articlesLink;
    console.log(url)
    let response = await fetch(url);
    let articles_json = await response.json()
    console.log(articles_json)
    console.log(articles_json.users)


}

function getArticles() {
    // let button = document.getElementById('button')
    let button = document.getElementById('button')
    button.addEventListener('click', buttonClick)
    // button.onclick(buttonClick)

}

window.addEventListener('load', getArticles)



//
// function like(comment_pk) {
//     const csrftoken = getCookie('csrftoken')
//     $.ajax({
//         url: `http://localhost:8000/api/like/${comment_pk}/`,
//         method: 'POST',
//         headers: {'X-CSRFToken': csrftoken},
//         contentType: 'application/json',
//         dataType: 'json',
//         success: function (response, status) {
//             const like_btn = $(`#like_${comment_pk}`)
//             const dizlike_btn = $(`#dizlike_${comment_pk}`)
//             const likes = $(`#likes_${comment_pk}`)
//             likes.text(response.rating)
//             like_btn.addClass('d-none')
//             dizlike_btn.removeClass('d-none')
//
//         },
//         error: function (response, status) {
//             console.log(response)
//         }
//     })
// }
//
// function dizlike(comment_pk) {
//     const csrftoken = getCookie('csrftoken')
//     $.ajax({
//         url: `http://localhost:8000/api/dizlike/${comment_pk}/`,
//         method: 'POST',
//         headers: {'X-CSRFToken': csrftoken},
//         contentType: 'application/json',
//         dataType: 'json',
//         success: function (response, status) {
//             const like_btn = $(`#like_${comment_pk}`)
//             const dizlike_btn = $(`#dizlike_${comment_pk}`)
//             const likes = $(`#likes_${comment_pk}`)
//             likes.text(response.rating)
//             like_btn.removeClass('d-none')
//             dizlike_btn.addClass('d-none')
//         },
//         error: function (response, status) {
//             console.log(response)
//         }
//     })
// }
//
// function getCookie(name) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         var cookies = document.cookie.split(';');
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
