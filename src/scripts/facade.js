export default function initLazyYoutube() {
	const youtube = document.querySelectorAll(".youtube");

	youtube.forEach((el) => {
		// Wenn schon ein img drin ist, nix tun
		if (el.querySelector("img")) return;

		const videoId = el.dataset.embed;
		const altText = el.dataset.alt || "YouTube Video";

		if (!videoId) return;

		const source = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
		const image = new Image();
		image.src = source;
		image.alt = altText;

		image.addEventListener("load", () => {
			el.appendChild(image);
		});

		el.addEventListener("click", function() {
			const iframe = document.createElement("iframe");
			iframe.setAttribute("frameborder", "0");
			iframe.setAttribute("allowfullscreen", "");
			iframe.setAttribute(
				"src",
				`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`
			);
			this.innerHTML = "";
			this.appendChild(iframe);
		});
	});
}
