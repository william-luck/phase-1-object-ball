function gameObject() {
    const obj = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }

            },

        }, 
        away: {
            teamName: 'Charlotte Hornets',
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2 
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10 
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5 
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0 
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12 
                }
            }
        }
    }
    return obj
}




function homeTeamName() {
    let object = gameObject(); // accesses object return from gameObject function
    return object["home"]["teamName"] // Bracket notation to return the desired element
}



function numPointsScored(playerName) {
    const game = gameObject();
    for (const gameKey in game) { // iterates through game keys (home, away)
        const teamObj = game[gameKey]
        
        for (const teamKey in teamObj) { // iterates through team keys (teamName, colors, players)
            const playerObj = teamObj.players
            
            for (const playerKey in playerObj) {  //iterates through players
                
                if (playerKey === playerName) {  //player check
                    return playerObj[playerKey].points  // return player points. 
                }
            }
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject();
    for (const gameKey in game) { // iterates through game keys (home, away)
        const teamObj = game[gameKey]
        
        for (const teamKey in teamObj) { // iterates through team keys (teamName, colors, players)
            const playerObj = teamObj.players
            
            for (const playerKey in playerObj) {  //iterates through players
                
                if (playerKey === playerName) {  //player check
                    return playerObj[playerKey].shoe  // return player points. 
                }
            }
        }
    }
}

function teamColors(teamName) {
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors
    } else {
        return game.away.colors
    }
}

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName]

}

function playerNumbers(teamName) {
    const playerObj = getTeamObj(teamName).players

    let numbers = []
    for (const player in playerObj) {
        numbers.push(playerObj[player].number)
    }
    return numbers
}

function playerStats(playerName) {
  
    return gameObject().home.players[playerName] ? gameObject().home.players[playerName] : gameObject().away.players[playerName]

}

function bigShoeRebounds() {
    return Object.values(largestShoe())[0].rebounds
}

function mostPointsScored() {
    return sortBy('points')[0]
}

function winningTeam() {
    const homePoints = Object.values(gameObject().home.players).reduce((acc, cur) => acc + cur.points, 0)
    const awayPoints= Object.values(gameObject().away.players).reduce((acc, cur) => acc + cur.points, 0)

    return homePoints > awayPoints ? gameObject().home.teamName : gameObject().away.teamName
}

function playerWithLongestName() {
    return allPlayers().sort((a, b) => Object.keys(b)[0].length - Object.keys(a)[0].length)[0]
}

function doesLongNameStealATon() {
    longestNamePlayerSteals = Object.values(playerWithLongestName())[0].steals;
    
    return allPlayers().every(player => Object.values(player)[0].steals <= longestNamePlayerSteals)
}








// Helpers

function largestShoe() {
    return sortBy('shoe')[0]
}

function mostRebounds() {
    return sortBy('rebounds')[0]
}

function allPlayers() {
    const game = gameObject()
    const homePlayers = game.home.players
    const awayPlayers = game.away.players
    const allPlayers = []

    for (const player in homePlayers) {
       allPlayers.push({[player]: homePlayers[player]})
    }
     for (const player in awayPlayers) {
        allPlayers.push({[player]: awayPlayers[player]})
     }

     return allPlayers
}

function getTeamObj(teamName) {

    const game = gameObject()

    if (game.home.teamName === teamName) {
        return game.home
    } else {
        return game.away
    }
}

function sortBy(stat) {
    return allPlayers().sort((a, b) => Object.values(b)[0][stat] - Object.values(a)[0][stat])
}




    


// for in loop to access top level properties
// for (const key in gameObject()) {
//     let value = gameObject()[key];
//     console.log("key: ", key, "value: ", value)
// }

