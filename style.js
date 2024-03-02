const downloadBtn = document.querySelector(".download-btn");
const fileLink = "page2.html";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your download link will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your download link will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Getting file...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
        }, 3000);
    }, 1000);
}
downloadBtn.addEventListener("click", initTimer);
