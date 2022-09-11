const overview = `
This is an API that implements a few retro game logics that you can use
to practice frontend development with.

Of course this is not an optimal solution, But I thought it can be useful
for learning purposes, for concepts like:

- Concurrency
- Network latency
- Separation of concerns

So you can learn about them with games involved 😀, which always makes things more fun I think.

╔════════════════════════════════ Example implementations ═════════════════════════════╗
║                                                                                      ║
║                   Running game:                                                      ║
║                   https://sore-plum-boa-veil.cyclic.app/{game}/html                   ║
║                                                          ┃                           ║
║                                                          ┃                           ║
║                                 snake ━━━━━━┓            ┃                           ║
║                                tetris ━━━━━━╋━━━━━━━━━━━━┻━━━━━━━━━━┓                ║
║                         spaceInvaders ━━━━━━┛                       ┃                ║
║                                                                     ┃                ║
║                                                                     ┃                ║
║   Code:                                                             ┃                ║
║   https://github.com/AdamGonda/retrogameapi/tree/master/src/games/{game}/frontend    ║
║                                                                                      ║
╚══════════════════════════════════════════════════════════════════════════════════════╝

How does it work?
The API has two important routes:

GET - {game}/init
Works like a starting point for a given game.

POST - {game}/update
Calculates the next state of the game, something like (currentState, input) => newState
PS: It returns a list as well forRender
`

const snake = `
API

const availableInputs: [ "RIGHT", "LEFT", "UP", "DOWN" ]

// for init call -> GET - https://sore-plum-boa-veil.cyclic.app/snake/init
const response = {
  "snake": {
    "body": [
      {
        "x": 15,
        "y": 10,
        "pX": 14,
        "pY": 10
      }
    ],
    "dir": "RIGHT"
  },
  "food": {
    "x": 13,
    "y": 10
  },
  "view": {
    "width": 30,
    "height": 20
  },
  "isGameOver": false
}

// for update call -> POST - https://sore-plum-boa-veil.cyclic.app/snake/update
const payload = {
  "state": {
    "snake": {
      "body": [
        {
          "x": 15,
          "y": 10,
          "pX": 14,
          "pY": 10,
        },
      ],
      "dir": "RIGHT",
    },
    "food": {
      "x": 13,
      "y": 10,
    },
    "view": {
      "width": 30,
      "height": 20,
    },
    "isGameOver": false,
  },
  "input": "RIGHT",
}

  const response = {
    "newState": {
      "snake": {
        "body": [
          {
            "x": 16,
            "y": 10,
            "pX": 15,
            "pY": 10,
          }
        ],
        "dir": "RIGHT"
      },
      "food": {
        "x": 13,
        "y": 10
      },
      "view": {
        "width": 30,
        "height": 20
      },
      "isGameOver": true
    },
    "forRender": [
      {
        "x": 13,
        "y": 10,
        "tag": "food"
      },
      {
        "x": 29,
        "y": 10,
        "tag": "head"
      }
    ],
  }
}
`

const spaceInvaders = `
API

const availableInputs: [ "RIGHT", "LEFT", "UP", "DOWN" ]

// for init call -> GET - https://sore-plum-boa-veil.cyclic.app/space-invaders/init
const response = {
  "ship": {
    "x": 18,
    "y": 18,
    "bullets": [],
    "lives": 3
  },
  "enemies": {
    "instances": [
      {
        "x": 0,
        "y": 0
      },
      {
        "x": 1,
        "y": 0
      },
      {
        "x": 2,
        "y": 0
      },
      ...truncated
    ],
    "bullets": [],
    "dir": "RIGHT",
    "downStep": 1,
    "shootChance": 0.01
  },
  "plane": {
    "width": 30,
    "height": 20
  },
  "isGameOver": false
}

// for update call -> POST - https://sore-plum-boa-veil.cyclic.app/space-invaders/update
const payload = {
  "state": {
    "ship": {
      "x": 18,
      "y": 18,
      "bullets": [],
      "lives": 3
    },
    "enemies": {
    "instances": [
      {
        "x": 0,
        "y": 0
      },
      {
        "x": 1,
        "y": 0
      },
      {
        "x": 2,
        "y": 0
      },
      ...truncated
    ],
    "bullets": [],
    "dir": "RIGHT",
    "downStep": 1,
    "shootChance": 0.01
    },
    "plane": {
      "width": 30,
      "height": 20
    },
    "isGameOver": false
  }
}

const response = {
  "newState": {
    "ship": {
      "x": 18,
      "y": 18,
      "bullets": [],
      "lives": 3
    },
    "enemies": {
      "instances": [
        {
          "x": 1,
          "y": 0
        },
        {
          "x": 2,
          "y": 0
        },
        {
          "x": 3,
          "y": 0
        },
        ...truncated
      ],
      "bullets": [
        {
          "x": 13,
          "y": 1,
          "dir": "DOWN"
        }
      ],
      "dir": "RIGHT",
      "downStep": 1,
      "shootChance": 0.01
    },
    "plane": {
      "width": 30,
      "height": 20
    },
    "isGameOver": false
  },
  "forRender": [
    {
      "x": 18,
      "y": 18,
      "tag": "ship",
      "lives": 3
    },
    {
      "x": 1,
      "y": 0,
      "tag": "enemy"
    },
    {
      "x": 2,
      "y": 0,
      "tag": "enemy"
    },
    ...truncated
  ]
}
`

