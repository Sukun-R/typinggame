function conversion(sentence) {
    fetch('',{
        "acces_token": "pq06hp8ghaiiajp8",
        "id":5959,
        "jsonrpc":"2.0",
        "method":"jlp.jimservice.conversion",
        "params":{
            "q":sentence,
            "format":"hiragana",
            "mode":"kanakanji",
            "option":["hiragana"]
        }
    }).then(response => response.json())
    .then(commits => console.log(commits[0].author.login));

}
document.getElementById('test').addEventListener('click', function(e){
    conversion('今日はいい天気ですね')
})