<script context="module">

export const code = {
        MANIS : "MNS",
        DIABETES : "DBTS",
        GATAU : "GTW",
        WSD : "WSD"
    }

export const theCorectPass = new Map([
        ["98dc8c3a9f4fe4e13e362e7f2c841f8f",code.MANIS], //teh manis
        ["7f57e80f02973ed230d6c882eaaccdf8",code.DIABETES], //teh diabetes
        ["19b666f5484f8ba141351f4e8bfa856d",code.GATAU], //gitu aja ga tau
        ["86a5e89ba111e6be9cdee4c545f4d611",code.WSD], //wisuda
        ["58f4a3e4c2777a22a5ff0985a9a193bc",code.WSD], //hadiah wisuda
    ])

export const HADIAH_CODE = {
    BUNGA : "BUNGA",
    BONEKA : "BONEKA",
    BEKAL : "BEKAL"
}

export const HADIAH_ID = {
    BUNGA : ["bunga"],
    BONEKA : ["boneka", "beruang", "boneka beruang"],
    BEKAL : ["kotak","makan","bekal","kotak makan","kotak bekal"]
}

export const CONTENT_HADIAH = {
    BUNGA :  {
        "title" : "tah apa ini",
        "picture" : "https",
        "backmsg" : "ada sih suatu hari aku liat orang dapat sesuatu yang mirip ini tapi isinya uang semua dan gada yang kasi asli jadinya gini de",
        "picuter-alt" : "cek internet",
        "subtitle" : "bakar aja sih"
    },
    BONEKA : {
        "title" : "sesuatu yang bisa ditumbuk",
        "picture" : "https",
        "backmsg" : `ucul kan, gunanya supaya kau tumbuk aja sih karena lelah kan menghadapi client" berwarna`,
        "picuter-alt" : "cek internet",
        "subtitle" : "ato di potong"

    },
    BEKAL :  {
        "title" : "rencananya ada makanannya didalam",
        "picture" : "https",
        "backmsg" : `supaya nampak lo lebih kaya dikit`,
        "picuter-alt" : "cek internet",
        "subtitle" : "tapi diisi sendiri aja ya"
    }
}

</script>