const requestText = document.querySelector('.sentence-input');
const requestButton = document.querySelector('#btn-request');
const resultArea = document.querySelector('.result-area');
const resultLoading = document.querySelector('.result-loading');
const sentenceInput = document.querySelector('.sentence-input');

function toggleLoading(toggle) {
    const { classList } = resultLoading;
    if (toggle) {
        classList.remove('hidden');
        classList.add('show');
        return;
    }

    classList.remove('show');
    classList.add('hidden');
}

function initListener() {
    function textAreaResize(textarea) {
        textarea.style.height = '1px';
        textarea.style.height = `${12 + textarea.scrollHeight}px`;
    }

    async function requestStartListener(event) {
        resultArea.innerHTML = '';
        toggleLoading(true);

        const text = requestText.value;
        const response = await fetch(
            `${document.location.origin}/gcp-lang?text=${text}`,
        );

        toggleLoading(false);

        if (!response.ok) {
            resultArea.innerHTML = 'request fail';
            return;
        }
        const json = await response.json();

        const stringResult = JSON.stringify(json, null, 4);
        resultArea.innerHTML = stringResult;
    }

    sentenceInput.addEventListener('keydown', (e) => {
        textAreaResize(e.target);
    });

    sentenceInput.addEventListener('keyup', (e) => {
        textAreaResize(e.target);
    });

    requestButton.addEventListener('click', (e) => {
        requestStartListener(e);
    });
}

initListener();
