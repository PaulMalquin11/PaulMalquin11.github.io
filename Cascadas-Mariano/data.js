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
        "yaw": 3.087776134781352,
        "pitch": -0.02870373962041839,
        "fov": 1.1731136983679884
      },
      "linkHotspots": [
        {
          "yaw": -1.0913510848687196,
          "pitch": -0.23523343479937964,
          "rotation": 0,
          "target": "1-riachuelo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1129545070752123,
          "pitch": -0.5064576809436954,
          "title": "Cascada Mariano",
          "text": "Conjunto de cascadas ubicadas en el cantón San Pedro de Huaca, son una opción natural para liberar estrés y pasar un día con la familia.&nbsp;"
        }
      ]
    },
    {
      "id": "1-riachuelo",
      "name": "Riachuelo",
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
        "yaw": 3.0838771866574994,
        "pitch": -0.3458875580211753,
        "fov": 1.1731136983679884
      },
      "linkHotspots": [
        {
          "yaw": 1.367921218119422,
          "pitch": -0.4007052746845208,
          "rotation": 0,
          "target": "0-entrada"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cascada Mariano",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
