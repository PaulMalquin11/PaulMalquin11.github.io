var APP_DATA = {
  "scenes": [
    {
      "id": "0-panorama",
      "name": "Panorama",
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
        "yaw": 1.6126366494061042,
        "pitch": -0.17617129920935426,
        "fov": 1.1731136983679884
      },
      "linkHotspots": [
        {
          "yaw": 0.06808932576274707,
          "pitch": -0.09723822628014744,
          "rotation": 0,
          "target": "1-bosque"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9804825979887646,
          "pitch": -0.553386134395172,
          "title": "Nariz del diablo",
          "text": "<span style=\"font-size:11.0pt;line-height:107%;\nfont-family:&quot;Calibri&quot;,sans-serif;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:\nCalibri;mso-fareast-theme-font:minor-latin;mso-hansi-theme-font:minor-latin;\nmso-bidi-font-family:&quot;Times New Roman&quot;;mso-bidi-theme-font:minor-bidi;\nmso-ansi-language:ES-EC;mso-fareast-language:EN-US;mso-bidi-language:AR-SA\">Ubicada\nal sur de la reserva a 3800 msnm , con un recorrido total de aproximadamente 6\nhoras iniciando desde guanderas. Durante la caminata puede apreciar la vista de\nlos pantanos y lagunas que rodean el extenso páramo de frailejones</span>"
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.1276255878947588,
        "pitch": -0.11694398741553158,
        "fov": 1.1731136983679884
      },
      "linkHotspots": [
        {
          "yaw": 3.009219568129126,
          "pitch": 0.16319174944691994,
          "rotation": 0,
          "target": "0-panorama"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Nariz del diablo",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
