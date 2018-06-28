const svgFirst = document.body.querySelectorAll('.block__icon--eye')
const svgSecond = document.body.querySelectorAll('.block__icon--weight')

for ( let i = 0; i < svgFirst.length;i++){
    const path = svgFirst[i].querySelector('g path');
    svgFirst[i].addEventListener('mouseover',function(){
    path.setAttribute('style','fill: #7ED321');
    });
    svgFirst[i].addEventListener('mouseleave',function(){
    path.setAttribute('style','fill:#D9DBDC');
    });
}

for ( let i = 0; i < svgSecond.length;i++){
    const pathSecond = svgSecond[i].querySelector('g path');
    const pathThird = svgSecond[i].querySelector('g path:nth-child(2)');
    const pathFourth = svgSecond[i].querySelector('g path:nth-child(3)');
    svgSecond[i].addEventListener('mouseover',function(){
    pathSecond.setAttribute('style','fill: #4A90E2');
    pathThird.setAttribute('style','fill: #4A90E2');
    pathFourth.setAttribute('style','fill: #4A90E2');
    })
    svgSecond[i].addEventListener('mouseleave',function(){
    pathSecond.setAttribute('style','fill:#D9DBDC');
    pathThird.setAttribute('style','fill:#D9DBDC');
    pathFourth.setAttribute('style','fill:#D9DBDC');
    });
}

