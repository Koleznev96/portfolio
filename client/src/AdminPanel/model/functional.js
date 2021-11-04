export const filterSearch = (list, value) => {
    return list.filter((item) => item.label.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
