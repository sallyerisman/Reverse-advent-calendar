const urlifiedTitle = ({newTitle}) => {
    return newTitle
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/å/g, 'a')
        .replace(/ä/g, 'a')
        .replace(/ö/g, 'o');
}

export default urlifiedTitle