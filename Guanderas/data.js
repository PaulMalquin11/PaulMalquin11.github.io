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
      "faceSize": 1767.5,
      "initialViewParameters": {
        "yaw": 0.2435872564739867,
        "pitch": 0.11288452244204095,
        "fov": 1.1731136983679884
      },
      "linkHotspots": [
        {
          "yaw": 1.810014634503121,
          "pitch": 0.20782790082999014,
          "rotation": 0,
          "target": "1-caminata"
        },
        {
          "yaw": -2.207204843372349,
          "pitch": 0.13370126679583194,
          "rotation": 0,
          "target": "2-montaa"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3135538676651617,
          "pitch": -0.32778347266411956,
          "title": "Estación Biológica Guanderas",
          "text": "<p class=\"MsoNormal\">La Estación Guanderas es considerada la región más rica y\ndiversa del mundo, según investigaciones del ecologista británico Norman Meyer,\npor albergar casi un sexto de toda la vida vegetal en menos de 1% del total de\nla superficie de la tierra.<o:p></o:p></p>"
        }
      ]
    },
    {
      "id": "1-caminata",
      "name": "Caminata",
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
          "yaw": -2.3940125723685775,
          "pitch": -0.2854616034302211,
          "rotation": 0,
          "target": "0-inicio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-montaa",
      "name": "Montaña",
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
          "yaw": -0.5665742090492536,
          "pitch": -0.010154652902999217,
          "rotation": 0,
          "target": "0-inicio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Estación Biológica Guanderas",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
