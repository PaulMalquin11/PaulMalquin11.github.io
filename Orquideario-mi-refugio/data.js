var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "Entrada",
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
        "yaw": 1.033941711925232,
        "pitch": -0.16748537794744323,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 1.3285059527966805,
          "pitch": 0.08809488918762653,
          "rotation": 0,
          "target": "1-orquideario"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2187777226890919,
          "pitch": -0.5107129013595113,
          "title": "Orquideario Mi Refugio",
          "text": "Orquideario reconocido dentro del cantón en el cual se pueden visualizar orquídeas de muchos tipos que son propias de la región&nbsp;"
        }
      ]
    },
    {
      "id": "1-orquideario",
      "name": "Orquideario",
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
        "yaw": -3.110449090103467,
        "pitch": -0.2776468821263407,
        "fov": 1.3123694188512842
      },
      "linkHotspots": [
        {
          "yaw": 0.49197457743073336,
          "pitch": -0.08354222624704022,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Orquideario Mi Refugio",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
