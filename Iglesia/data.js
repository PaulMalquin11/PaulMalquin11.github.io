var APP_DATA = {
  "scenes": [
    {
      "id": "0-puerta",
      "name": "Puerta",
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
        "yaw": -0.04239971600517123,
        "pitch": -0.26345842453296875,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.007130915572698626,
          "pitch": 0.24753545977203828,
          "rotation": 0,
          "target": "1-inicio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.07965695906608,
          "pitch": -0.6617126098750159,
          "title": "Santuario Nuestra Señora de la Purificación",
          "text": "<p class=\"MsoNormal\">El día mayor para venerar a La Purita de Huaca es el 2 de\nfebrero, en el que se celebra una misa campal para bendecir a los devotos. La\nVirgen tiene, al momento, un promedio de 300 vestidos<o:p></o:p></p>"
        }
      ]
    },
    {
      "id": "1-inicio",
      "name": "Inicio",
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
        "yaw": -1.438136973323548,
        "pitch": 0.1935160897728423,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": -1.5007888644574052,
          "pitch": -0.31282109911454015,
          "rotation": 0,
          "target": "2-altar"
        },
        {
          "yaw": 1.645918063523796,
          "pitch": -0.11431703832700713,
          "rotation": 0,
          "target": "0-puerta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-altar",
      "name": "Altar",
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
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0.0891074642934413,
        "pitch": 0.013515481000432317,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.00458700492261066,
          "pitch": -0.5877486266461265,
          "rotation": 0,
          "target": "3-cuadros"
        },
        {
          "yaw": -3.1103033698244165,
          "pitch": -0.3381108437229745,
          "rotation": 0,
          "target": "1-inicio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cuadros",
      "name": "Cuadros",
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
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": -1.116110850259025,
        "pitch": 0.1419817594050734,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 1.7994463813934054,
          "pitch": 0.14056517686679726,
          "rotation": 0,
          "target": "2-altar"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Santuario Nuestra Señora de la Purificación",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
