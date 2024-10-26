export function copyright(firstYear: number, params?: {owner?: string, warning?: boolean}): string {
    const currentYear: number = new Date().getFullYear();

    const yearString: string = firstYear < currentYear
        ? `${firstYear.toString()} — ${currentYear.toString()}`
        : currentYear.toString();

    const trimmedCopyright: string = params?.owner
        ? ` ${params.owner.trim()}`.replace(/\.$/, "")
        : ``;

    return `©${yearString}${trimmedCopyright}.${params?.warning ? ` All Rights Reserved.` : ``}`;
}