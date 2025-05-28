//your JS code here. If required.
const codes = document.querySelectorAll('.code');

        // Focus the first input field when the page loads
        window.addEventListener('load', () => codes[0].focus());

        // Add event listeners to each input field
        codes.forEach((code, idx) => {
            // Listen for 'input' event (when a character is typed)
            code.addEventListener('input', (e) => {
                // Ensure only digits are entered
                if (e.data && !/^[0-9]$/.test(e.data)) {
                    code.value = ''; // Clear non-digit input
                    return;
                }

                // If a character is entered and it's not the last field, move focus to the next field
                if (code.value.length === 1 && idx < codes.length - 1) {
                    codes[idx + 1].focus();
                }
            });

            // Listen for 'keydown' event (when a key is pressed down)
            code.addEventListener('keydown', (e) => {
                // If Backspace is pressed
                if (e.key === 'Backspace') {
                    // If the current field is empty and it's not the first field, move focus to the previous field
                    if (code.value === '' && idx > 0) {
                        codes[idx - 1].focus();
                    }
                    // If the current field has content, delete it
                    else if (code.value !== '') {
                        code.value = '';
                    }
                }
            });
        });