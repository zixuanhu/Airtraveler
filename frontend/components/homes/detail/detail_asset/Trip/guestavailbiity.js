const options = guestavailbility => {

    let options = {}
    for (let i = 1; i <= guestavailbility; i++) {

        options[String(i)] = String(i);

    }


    return options
};


export default options
