var APP_DATA = {
  "scenes": [
    {
      "id": "0-inicio",
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
        "yaw": 1.5413902349215656,
        "pitch": 0.08149637682893385,
        "fov": 1.1731136983679884
      },
      "linkHotspots": [
        {
          "yaw": 2.6154797659173354,
          "pitch": -0.1872926814964302,
          "rotation": 0,
          "target": "1-cerro-mirador"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5461313699986654,
          "pitch": -0.053082127054793204,
          "title": "Cerro Mirador",
          "text": "<p class=\"MsoNormal\">Se puede realizar caminatas de recorrido, iniciando desde la\nestación Guanderas, en un tiempo de tres horas, y a una altura aproximada de\n3540 msnm., se observa desde el alto páramo nace un salto de agua de 20 m, que\ncubre la cuenca del bosque de la reserva.<o:p></o:p></p>"
        }
      ]
    },
    {
      "id": "1-cerro-mirador",
      "name": "Cerro Mirador",
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
        "yaw": -0.08115464222403546,
        "pitch": 0.011230776517454188,
        "fov": 1.1731136983679884
      },
      "linkHotspots": [
        {
          "yaw": 0.25822384539934795,
          "pitch": -0.20603054244035768,
          "rotation": 0,
          "target": "0-inicio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cerro Mirador",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
