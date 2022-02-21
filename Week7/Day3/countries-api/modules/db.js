const getCountries = () => {
    return knex('country')
    .select('country_id', 'country')
}

module.exports ={ getCountries}