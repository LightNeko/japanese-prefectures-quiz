var guessgameon = document.getElementById("guessgameon");
var guessgameoff = document.getElementById("guessgameoff");
var kanji = document.getElementById("kanji");
var hiragana = document.getElementById("hiragana");
var romaji = document.getElementById("romaji");
var result = document.getElementById("result");
var attempts = document.getElementById("attempts");
var red = document.getElementById("red");
var rpoints = 0;
var orange = document.getElementById("orange");
var opoints = 0;
var yellow = document.getElementById("yellow");
var ypoints = 0;
var green = document.getElementById("green");
var gpoints = 0;
var total = document.getElementById("total");
var prefecture_set = document.querySelectorAll("prefecture");
var prefectures = ["hokkaido", "aomori", "akita", "iwate", "miyagi", "yamagata", "ibaraki", "fukushima", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa", "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano", "gifu", "shizuoka", "aichi", "mie", "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama", "tottori", "shimane", "okayama", "hiroshima", "yamaguchi", "tokushima", "kagawa", "ehime", "kouchi", "fukuoka", "saga", "nagasaki", "kumamoto", "ooita", "miyazaki", "kagoshima", "okinawa"];
var prefectures_kanji = ['北海道', '青森', '秋田', '岩手', '宮城', '山形', '茨城', '福島', '栃木', '群馬', '埼玉', '千葉', '東京', '神奈川', '新潟', '富山', '石川', '福井', '山梨', '長野', '岐阜', '静岡', '愛知', '三重', '滋賀', '京都', '大阪', '兵庫', '奈良', '和歌山', '鳥取', '島根', '岡山', '広島', '山口', '徳島', '香川', '愛媛', '高知', '福岡', '佐賀', '長崎', '熊本', '大分', '宮崎', '鹿児島', '沖縄'];
var prefectures_hiragana = ['ほっかいどう', 'あおもり', 'あきた', 'いわて', 'みやぎ', 'やまがた', 'いばらき', 'ふくしま', 'とちぎ', 'ぐんま', 'さいたま', 'ちば', 'とうきょう', 'かながわ', 'にいがた', 'とやま', 'いしかわ', 'ふくい', 'やまなし', 'ながの', 'ぎふ', 'しずおか', 'あいち', 'みえ', 'しが', 'きょうと', 'おおさか', 'ひょうご', 'なら', 'わかやま', 'とっとり', 'しまね', 'おかやま', 'ひろしま', 'やまぐち', 'とくしま', 'かがわ', 'えひめ', 'こうち', 'ふくおか', 'さが', 'ながさき', 'くまもと', 'おおいた', 'みやざき', 'かごしま', 'おきなわ'];
var nattempts = 3;
var prefecturex = []

//Cette fonction controle d'abord si la liste des prefectures n'est pas vide
//Si la liste n'a pas d'éléments le jeux est terminé,
//autrement la fonction prends un élément de la liste de façon aléatoire.
function getPrefecture(){
    if (prefectures == false){
        document.getElementById("ui"). style.display = "none";
        document.getElementById("end"). style.display = "inherit";
        red.innerHTML = "-5 x " + rpoints + " = " + -5 * rpoints;
        orange.innerHTML = "25 x " + opoints + " = " + 25 * opoints;
        yellow.innerHTML = "50 x " + ypoints + " = " + 50 * ypoints;
        green.innerHTML = "100 x " + gpoints + " = " + 100 * gpoints;
        total.innerHTML = "Total: " + (100 * gpoints + 50 * ypoints + 25 * opoints - 5 * rpoints);
    } else{
    i = Math.floor(Math.random() * prefectures.length);
    return [romaji.innerHTML = prefectures[i], kanji.innerHTML = prefectures_kanji[i], hiragana.innerHTML = prefectures_hiragana[i]]
    }
}

//Cette fonction contrôle si le jueur clique sur la prefecture juste et fait un check des erreurs
//également elle assigne des points, enleve des vies et donne un feedback.
function prefectureCheck(){
    if(romaji.innerHTML == this.id && nattempts == 3){
        gpoints += 1;
        result.style = "color: green;";
        result.innerHTML = "Juste";
        this.style = "fill: green;";
        prefectures.splice(i, 1);
        prefectures_kanji.splice(i, 1);
        prefectures_hiragana.splice(i, 1);
        document.getElementById(romaji.innerHTML).className.baseVal = "inactive";
        this.removeEventListener("click", prefectureCheck);
        document.querySelectorAll(".prefecture").forEach(function(item){
            item.style.fill = "";
        })
        getPrefecture()
    } else if(romaji.innerHTML == this.id && nattempts == 2){
        nattempts = 3;
        ypoints += 1;
        attempts.innerHTML = "♥".repeat(nattempts);
        result.style = "color: green;";
        result.innerHTML = "Juste";
        this.style = "fill: yellow;";
        prefectures.splice(i, 1);
        prefectures_kanji.splice(i, 1);
        prefectures_hiragana.splice(i, 1);
        document.getElementById(romaji.innerHTML).className.baseVal = "inactive";
        this.removeEventListener("click", prefectureCheck);
        document.querySelectorAll(".prefecture").forEach(function(item){
            item.style.fill = "";
        })
        getPrefecture();
    } else if(romaji.innerHTML == this.id && nattempts == 1){
        nattempts = 3;
        opoints += 1;
        attempts.innerHTML = "♥".repeat(nattempts);
        result.style = "color: green;";
        result.innerHTML = "Juste";
        this.style = "fill: orange;";
        prefectures.splice(i, 1);
        prefectures_kanji.splice(i, 1);
        prefectures_hiragana.splice(i, 1);
        document.getElementById(romaji.innerHTML).className.baseVal = "inactive";
        this.removeEventListener("click", prefectureCheck);
        document.querySelectorAll(".prefecture").forEach(function(item){
            item.style.fill = "";
        })
        getPrefecture();
    } else{
        result.style = "color: red;";
        result.innerHTML = "Faux";
        this.style = "fill: grey;";
        nattempts -= 1;
        attempts.innerHTML = "♥".repeat(nattempts);
        if (nattempts == 0){
            rpoints += 1
            nattempts = 3;
            attempts.innerHTML = "♥".repeat(nattempts);
            document.getElementById(romaji.innerHTML).style = "fill: red;";
            prefectures.splice(i, 1);
            prefectures_kanji.splice(i, 1);
            prefectures_hiragana.splice(i, 1);
            document.getElementById(romaji.innerHTML).className.baseVal = "inactive";
            document.getElementById(romaji.innerHTML).removeEventListener("click", prefectureCheck);
            document.querySelectorAll(".prefecture").forEach(function(item){
                item.style.fill = "";
            })
            getPrefecture()
        }
    }

}

kanji.style.display = "none";
hiragana.style.display= "none";

//évenement du bouton pour demarrer l'application
document.getElementById("start-button").addEventListener("click", function(){
    guessgameoff.style.display = "none";
    guessgameon.style.display= "flex";
    getPrefecture()
});

//évenement qui rends interactives les prefectures sur la carte du japon
document.querySelectorAll(".prefecture").forEach(function(item){
    item.addEventListener("click", prefectureCheck);
})

//les trois évenements suivantes contrôlent le mode d'affiche du nom des prefectures
document.getElementById("kanjiselect").addEventListener("click", function(){
    kanji.style.display = "block";
    hiragana.style.display= "none";
    romaji.style.display= "none";
})

document.getElementById("hiraganaselect").addEventListener("click", function(){
    kanji.style.display = "none";
    hiragana.style.display = "block";
    romaji.style.display = "none";
})

document.getElementById("romajiselect").addEventListener("click", function(){
    kanji.style.display = "none";
    hiragana.style.display = "none";
    romaji.style.display = "block";
})

//bouton pour arrêter l'application
document.getElementById("stop-button").addEventListener("click", function(){
    guessgameoff.style.display = "flex";
    guessgameon.style.display = "none";
    document.getElementById("romajiselect").checked = "checked";
    window.location.reload();
})


