import { utilService } from './utils-service.js'
const BOOK_DB = ''
export const bookService = {
    getBooks,
    getBookById,
    addReview,
    removeReview,
    getBookIdxById,
    getReviewIdxById,
    getGoogleBooks,
    getGoogleBookById
}
const gBooks = [
    {
        "id": "OXeMG8wNskc",
        "title": "metus hendrerit",
        "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1999,
        "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
        "pageCount": 713,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "en",
        "listPrice": {
            "amount": 109,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "JYOJa2NpSCq",
        "title": "morbi",
        "subtitle": "lorem euismod dictumst inceptos mi",
        "authors": [
            "Barbara Cartland"
        ],
        "publishedDate": 1978,
        "description": "aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor",
        "pageCount": 129,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 44,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {
        "id": "1y0Oqts35DQ",
        "title": "at viverra venenatis",
        "subtitle": "gravida libero facilisis rhoncus urna etiam",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant",
        "pageCount": 972,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "he",
        "listPrice": {
            "amount": 108,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "kSnfIJyikTP",
        "title": "dictum",
        "subtitle": "augue eu consectetur class curabitur conubia ligula in ullamcorper",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1978,
        "description": "interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam",
        "pageCount": 303,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "en",
        "listPrice": {
            "amount": 30,
            "currencyCode": "EUR",
            "isOnSale": true
        }
    },
    {
        "id": "f4iuVmbuKCC",
        "title": "sem himenaeos aptent",
        "subtitle": "interdum per habitasse luctus purus est",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 2011,
        "description": "et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed",
        "pageCount": 337,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 19,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "U2rfZO6oBZf",
        "title": "mi ante posuere",
        "subtitle": "sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1978,
        "description": "senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in",
        "pageCount": 748,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/1.jpg",
        "language": "en",
        "listPrice": {
            "amount": 91,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "xI0wrXaaAcq",
        "title": "non",
        "subtitle": "leo tortor per dapibus mattis ut conubia porttitor ligula viverra",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque",
        "pageCount": 65,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/14.jpg",
        "language": "he",
        "listPrice": {
            "amount": 90,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "9laHCEdSpFy",
        "title": "tristique",
        "subtitle": "consectetur a eu tincidunt condimentum amet nisi",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1999,
        "description": "magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem",
        "pageCount": 299,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/11.jpg",
        "language": "he",
        "listPrice": {
            "amount": 176,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "nGhVwZvGCGp",
        "title": "urna ornare gravida",
        "subtitle": "sem vestibulum semper convallis pharetra tempor himenaeos ut",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla",
        "pageCount": 803,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 116,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "Q8Q9Lsd03BD",
        "title": "consequat neque volutpat",
        "subtitle": "vel quis taciti fermentum feugiat ullamcorper curae praesent",
        "authors": [
            "Dr. Seuss"
        ],
        "publishedDate": 1978,
        "description": "curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare",
        "pageCount": 891,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/5.jpg",
        "language": "en",
        "listPrice": {
            "amount": 145,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "bd7a76kARao",
        "title": "risus",
        "subtitle": "pretium bibendum pharetra curabitur quisque dictumst",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus",
        "pageCount": 86,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/16.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 157,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {
        "id": "qKyG0vqeO3e",
        "title": "interdum etiam vulputate",
        "subtitle": "velit sapien eget tincidunt nunc tortor",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 2018,
        "description": "aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad",
        "pageCount": 882,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/17.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 57,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "2RvT48ZNInj",
        "title": "sagittis justo",
        "subtitle": "etiam primis proin praesent placerat nisi fermentum nisi",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 2011,
        "description": "nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus",
        "pageCount": 598,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/8.jpg",
        "language": "en",
        "listPrice": {
            "amount": 167,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "5z2s9pDXAYj",
        "title": "quam ullamcorper himenaeos",
        "subtitle": "ut placerat eu dapibus sapien sodales laoreet",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam",
        "pageCount": 608,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/3.jpg",
        "language": "he",
        "listPrice": {
            "amount": 150,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "zBZu5cDEWha",
        "title": "quis",
        "subtitle": "suscipit turpis etiam turpis libero lobortis",
        "authors": [
            "Jin Yong"
        ],
        "publishedDate": 2011,
        "description": "etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor",
        "pageCount": 583,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/6.jpg",
        "language": "en",
        "listPrice": {
            "amount": 58,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    },
    {
        "id": "aOI7tQuPZ2f",
        "title": "aliquam aliquet dapibus",
        "subtitle": "neque eu purus euismod placerat adipiscing odio egestas consequat",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 2011,
        "description": "dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt",
        "pageCount": 497,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/7.jpg",
        "language": "en",
        "listPrice": {
            "amount": 78,
            "currencyCode": "USD",
            "isOnSale": false
        }
    },
    {
        "id": "WBooB82Uvwu",
        "title": "class",
        "subtitle": "elit enim ultricies amet imperdiet a molestie class elementum venenatis",
        "authors": [
            "Danielle Steel"
        ],
        "publishedDate": 1999,
        "description": "rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla",
        "pageCount": 804,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/10.jpg",
        "language": "en",
        "listPrice": {
            "amount": 118,
            "currencyCode": "ILS",
            "isOnSale": false
        }
    },
    {
        "id": "xm1z5bbZjlS",
        "title": "vitae",
        "subtitle": "class habitant at commodo semper ligula a bibendum",
        "authors": [
            "Leo Tolstoy"
        ],
        "publishedDate": 1999,
        "description": "himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus",
        "pageCount": 231,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/12.jpg",
        "language": "he",
        "listPrice": {
            "amount": 60,
            "currencyCode": "EUR",
            "isOnSale": false
        }
    },
    {
        "id": "u3j6QIKLlJb",
        "title": "rhoncus vivamus",
        "subtitle": "nullam class risus amet senectus scelerisque etiam curabitur",
        "authors": [
            "Agatha Christie"
        ],
        "publishedDate": 1978,
        "description": "torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis",
        "pageCount": 652,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
        "language": "he",
        "listPrice": {
            "amount": 110,
            "currencyCode": "USD",
            "isOnSale": true
        }
    },
    {
        "id": "vxYYYdVlEH3",
        "title": "donec mi ullamcorper",
        "subtitle": "varius malesuada augue molestie sollicitudin faucibus mi eu tempus",
        "authors": [
            "William Shakespeare"
        ],
        "publishedDate": 2011,
        "description": "aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed",
        "pageCount": 904,
        "categories": [
            "Computers",
            "Hack"
        ],
        "thumbnail": "http://coding-academy.org/books-photos/2.jpg",
        "language": "sp",
        "listPrice": {
            "amount": 186,
            "currencyCode": "ILS",
            "isOnSale": true
        }
    }
].map(book => ({ ...book, reviews: [] }))

const gGoogleBooks = [
    {
        "kind": "books#volume",
        "id": "2bCdaZ7KvDsC",
        "etag": "1lGNdt3Slsk",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/2bCdaZ7KvDsC",
        "volumeInfo": {
            "title": "The Language of Flowers",
            "subtitle": "The Floral Offering: a Token of Affection and Esteem; Comprising the Language and Poetry of Flowers ...",
            "authors": [
                "Henrietta Dumont"
            ],
            "publishedDate": "1852",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "HARVARD:32044013658547"
                }
            ],
            "readingModes": {
                "text": true,
                "image": true
            },
            "pageCount": 300,
            "printType": "BOOK",
            "categories": [
                "Flower language"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.2.3.0.full.3",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=2bCdaZ7KvDsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=2bCdaZ7KvDsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=2bCdaZ7KvDsC&printsec=frontcover&dq=flowers&hl=&as_brr=6&cd=1&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=2bCdaZ7KvDsC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=2bCdaZ7KvDsC"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=2bCdaZ7KvDsC&rdid=book-2bCdaZ7KvDsC&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/The_Language_of_Flowers.epub?id=2bCdaZ7KvDsC&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/The_Language_of_Flowers.pdf?id=2bCdaZ7KvDsC&hl=&output=pdf&sig=ACfU3U1n9agbciLzFXS4cd_vmKAJsTiEZA&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=2bCdaZ7KvDsC&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        }
    },
    {
        "kind": "books#volume",
        "id": "nF0EAAAAYAAJ",
        "etag": "oFed88D8IoQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/nF0EAAAAYAAJ",
        "volumeInfo": {
            "title": "The Flowers Personified",
            "subtitle": "Being a Translation of Grandville's \"Les Fleurs Animées.\"",
            "authors": [
                "J. J. Grandville",
                "Nehemiah Cleaveland"
            ],
            "publishedDate": "1849",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "HARVARD:HXKL2J"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 385,
            "printType": "BOOK",
            "categories": [
                "Botany"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.2.2.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=nF0EAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=nF0EAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=nF0EAAAAYAAJ&pg=PA168&dq=flowers&hl=&as_brr=6&cd=2&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=nF0EAAAAYAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=nF0EAAAAYAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=nF0EAAAAYAAJ&rdid=book-nF0EAAAAYAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/The_Flowers_Personified.epub?id=nF0EAAAAYAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/The_Flowers_Personified.pdf?id=nF0EAAAAYAAJ&hl=&output=pdf&sig=ACfU3U0RFfFGoP6FpJUfHPmoxJoJ6Qzt7Q&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=nF0EAAAAYAAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "THE <b>FLOWER</b> OF REMEMBRANCE . A <b>FLOWER</b> had fallen from her tresses , <br>\nand he was about to pick it up , but she stopped him . “ Leave it , ” said she ; “ <br>\nleave the <b>flower</b> which the wind has taken , and accept this . ” Then taking me <br>\nfrom her&nbsp;..."
        }
    },
    {
        "kind": "books#volume",
        "id": "MHfjZvl3U8EC",
        "etag": "wL9zxom3BPo",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/MHfjZvl3U8EC",
        "volumeInfo": {
            "title": "Flowers of fancy, a collection of similes taken from various authors, by H. Schultes",
            "authors": [
                "Henry Schultes"
            ],
            "publishedDate": "1829",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "OXFORD:600011749"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.2.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=MHfjZvl3U8EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=MHfjZvl3U8EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=MHfjZvl3U8EC&pg=PA30-IA28&dq=flowers&hl=&as_brr=6&cd=3&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=MHfjZvl3U8EC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=MHfjZvl3U8EC"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=MHfjZvl3U8EC&rdid=book-MHfjZvl3U8EC&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/Flowers_of_fancy_a_collection_of_similes.epub?id=MHfjZvl3U8EC&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/Flowers_of_fancy_a_collection_of_similes.pdf?id=MHfjZvl3U8EC&hl=&output=pdf&sig=ACfU3U3ukq-pXtMHGnopzPIeV3uCKK1yTg&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=MHfjZvl3U8EC&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Sweet as the <b>flowers</b> that o &#39; er the damasked meads to the new sun unfold their <br>\nvelvet heads . Potter , in Poetical Calendar . Sweeter than rising <b>flowers</b> that deck <br>\nuntrodden plains . M . Pilkington . Sweet as breathing <b>flowers</b> . Garth . Sweeter&nbsp;..."
        }
    },
    {
        "kind": "books#volume",
        "id": "ucLYY59wO04C",
        "etag": "JPTFduy0ohI",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/ucLYY59wO04C",
        "volumeInfo": {
            "title": "Certain Fresh Cut Flowers from Canada, Chile, Colombia, Costa Rica, Ecuador, Israel, and The Netherlands",
            "subtitle": "Determinations of the Commission in Investigations Nos. 701-TA-275 Through 278 (final) Under the Tariff Act of 1930, Together with the Information Obtained in the Investigations : Determinations of the Commission in Investigations Nos. 731-TA-327 Through 331 (final) Under the Tariff Act of 1930, Together with the Information Obtained in the Investigations",
            "authors": [
                "United States International Trade Commission"
            ],
            "publishedDate": "1987",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "IND:30000090533377"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 270,
            "printType": "BOOK",
            "categories": [
                "Cut flower industry"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.0.1.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=ucLYY59wO04C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=ucLYY59wO04C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=ucLYY59wO04C&pg=PA9&dq=flowers&hl=&as_brr=6&cd=4&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=ucLYY59wO04C&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ucLYY59wO04C"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=ucLYY59wO04C&rdid=book-ucLYY59wO04C&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/Certain_Fresh_Cut_Flowers_from_Canada_Ch.epub?id=ucLYY59wO04C&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=ucLYY59wO04C&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "merchandise subject to investigation , limits the Commission &#39; s like product <br>\ndetermination to the group of the subject <b>flowers</b> , since the identical <b>flowers</b> are <br>\nproduced in the United States . In addition , petitioner argued that there is a high<br>\n&nbsp;..."
        }
    },
    {
        "kind": "books#volume",
        "id": "TAo0AQAAMAAJ",
        "etag": "cDgRUruRDfM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/TAo0AQAAMAAJ",
        "volumeInfo": {
            "title": "Wild Flowers",
            "authors": [
                "Anne Pratt"
            ],
            "publishedDate": "1799",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "CHI:57104742"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 192,
            "printType": "BOOK",
            "categories": [
                "Botany"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.2.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=TAo0AQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=TAo0AQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=TAo0AQAAMAAJ&pg=PA181&dq=flowers&hl=&as_brr=6&cd=5&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=TAo0AQAAMAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=TAo0AQAAMAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=TAo0AQAAMAAJ&rdid=book-TAo0AQAAMAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/Wild_Flowers.epub?id=TAo0AQAAMAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/Wild_Flowers.pdf?id=TAo0AQAAMAAJ&hl=&output=pdf&sig=ACfU3U3hUNLVQmIgfOM560cRZOZS3GcJEw&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=TAo0AQAAMAAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "crocus . away , and The singularity of this <b>flower</b> consists in its blooming in <br>\nautumn , while its leaves and fruit appear in the spring following . About the end <br>\nof October the <b>flower</b> dies no one , on looking at the plant , would observe any&nbsp;..."
        }
    },
    {
        "kind": "books#volume",
        "id": "WZ4wAAAAYAAJ",
        "etag": "AS7yffJsZYM",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/WZ4wAAAAYAAJ",
        "volumeInfo": {
            "title": "Controlling Insects on Flowers",
            "authors": [
                "Floyd Franklin Smith"
            ],
            "publishedDate": "1967",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "UVA:X030490638"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 81,
            "printType": "BOOK",
            "categories": [
                "Garden pests"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.2.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=WZ4wAAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=WZ4wAAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=WZ4wAAAAYAAJ&pg=PA64&dq=flowers&hl=&as_brr=6&cd=6&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=WZ4wAAAAYAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=WZ4wAAAAYAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=WZ4wAAAAYAAJ&rdid=book-WZ4wAAAAYAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/Controlling_Insects_on_Flowers.epub?id=WZ4wAAAAYAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=WZ4wAAAAYAAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Adults appear suddenly just before yucca <b>flowers</b> . They chew pits into <b>flower</b> <br>\nbuds and stems . Larvae feed as miners in petals of open <b>flowers</b> ; cause <b>flowers</b> <br>\nto appear limp and water soaked , and to drop prematurely . Distribution ."
        }
    },
    {
        "kind": "books#volume",
        "id": "eyk7mW5skHQC",
        "etag": "WMfo7JW5ZBU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/eyk7mW5skHQC",
        "volumeInfo": {
            "title": "Certain Fresh Cut Flowers from Canada, Chile, Colombia, Costa Rica, Ecuador, Israel, Kenya, Mexico, The Netherlands, and Peru",
            "subtitle": "Views on Remand in Investigations Nos. 303-TA-18 (final-remand), 701-TA-275 Through 278 (final-remand), and 731-TA-327 Through 333 (final-remand)",
            "authors": [
                "United States International Trade Commission"
            ],
            "publishedDate": "1988",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "UIUC:30112105201823"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 32,
            "printType": "BOOK",
            "categories": [
                "Cut flower industry"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.0.1.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=eyk7mW5skHQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=eyk7mW5skHQC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=eyk7mW5skHQC&pg=PA31&dq=flowers&hl=&as_brr=6&cd=7&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=eyk7mW5skHQC&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=eyk7mW5skHQC"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=eyk7mW5skHQC&rdid=book-eyk7mW5skHQC&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/Certain_Fresh_Cut_Flowers_from_Canada_Ch.epub?id=eyk7mW5skHQC&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/Certain_Fresh_Cut_Flowers_from_Canada_Ch.pdf?id=eyk7mW5skHQC&hl=&output=pdf&sig=ACfU3U0oFz0RMRLSzBPMiOXjR2n3BwcCvA&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=eyk7mW5skHQC&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "As indicated above , all fresh cut <b>flowers</b> have essentially the same use <br>\ndecoration though minor differences in size , color , or scent may make one type <br>\nof <b>flower</b> more appropriate than another on different occasions . Channels of <br>\ndistribution&nbsp;..."
        }
    },
    {
        "kind": "books#volume",
        "id": "07ZZAAAAMAAJ",
        "etag": "DQ8cx1xq50g",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/07ZZAAAAMAAJ",
        "volumeInfo": {
            "title": "Fishes, Flowers & Fire as Elements and Deities in the Phallic Faiths & Worship of the Ancient Religions of Greece, Babylon, Rome, India, &c., with Illustrative Myths and Legends",
            "publishedDate": "1800",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "WISC:89094590437"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 97,
            "printType": "BOOK",
            "categories": [
                "Fire"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.1.1.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=07ZZAAAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=07ZZAAAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=07ZZAAAAMAAJ&pg=PA25&dq=flowers&hl=&as_brr=6&cd=8&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=07ZZAAAAMAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=07ZZAAAAMAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=07ZZAAAAMAAJ&rdid=book-07ZZAAAAMAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/Fishes_Flowers_Fire_as_Elements_and_Deit.epub?id=07ZZAAAAMAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/Fishes_Flowers_Fire_as_Elements_and_Deit.pdf?id=07ZZAAAAMAAJ&hl=&output=pdf&sig=ACfU3U2GnkZM0Gb5RAoMgzK6SHz-NhPGSA&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=07ZZAAAAMAAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "Universal Love of <b>Flowers</b> — Indifference to <b>Flowers</b> — Excessive Love of <b>flowers</b> <br>\nleading to Adoration — Myths and legends connected with <b>Flowers</b>, the Flos <br>\nAdonis, Narcissus, Myrtle, Silene infiata, Clover — The Hundred-leaved Rose&nbsp;..."
        }
    },
    {
        "kind": "books#volume",
        "id": "8KJWAAAAcAAJ",
        "etag": "klpv//9dvjE",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/8KJWAAAAcAAJ",
        "volumeInfo": {
            "title": "Flora's Dictionary. [A treatise on the language of flowers. With a series of poetical extracts.] By a Lady",
            "publishedDate": "1835",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "BL:A0017564819"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.2.1.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=8KJWAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=8KJWAAAAcAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=8KJWAAAAcAAJ&pg=PP27&dq=flowers&hl=&as_brr=6&cd=9&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=8KJWAAAAcAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=8KJWAAAAcAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=8KJWAAAAcAAJ&rdid=book-8KJWAAAAcAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/Flora_s_Dictionary_A_treatise_on_the_lan.epub?id=8KJWAAAAcAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": true,
                "downloadLink": "http://books.google.com/books/download/Flora_s_Dictionary_A_treatise_on_the_lan.pdf?id=8KJWAAAAcAAJ&hl=&output=pdf&sig=ACfU3U2uPDpvOi2ivujTYIwEOozsXgUA9w&source=gbs_api"
            },
            "webReaderLink": "http://play.google.com/books/reader?id=8KJWAAAAcAAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "<b>FLOWERS</b> . THERE are seven parts to a <b>flower</b> — the Calyx , The Stamens , <br>\naccording to their number , situation , Corolla , Stamens , Pistils , Pericarpium , <br>\nSeed , and and proportion , furnish the leading principles of disReceptacle . <br>\ntinction in&nbsp;..."
        }
    },
    {
        "kind": "books#volume",
        "id": "8h5EAQAAMAAJ",
        "etag": "y7U26Gt70aw",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/8h5EAQAAMAAJ",
        "volumeInfo": {
            "title": "The Poetry of Flowers and Flowers of Poetry",
            "subtitle": "To which are Added, a Simple Treatise on Botany, with Familiar Examples, and a Copious Floral Dictionary",
            "authors": [
                "Frances Sargent Osgood"
            ],
            "publishedDate": "1849",
            "industryIdentifiers": [
                {
                    "type": "OTHER",
                    "identifier": "OSU:32435068643410"
                }
            ],
            "readingModes": {
                "text": false,
                "image": true
            },
            "pageCount": 276,
            "printType": "BOOK",
            "categories": [
                "Flower language"
            ],
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "0.0.2.0.full.1",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=8h5EAQAAMAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=8h5EAQAAMAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=8h5EAQAAMAAJ&pg=PA94&dq=flowers&hl=&as_brr=6&cd=10&source=gbs_api",
            "infoLink": "https://play.google.com/store/books/details?id=8h5EAQAAMAAJ&source=gbs_api",
            "canonicalVolumeLink": "https://play.google.com/store/books/details?id=8h5EAQAAMAAJ"
        },
        "saleInfo": {
            "country": "IL",
            "saleability": "FREE",
            "isEbook": true,
            "buyLink": "https://play.google.com/store/books/details?id=8h5EAQAAMAAJ&rdid=book-8h5EAQAAMAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
            "country": "IL",
            "viewability": "ALL_PAGES",
            "embeddable": true,
            "publicDomain": true,
            "textToSpeechPermission": "ALLOWED",
            "epub": {
                "isAvailable": false,
                "downloadLink": "http://books.google.com/books/download/The_Poetry_of_Flowers_and_Flowers_of_Poe.epub?id=8h5EAQAAMAAJ&hl=&output=epub&source=gbs_api"
            },
            "pdf": {
                "isAvailable": false
            },
            "webReaderLink": "http://play.google.com/books/reader?id=8h5EAQAAMAAJ&hl=&as_brr=6&printsec=frontcover&source=gbs_api",
            "accessViewStatus": "FULL_PUBLIC_DOMAIN",
            "quoteSharingAllowed": false
        },
        "searchInfo": {
            "textSnippet": "NOWHERE are the beautiful <b>flowers</b> of this plant found in such great abundance , <br>\nas on the banks of a brook near the Luxum- . bourg The peasants call that brook <br>\nthe “ Fairy Bath , &quot; or the “ Cascade of the enchanted Oak . ” These two names&nbsp;..."
        }
    }
]

function getBooks() {
    return Promise.resolve(gBooks);
}
function getBookById(bookId) {
    const book = gBooks.find(book => book.id === bookId)
    return Promise.resolve(book)
}

function addReview(bookId, review) {
    return Promise.resolve(
        getBookById(bookId)
            .then(book => {
                book.reviews.push(review)
                // utilService.saveToStorage(BOOKS_KEY, gBooks)
            })
    )
}

function getReviewIdxById(reviewId, bookIdx) {
    return Promise.resolve(gBooks[bookIdx].reviews.findIndex(review => review.is === reviewId))
}

function getBookIdxById(id) {
    return Promise.resolve(gBooks.findIndex(book => book.id === id))
}

function removeReview(reviewId, bookId) {
    return Promise.resolve(
        getBookIdxById(bookId)
            .then(idx => {
                getReviewIdxById(reviewId, idx)
                    .then(revIdx => {
                        gBooks[idx].reviews.splice(revIdx, 1);
                        // utilService.saveToStorage(BOOKS_KEY, gBooks);
                    })
            }))
}

function getGoogleBooks() {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers&filter=paid-ebooks')
        .then(books => books.data.items)
}

function getGoogleBookById(bookId) {
    const book = getGoogleBooks()
        .then(books => books).find(book => book.id === bookId)
    return Promise.resolve(book)
}

// function getGoogleBooks() {
//     return Promise.resolve(gGoogleBooks);
// }
// function getGoogleBookById(bookId) {
//     const book = gGoogleBooks.find(book => book.id === bookId)
//     return Promise.resolve(book)
// }

function addGoogleBook(googleBook) {

}