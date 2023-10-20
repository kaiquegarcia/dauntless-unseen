;(function(w) {
    const form = document.getElementById('translation-input');
    const phraseInput = document.getElementById('phrase');
    const actionInput = document.getElementById('action');
    const output = document.getElementById('translation-output');
    const possibleActions = ['encode', 'decode'];

    const run = () => {
        const action = actionInput.value;
        if (possibleActions.indexOf(action) === -1) {
            w.setTimeout(w.location.reload, 3000);
            return 'Please, do not change the action pre-defined values. Reloading the page in 3 seconds...';
        }

        const phrase = phraseInput.value;
        if (phrase.replace(' ', '') === '') {
            return 'Please inform any kind of symbols to encode/decode.';
        }

        return w.Unseen[action](phrase);
    };

    let sending = false;
    form.onsubmit = (event) => {
        event.preventDefault();
        if (sending) {
            return;
        }

        sending = true;
        output.innerText = run();
        sending = false;
    };
})(window);