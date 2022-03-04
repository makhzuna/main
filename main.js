let trending = 'https://api.giphy.com/v1/gifs/trending?api_key=fymnh9sh36Kf77i6UVfc9osJH3pjED1d&limit=20'

let giphyUrl = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=fymnh9sh36Kf77i6UVfc9osJH3pjED1d&limit=20`).then(res => res.json())
let content = document.getElementsByClassName('giphy-content')[0]
const apiKye ='fymnh9sh36Kf77i6UVfc9osJH3pjED1d';

const getGiphy = async (url) =>{
    const res = await fetch(`https://api.giphy.com/v1/gifs/${url}`)
    return  await res.json()
}
 
let giphyInput = document.getElementsByClassName('search-in')[0]
// let searchBtn = document.getElementsByClassName('search-btn')[0]

function giphy(){
    const a  = await getGiphy(`trending?api_key=${apiKye}&limit=20`).then(data =>{
        for (let i =0; i<data.data.length; i++){
            content.innerHTML += `
            <div class='giphy-items'>
            </div>`
            let items = document.getElementsByClassName('giphy-items')
            items[i].innerHTML += `
            <iframe src='${data.data[i].embed_url}' frameborder="0"></iframe>
            <button class = 'dowloand'>Dowloand</button>
            `
        }
        // return await a
    })
    // return a()
    // giphyUrl.then(data =>  {
    //     for (let i =0; i<data.data.length; i++){
    //         content.innerHTML += `
    //         <div class='giphy-items'>
    //         </div>`
    //         let items = document.getElementsByClassName('giphy-items')
    //         items[i].innerHTML += `
    //         <iframe src='${data.data[i].embed_url}' frameborder="0"></iframe>
    //         <button class = 'dowloand'>Dowloand</button>
    //         `
    //     }
    // }) 
}
giphy()
const searchButton =  () => {
    console.log(1)
    // getGiphy(`search?api_key=${apiKye}q=${giphyInput.value}&limit=20`).then(data => {
    //     console.log(data)
    //     for (let i =0; i<data.data.length; i++){
    //         content.innerHTML += `
    //         <div class='giphy-items'>
    //         </div>`
    //         let items = document.getElementsByClassName('giphy-items')
    //         items[i].innerHTML += `
    //         <iframe src='${data.data[i].embed_url}' frameborder="0"></iframe>
    //         <button class = 'dowloand'>Dowloand</button>
    //         `
    //     }
    // })
    // return  a
    // fetch(`https://api.giphy.com/v1/gifs/search?api_key=fymnh9sh36Kf77i6UVfc9osJH3pjED1d&q=${giphyInput.value}&limit=15`).then(res => res.json()).then(data =>{
    //     console.log(data);
    //     !giphy()
    //     for (let i =0; i<data.data.length; i++){
    //         content.innerHTML += `
    //         <div class='giphy-items'>
    //         </div>`
    //         let items = document.getElementsByClassName('giphy-items')
    //         items[i].innerHTML += `
    //         <iframe src='${data.data[i].embed_url}' frameborder="0"></iframe>
    //         <button class = 'dowloand'>Dowloand</button>
    //         `
    //     }

    // })
    // console.log(giphyInput.value)
}
// searchBtn()
// function val(){
//     searchBtn(giphyInput)
// }