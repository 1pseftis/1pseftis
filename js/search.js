// function
function myFunction() {
    // variables aa ogno
    var input, filter, ul, li, a, i;
    // orolt huleej avn
    input = document.getElementById("mySearch");
    // bugdiin tom useg bolgood filter luu hadgalana
    filter = input.value.toUpperCase();
    // myMeny id giin bas elementiig avn
    ul = document.getElementById("myMenu");
    // ul dotor bga li nuudiin elementuudiig bugdiin avaad li gedeg var luu hiine
    li = ul.getElementsByTagName("li");
    // for loop yvuuln i = 0 i li giin toonoos baga baih tusam nemj ogno
    for (i = 0; i < li.length; i++) {
        // a var luu li giin odoo baigaa toondeerh a gedeg elementiin tagiin hamgiin anhni elementiig avn
        a = li[i].getElementsByTagName("a")[0];
        // innerHTML ni elementiin dotor bgaa content iig avah bolomjtoi bolgodog
        // tom bolgood filter index -1 ees iluu baival list iin style display g gargaj irne herev ugui bol gargaj irehku
        // indexof ni useg baigaa ugui gedgiig shalgadag ihenhdee ter useg esvel ug haana bgaag olhod ih ashigladdag
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
  }