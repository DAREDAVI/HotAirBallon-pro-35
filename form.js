class Form{
    constructor(){}

display(){
    var title=createElement(h1)
    title.htlm("Car pro gamer")
    title.position=(150,15)
    var input=createInput("")
    input.position(150,150)
    var button=createButton("start")
    button.position : (200,250)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name=input.value()
        playerCount=playerCount+1
        player.update(count)
        player.updateCount(playerCount)
    })
}
    
}