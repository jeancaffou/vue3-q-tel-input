import { Country } from './types'
import { countryInformation as all } from './data'

export default all.sort((a, b) =>
  a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
);

export const getDefault = (iso2 = 'us') => all.find(a => a.iso2 === iso2.trim().toUpperCase())

export const isNumberInCountry = (dial: string, country: Country) => {
  if (country.dialCode === dial) {
    return 1
  }

  if (!dial.startsWith(country.dialCode) && !country.dialCode.startsWith(dial)) {
    return 0
  }

  // need to compare the suffixes
  const newTerm = dial.replace(country.dialCode, '')
  const hasSub = country.dialCodeSuffixes.find(suffix => newTerm.startsWith(suffix) || suffix.startsWith(newTerm))

  if (hasSub) {
    return 1
  }

  return country.dialCodeSuffixes.length ? 0 : 2
}

export const getCountryCodeFromPhoneNumber = (dial: string) => {
  dial = dial.trim()
  if (!dial.startsWith('+')) {
    return
  }

  return (
    all.find(country => isNumberInCountry(dial, country) === 1) ||
    all.find(country => isNumberInCountry(dial, country) === 2)
  )
}

export const getCountryByDialCode = (val = '') =>
  all.find(country => isNumberInCountry(val, country) === 1) ||
  all.find(country => isNumberInCountry(val, country) === 2)

export const filterCountries = (term: string): Country[] => {
  term = term.trim().toLowerCase()
  if (term === '') return all.slice()

  const looksNumeric  = /^\+?\d+$/.test(term)
  const numericNeedle = term.replace(/^\+/, '')

  if (looksNumeric) {
    const needleWithPlus = `+${numericNeedle}`

    const exact = all.filter(c => isNumberInCountry(needleWithPlus, c) === 1)
    const broad = all.filter(c => isNumberInCountry(needleWithPlus, c) === 2)

    const byPrefix = all.filter(
      c => c.dialCode.replace('+', '').startsWith(numericNeedle)
    )

    return Array.from(new Set([...exact, ...broad, ...byPrefix]))
  }

  return all.filter(
    c =>
      c.iso2.toLowerCase().includes(term) ||
      c.name.toLowerCase().includes(term)
  )
}

export const getProperNumber = (phone: string) => phone.match(/[+\d]+/g)?.join('') || phone
