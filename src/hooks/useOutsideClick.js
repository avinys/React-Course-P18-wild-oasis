import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
	const ref = useRef();

	useEffect(() => {
		const handleClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) {
				handler();
			}
		};

		// The true at the end prevents the event bubbling
		document.addEventListener("click", handleClick, listenCapturing);

		return () =>
			document.removeEventListener("click", handleClick, listenCapturing);
	}, [handler, listenCapturing]);

	return ref;
}