const tetris = `
API

const availableInputs: [ "RIGHT", "LEFT", "UP", "DOWN" ]

// for init call -> GET - https://sore-plum-boa-veil.cyclic.app/tetris/init
const response = {
  "active": {
    "items": [
      {
        "x": 6,
        "y": 22
      },
      {
        "x": 6,
        "y": 23
      },
      {
        "x": 6,
        "y": 21
      },
      {
        "x": 6,
        "y": 20
      }
    ],
    "id": "LINE",
    "angle": "SOUTH"
  },
  "collisionMap": {
    "0": {
      "13": "WALL",
      "-1": "WALL"
    },
    "1": {
      "13": "WALL",
      "-1": "WALL"
    },
    "-1": {
      "0": "FLOOR",
      "1": "FLOOR",
      "2": "FLOOR",
      "3": "FLOOR",
      "4": "FLOOR",
      "5": "FLOOR",
      "6": "FLOOR",
      "7": "FLOOR",
      "8": "FLOOR",
      "9": "FLOOR",
      "10": "FLOOR",
      "11": "FLOOR",
      "12": "FLOOR"
    }
    ...truncated
  },
  "view": {
    "width": 12,
    "height": 22
  },
  "isGameOver": false
}


// for update call -> POST - https://sore-plum-boa-veil.cyclic.app/tetris/update
const payload = {
  "state": {
    "active": {
      "items": [
        {
          "x": 6,
          "y": 22
        },
        {
          "x": 6,
          "y": 23
        },
        {
          "x": 6,
          "y": 21
        },
        {
          "x": 6,
          "y": 20
        }
      ],
      "id": "LINE",
      "angle": "SOUTH"
    },
    "collisionMap": {
      "0": {
        "13": "WALL",
        "-1": "WALL"
      },
      "1": {
        "13": "WALL",
        "-1": "WALL"
      },
      "-1": {
        "0": "FLOOR",
        "1": "FLOOR",
        "2": "FLOOR",
        "3": "FLOOR",
        "4": "FLOOR",
        "5": "FLOOR",
        "6": "FLOOR",
        "7": "FLOOR",
        "8": "FLOOR",
        "9": "FLOOR",
        "10": "FLOOR",
        "11": "FLOOR",
        "12": "FLOOR"
      }
      ...truncated
    },
  "view": {
    "width": 12,
    "height": 22
  },
  "isGameOver": false
  },
  "input": null
}

const response = {
  "newState": {
    "active": {
      "items": [
        {
          "x": 6,
          "y": 21
        },
        {
          "x": 6,
          "y": 22
        },
        {
          "x": 6,
          "y": 20
        },
        {
          "x": 6,
          "y": 19
        }
      ],
      "id": "LINE",
      "angle": "SOUTH"
    },
    "collisionMap": {
      "0": {
        "13": "WALL",
        "-1": "WALL"
      },
      "1": {
        "13": "WALL",
        "-1": "WALL"
      },
      "2": {
        "13": "WALL",
        "-1": "WALL"
      },
      ... truncated
      "-1": {
        "0": "FLOOR",
        "1": "FLOOR",
        "2": "FLOOR",
        "3": "FLOOR",
        "4": "FLOOR",
        "5": "FLOOR",
        "6": "FLOOR",
        "7": "FLOOR",
        "8": "FLOOR",
        "9": "FLOOR",
        "10": "FLOOR",
        "11": "FLOOR",
        "12": "FLOOR"
      }
    },
    "view": {
      "width": 12,
      "height": 22
    },
    "isGameOver": false
  },
  "forRender": [
    {
      "x": 6,
      "y": 21,
      "tag": "item"
    },
    {
      "x": 6,
      "y": 22,
      "tag": "item"
    },
    {
      "x": 6,
      "y": 20,
      "tag": "item"
    },
    {
      "x": 6,
      "y": 19,
      "tag": "item"
    }
  ]
}
`

export default [overview, snake, spaceInvaders, tetris]
