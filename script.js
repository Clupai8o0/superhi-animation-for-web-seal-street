const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.intersectionRatio > 0.1) {
				entry.target.classList.add("in-view");
			} else {
				entry.target.classList.remove("in-view");
			}
		});
	},
	{ threshold: [0, 0.1, 1] }
);

sections.forEach((section) => {
	observer.observe(section);

	const div = section.querySelector("div");
	const mq = window.matchMedia("prefers-reduced-motion: no-preference");

	if (mq.matches) {
		document.addEventListener("mousemove", (e) => {
			const aimX = (e.clientX - window.innerWidth / 2) / 10;
			const aimY = (e.clientY - window.innerHeight / 2) / 10;

			div.style.transform = `rotateX(${aimY}deg) rotateY(${aimX}deg)`;
		});
	}
});
