const target1 = document.getElementsByTagName('input')[0];
const target2 = document.getElementsByTagName('input')[1];

const body = document.getElementById('body');
const ele1 = document.getElementById('start_button');
const par1 = document.getElementById('start');

ele1.addEventListener('click', function(e){
    if(!target1.value){
        alert('ファイルを選択してください。')
    }
    if(!target2.value){
        alert('出題数を入力してください。')
    }
    if(Number(target2.value) < 1 && !(target2.value === '')){
        alert('1以上の出題数を入力してください。')
    }
    if(Number(target2.value) > 1000){
        alert('1000以下の出題数を入力してください。')
    }
    if(!(!target1.value || !target2.value || Number(target2.value) < 1 || Number(target2.value) > 1000)){
        par1.remove()
    }

    const space = document.createElement('h1');
    space.textContent = 'スペースキーを押してください'
    space.id = 'space'
    body.appendChild(space)
})