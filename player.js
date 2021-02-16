class Player{
    constructor(){}

    getState(){
        var playerCountref=database.ref("playerCount")
        playerCountref.on("value",function(data){
            playerCount=data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount:count
        })
    }