import { ProductReview } from "../types/product.type";

export const numberFormat = (number: string | number, decimals = 0) => {
	return Number(number)
		.toFixed(decimals)
		.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatDate = (dateStr: string) => {
	const date = new Date(dateStr);
	const formatted = date.toLocaleString('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	});

	return formatted;
}

export const ucfirst = (str: string): string => {
	if (!str) return "";
	return str.charAt(0).toUpperCase() + str.slice(1);
}


export const ucwords = (str: string): string => {
	return str
		.split(" ")
		.map(word => ucfirst(word))
		.join(" ");
}

export const getAverageRatings = (reviews: ProductReview[]) => {
	let total = 0;
	let count = 0;

	if (!reviews.length) return 0;

	for (const review of reviews) {
		total += +review.star;
		count++;
	}

	return count === 0 ? 0 : Math.ceil((total / count));
}

export const snakeToCamel = (str: string) =>
	str.replace(/_([a-z])/g, (_, c) => c.toUpperCase());

export const camelToSnake = (str: string) =>
	str.replace(/([A-Z])/g, "_$1").toLowerCase();


export const decodeHTMLEntity = (str: string) => {
	const txt = document.createElement("textarea");
	txt.innerHTML = str;
	return txt.value;
}
