function copyright(firstYear: number, owner?: string): string {
    const currentYear: number = new Date().getFullYear();
    const yearString: string = firstYear < currentYear
        ? firstYear.toString()
        : `${firstYear.toString()} — ${currentYear.toString()}`;
    const trimmedCopyright: string = owner
        ? ` ${owner.trim()}`.replace(/\.$/, "")
        : ``;

    return `© ${yearString}${trimmedCopyright}. All Right Reserved.`;
}

module.exports = copyright