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