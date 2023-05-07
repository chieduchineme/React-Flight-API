export const getMinBeginDate = (endDate) => {
    const maxStartDate = new Date(endDate);
    maxStartDate.setDate(maxStartDate.getDate() - 7);
    const setMaxDate = maxStartDate.toISOString().substring(0, 16);
    return setMaxDate;    
}
