import * as Yup from "yup";
const phoneRegExp = /^[+0]{0,2}(91)?[0-9]{10}$/
const otpRegex =/^[+0]{0,2}(91)?[0-9]{4}$/
const emailregex =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const nameregex = /^[a-zA-Z\\s]+/
const dob =/^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/
const pincodeRgex =/^[1-9][0-9]{5}$/


 export const MobileForm = Yup.object({
    mobile :Yup.string().matches(phoneRegExp, 'enter a valid phone number').required("mobile number is required *")
})


 export const otpForm = Yup.object({
    otp :Yup.string().matches(otpRegex , 'invalid ! Otp').required("please enter the Otp")
})  

export const personalInfo = Yup.object({
    fullName :Yup.string().matches(nameregex , "invalid ! Input").required("full_Name is required *"),
    email :Yup.string().matches(emailregex, 'Invalid format !').required("email is required *"),
    dob :Yup.date().required("dob is required *"),
    age :Yup.string().required("age is required *")
})  

export const InComeValid = Yup.object({
    Income : Yup.string().required("Income is required *")
})
export const PincodeRegex = Yup.object({
    Pincode :Yup.string().matches(pincodeRgex, 'Invalid format !').required("pincode is required *"),
})
export const Cityvalidate = Yup.object().shape({
    currentCity:Yup.string().required("please select the city")
})
export const Gendervalidate = Yup.object().shape({
    gender:Yup.string().required("please select the gender")
})
export const Propertyvalidate = Yup.object().shape({
    propertyBasedCity:Yup.string().required("please select the city")
})
export const AboutPropertyValidate = Yup.object().shape({
    aboutProperty:Yup.string().required("please select the property")
})
export const HomeValidate = Yup.object({
    costofplot:Yup.string().required("please select the price")
})
export const ExistBankValidate = Yup.object({
    existbankLoan:Yup.string().required("please type the bank name")
})
export const DateValidate = Yup.object({
    whenDidYouBegin:Yup.date().required("please select the date")
})

