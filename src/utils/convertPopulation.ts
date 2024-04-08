export function convertPopulation(value: number) {
    const numberFormatted = value.toString();

    const parts = numberFormatted.split(".");
    let wholeNumber = parts[0];
    const decimalpart = parts.length > 1 ? "." + parts[1] : "";

    wholeNumber = wholeNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    return wholeNumber + decimalpart;
}