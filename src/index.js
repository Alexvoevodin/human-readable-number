module.exports = function toReadable(number) {
	const units = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	const tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
	const hundred = "hundred";

	let res = "";

	let u, t, h;

	if (number < 20) return units[number];

	if (number < 100) {
		t = Number(String(number)[0]);
		u = Number(String(number)[1]);

		res = u === 0 ? `${tens[t]}` : `${tens[t]} ${units[u]}`;

		return res;
	}

	if (number < 1000) {
		h = Number(String(number)[0]);
		t = Number(String(number)[1]);
		u = Number(String(number)[2]);

		let tmp = Number(`${t}${u}`);

		res = u === 0 ? `${units[h]} ${hundred} ${tens[t]}` : `${units[h]} ${hundred} ${toReadable(tmp)}`;

		return res.replace("  ", " ").trim();
	}
}