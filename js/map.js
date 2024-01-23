function initializeMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicmVuYWNza24iLCJhIjoiY2xyaHJvOG04MDI3ejJ0b3N1cmt6a29vNiJ9.ZCS9Bm3qbHLJFEZPBNM5dg';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        // style: 'mapbox://styles/renacskn/clrhub2ni00l401pd6nt505f4',
        center: [27.142826, 38.423733],
        zoom: 1.15
    });

    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Portugal</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -8.27264,
                                39.389903
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'description': '<strong>Genoa</strong><p><a href="#">Pasta</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            8.946256,
                            44.405649
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Genoa</strong><p><a href="#">Pasta</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                8.946256,
                                44.405649
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Cartizze',
                          'description': '<strong>Cartizze</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            12.0401,
                            45.8763
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Times Square',
                          'description': '<strong>Times Square</strong><p><a href="https://en.wikipedia.org/wiki/Times_Square">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            -73.9857,
                            40.7589
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Manhattan',
                          'description': '<strong>Manhattan</strong><p><a href="https://en.wikipedia.org/wiki/Manhattan">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            -73.9712,
                            40.7831
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Romania Point',
                          'description': '<strong>Romania</strong><p><a href="">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            24.9668,
                            45.9432
                          ]
                        }
                      }
                      ,
                    {
                        'type': 'Feature',
                        'properties': {
                            'name': 'Alaska Point',
                            'description': '<strong>Alaska</strong><p><a href="">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -149.4937,
                                64.2008
                            ]
                        }
                    },

                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>UK</strong><p><a href="">Baklava, Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-1.924574, 54.073407]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Spain</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -4.138169,
                                41.095412
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>France</strong><p><a href="">Food Cities, Rakı, Prosecco</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                2.618897,
                                47.350476
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Germany Point',
                          'description': '<strong>Germany</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            10.4515,
                            51.1657
                          ]
                        }
                      },
                      {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Union Square Cafe',
                          'description': '<strong>Union Square Cafe</strong><p><a href="https://www.unionsquarecafe.com/">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            -73.9874,
                            40.7363
                          ]
                        }
                      },
                      {
                        'type': 'Feature',
                        'properties': {
                          'name': 'India Point',
                          'description': '<strong>India</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            78.9629,
                            20.5937
                          ]
                        }
                      },
                      {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Vietnam Point',
                          'description': '<strong>Vietnam</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            106.6297,
                            16.0544
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Algeria</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                2.484282,
                                27.853446
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Europe</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                14.285256,
                                49.505439
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Trieste',
                          'description': '<strong>Trieste</strong><p><a href="https://www.discover-trieste.it/">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            13.7681,
                            45.6495
                          ]
                        }
                      },
                      {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Conegliano',
                          'description': '<strong>Conegliano</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            12.2984,
                            45.8889
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Austria</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                14.262487,
                                47.578457
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Italy</strong><p><a href="">Rakı, Pasta, Tiramisu, Prosecco</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                12.791356,
                                42.396941
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Naples</strong><p><a href="#">Pasta</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                14.2681,
                                40.8522
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Agrigento</strong><p><a href="#">Pasta</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                13.5765,
                                37.3114
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Paris</strong><p><a href="#">Pasta</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                2.3522,
                                48.8566
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Argentina Point',
                          'description': '<strong>Argentina</strong><p><a href="">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            -64.3225,
                            -34.6118
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Soho, London</strong><p><a href="#">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -0.1340,
                                51.5136
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>London</strong><p><a href="#">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -0.1280,
                                51.5074
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Treviso</strong><p><a href="#">Tiramisu, Prosecco</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                12.2430,
                                45.6669
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'name': 'Friuli Venezia Giulia Point',
                            'description': '<strong>Friuli Venezia Giulia</strong><p><a href="#">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                13.3922,
                                45.9654
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Sicilia</strong><p><a href="">Rakı, Pasta</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                14.253654,
                                37.535768
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Belgrade</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                20.455798,
                                44.814537
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Albania</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                19.986816,
                                40.730122
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'North America Point',
                          'description': '<strong>North America</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            -100.4459,
                            39.8283
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Northern Italy Point',
                          'description': '<strong>Northern Italy</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            11.8781,
                            45.5655
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>North Macedonia</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                21.72737,
                                41.572005
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Bulgaria</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                25.067686,
                                42.630208
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Greece</strong><p><a href="">Baklava, Food Cities, Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                23.925394,
                                38.598456
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Edirne</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                26.653419,
                                41.696719
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Aegean Region</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                27.075857,
                                39.072643
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>İzmir</strong><p><a href="">Food Cities, Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                26.85264,
                                38.322571
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Bodrum</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                27.420764,
                                37.018237
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Istanbul</strong><p><a href="">Baklava, Food Cities, Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                28.906004,
                                41.133219
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Topkapı Palace</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                28.984262,
                                41.01272
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Marmara Region</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                29.105544,
                                40.315287
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Şuhut</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                30.545624,
                                38.535513
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Antalya</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                30.751737,
                                36.944236
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Turkey</strong><p><a href="">Baklava, Food Cities, Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                32.226453,
                                39.558001
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Konya</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                32.682271,
                                37.87567
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Cyprus</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                33.285296,
                                35.03345
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Valdobbiadene',
                          'description': '<strong>Valdobbiadene</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            11.9935,
                            45.8885
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Brazil Point',
                          'description': '<strong>Brazil</strong><p><a href="#">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            -51.9253,
                            -14.2350
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'USA Point',
                          'description': '<strong>United States</strong><p><a href="#">Prosecco </a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            -98.5795,
                            39.8283
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Ankara</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                32.841563,
                                39.923154
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Black Sea</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                33.930267,
                                42.792959
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Black Sea Region</strong><p><a href="">Food Cities, Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                34.033007,
                                41.54932
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Veneto</strong><p><a href="#">Tiramisu, Prosecco</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                11.8819,
                                45.4344
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>Tolmezzo</strong><p><a href="#">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                12.6737,
                                46.3988
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>New York City</strong><p><a href="#">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -74.006,
                                40.7128
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description': '<strong>University of Oxford</strong><p><a href="">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -1.2577,
                                51.7548
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'name': 'Locanda Locatelli',
                            'description': '<strong>Locanda Locatelli</strong><p><a href="#">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -0.1552,
                                51.5141
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'name': 'Australia Point',
                            'description': '<strong>Australia</strong><p><a href="#">Tiramisu, Prosecco</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                133.7751,
                                -25.2744
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'name': 'Venice',
                            'description': '<strong>Venice</strong><p><a href="">Tiramisu, Prosecco</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                12.3155,
                                45.4408
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'name': 'Le Beccherie',
                            'description': '<strong>Le Beccherie</strong><p><a href="#">Tiramisu</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                12.3142,
                                45.4382
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Anatolia</strong><p><a href="">Food Cities, Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                33.581188,
                                38.668761
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Seyhan River</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                35.336768,
                                36.992168
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Adana</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                35.427494,
                                36.913659
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Antakya</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                36.28033,
                                36.442921
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Lebanon</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                35.93758,
                                33.926736
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Gaziantep</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                37.549417,
                                37.021528
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Trabzon</strong><p><a href="">Food Cities, Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                39.776014,
                                40.951005
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Şanlıurfa</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                38.866517,
                                37.206597
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Syria</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                38.583432,
                                34.963949
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Armenia</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                44.61824,
                                40.416023
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Iraq</strong><p><a href="">Rakı</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                43.115855,
                                33.23717
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Azerbaijan</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                47.678443,
                                40.444857
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Iran</strong><p><a href="">Baklava</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                53.27299,
                                33.886208
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Central Asia</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                74.616297,
                                47.669996
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Asia</strong><p><a href="">Food Cities</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                76.66802,
                                37.024945
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                          'name': 'Ischgl',
                          'description': '<strong>Ischgl</strong><p><a href="https://www.ischgl.com/">Prosecco</a></p>'
                        },
                        'geometry': {
                          'type': 'Point',
                          'coordinates': [
                            10.2905,
                            47.0144
                          ]
                        }
                      },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Middle East</strong><p><a href="">Kazakh food and drinks</a><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                29.995368,
                                31.268205
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Akmola camp for wives and mothers of traitors of the motherland</strong><p><a href="kaz_food_drinks.html">Kazakh food and drinks</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                51.077500,
                                70.977222
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Kazakhstan</strong><p><a href="kaz_food_drinks.html">Kazakh food and drinks</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                66.9045434,
                                48.005284
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Russia</strong><p><a href="beshbarmak.html">Beshbarmak</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                70.977222,
                                51.077500
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Kyrgyzstan</strong><p><a href="beshbarmak.html">Beshbarmak</a><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                74.766098, 
                                41.20438
                                
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Xinjiang</strong><p><a href="beshbarmak.html">Beshbarmak</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                86.154785, 
                                44.402393
                                
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>London</strong><p><a href="beshbarmak.html">Beshbarmak</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                -0.118092, 
                                51.509865
                                
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Caspian Sea</strong><p><a href="beshbarmak.html">Beshbarmak</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                50.666668, 
                                41.666668
                                
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Kyzylorda Region</strong><p><a href="beshbarmak.html">Beshbarmak</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                65.50917, 
                                44.85278 
                                
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Almaty</strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                76.889709, 
                                43.238949 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Bishkek</strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                74.582748, 
                                42.882004 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Tashkent</strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                69.240562,
                                41.311081
                                 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Xinjiang Uyghur autonomous region of the peoples republic of China </strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                81.258165634,
                                40.509331296 
                                 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Caucasus</strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                44.119332856,
                                42.25666564  
                                 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Uzbekistan</strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                64.5735819,
                                41.381166   
                                 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>Persia</strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                53.6830157, 
                                32.4207423  
                                 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>South East Asia</strong><p><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                115.66283, 
                                -2.21797  
                                 
                                
                            ]
                        }
                    },
                    {
                        'type': 'Feature',
                        'properties': {
                            'description':
                                '<strong>China</strong><p><a href="">Food Cities, Pasta</a><a href="kaz_centr_asia.html">Central Asian Food</a></p>'
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [
                                100.769565,
                                34.662834
                            ]
                        }
                    }
                ]
            }
        });
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-color': '#4264fb',
                'circle-radius': 6,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
            }
        });

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
            //popup.remove();
        });
    });
}

// document.addEventListener('DOMContentLoaded', function () {
//     initializeMap();
// });