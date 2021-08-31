function guessCity(capital, coastal, famous, ancient) {
    if (capital === true && famous === true && ancient === true && coastal === false) {
        return "Jerusalem";
    }
    else if (famous === true && coastal === true && capital === false && ancient === false) {
        return "Tel-Aviv";
    }
    else if (coastal === true && ancient === true && capital === false && famous === false) {
        return "Acre";
    }
    else if (ancient === true && capital === false && coastal === false && famous === false) {
        return "Katzrin";
    }
    else if (coastal === true && capital === false && ancient === false && famous === false) {
        return "Zikim";
    }
    else return "musmus";
    }