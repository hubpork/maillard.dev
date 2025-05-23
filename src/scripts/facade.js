export default function initLazyYoutube() {
    const youtube = document.querySelectorAll<HTMLElement>(".youtube");

    for (let i = 0; i < youtube.length; i++) {
        const source = "https://img.youtube.com/vi/" + youtube[i].dataset.embed + "/sddefault.jpg";
        const image = new Image();
        image.src = source;
        image.addEventListener("load", function () {
            youtube[i].appendChild(image);
        });

        youtube[i].addEventListener("click", function() {
            const iframe = document.createElement("iframe");
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allowfullscreen", "");
            iframe.setAttribute(
                "src",
                "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1"
            );
            this.innerHTML = "";
            this.appendChild(iframe);
        });
    }
}
