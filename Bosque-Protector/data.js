var APP_DATA = {
  "scenes": [
    {
      "id": "0-paramo",
      "name": "Paramo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6877790978957883,
          "pitch": -0.3699574233664915,
          "rotation": 0,
          "target": "1-bosque"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.05999834618006261,
          "pitch": -0.6859087346907984,
          "title": "Bosque Protector Loma Corazón y Bretaña",
          "text": "<p class=\"MsoNormal\">Se puede realizar caminatas de recorrido, iniciando desde la\nestación Guanderas, en un tiempo de tres horas, y a una altura aproximada de\n3540 msnm<o:p></o:p></p>"
        }
      ]
    },
    {
      "id": "1-bosque",
      "name": "Bosque",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6980988037951423,
          "pitch": -0.16091104282868862,
          "rotation": 0,
          "target": "0-paramo"
        },
        {
          "yaw": -0.017199738978021628,
          "pitch": 0.11247971789437372,
          "rotation": 0,
          "target": "2-panoramica"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-panoramica",
      "name": "Panoramica",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6332600654962643,
          "pitch": -0.051585912652182486,
          "rotation": 0,
          "target": "1-bosque"
        },
        {
          "yaw": 0.5192552099634966,
          "pitch": -0.0006355893805896073,
          "rotation": 0,
          "target": "0-paramo"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Bosque Protector Loma Corazón y Bretaña",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
