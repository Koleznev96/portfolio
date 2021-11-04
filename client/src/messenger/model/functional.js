export const filterSearch = (list, value) => {
    return list.filter((item) => item.login.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}
