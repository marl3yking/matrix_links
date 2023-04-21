const shareButtons = document.querySelectorAll('.tile-share-button');
const mainShareButton = document.querySelector('.share-button').addEventListener('click', copyText);

async function copyText(e) {
    //prevent button going to link
    e.preventDefault();
    const link = this.getAttribute('link');
    try {
        await navigator.clipboard.writeText(link);
        alert(`Copied this matrix link to your clipboard.`);
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton => shareButton.addEventListener('click', copyText));