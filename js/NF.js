[...document.querySelectorAll('.nf')].forEach((a) => {
    a.addEventListener('keyup', function () {
        if (!this.value.match(/^[0-9]/g)) {
            this.value = "";
        } else {

            let pertiga = /\d{1,3}/g;
            var uang = this.value.split(',').join('').match(pertiga);
            if (this.value.length > 3) {

                if (uang[uang.length - 1].length == 1) {
                    this.value = uang.join('').substr(0, 1) + "," + uang.join('').substr(1).match(pertiga);
                }

                if (uang[uang.length - 1].length == 2) {
                    this.value = uang.join('').substr(0, 2) + "," + uang.join('').substr(2).match(pertiga);


                }
                if (uang[uang.length - 1].length == 3) {
                    this.value = uang.join('').substr(0, 3) + "," + uang.join('').substr(3).match(pertiga);

                }
            }
            if (uang.join('').length <= 3) {
                this.value = uang.join('');
            }

        }
    });

});