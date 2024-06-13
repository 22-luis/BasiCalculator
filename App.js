//execute the code after load the page
document.addEventListener('DOMContentLoaded', () => {

    const display = document.getElementById('display');

    // Select all the elements with the class btn
    document.querySelectorAll('.btn').forEach(btn => {

        // add events to the buttons
        btn.addEventListener('click', () => {

            const val = btn.value;

            // set the maximum number of characters to use
            if ((display.value).length <= 12) {

                // Brackets functionality
                if (val === '()') {
                    const currentVal = display.value;
                    const open = (currentVal.match(/\(/g) || []).length;
                    const close = (currentVal.match(/\)/g) || []).length;

                    if (open > close) {
                        display.value += ')';
                    } else display.value += '(';

                }
                // delete functionality
                else if (val === 'Del') {
                    display.value = display.value.toString().slice(0,-1);
                }
                // equal functionality
                else if (val === '=') {
                    display.value = eval(display.value);
                }
                // Percentage functionality
                else if (val === '%') {
                    display.value = eval(display.value) / 100;
                }
                // clear display functionality
                else if (val === 'C') {
                    display.value = '';
                }
                // print value
                else {
                    display.value += val;
                }
            } else {
                if (val === 'C') {
                    display.value = '';
                } else if (val === 'Del') {
                    display.value = display.value.toString().slice(0,-1);
                }
            }
        });
    });
});
