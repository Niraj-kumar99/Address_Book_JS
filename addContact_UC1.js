const prompt = require('Prompt-sync')();

class Contact_info {
    firstName;
    lastName;
    address;
    city;
    state;
    pinCode;
    phoneNumber;
    emailID;

    // Constructor
    Contact_info(firstName , lastName , address ,  city , state , pinCode , phoneNumber , emailID)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.pinCode = pinCode;
        this.phoneNumber = phoneNumber;
        this.emailID = emailID;
    }
     Contact_info() {

    }
    
    getFirstName() {
        return firstName;
    }

    setFirstName(firstName) {
        const firstName_Regex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (firstName_Regex.test(firstName))
            this._firstName = firstName;
        else
            throw 'Invalid First Name';
    }

    getLastName() {
        return lastName;
    }

    setLastName(lastName) {
        const lastName_Regex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (lastName_Regex.test(lastName)) {
            this._lastName = this.lastName;
        } else {
            throw 'Invalid Last Name'
        }
    }

    getAddress() {
        return address;
    }

    setAddress(address) {
        const addrss_Regex = RegExp("[A-Za-z]{4,}$")
        if (addrss_Regex.test(address)) {
            this.address = this.address;
        } else {
            throw 'Invalid Address';
        }
    }

    getCity() {
        return city;
    }

    setCity(city) {
        const cityRegex = RegExp("[A-Za-z]{4,}$")
        if (cityRegex.test(city)) {
            this.city = city;
        } else {
            throw 'Invalid city';
        }
    }

    getState() {
        return state;
    }

    setState(state) {
        const stateRegex = RegExp("[A-Za-z]{4,}$")
        if (stateRegex.test(state)) {
            this.state = state;
        } else {
            throw 'Invalid State';
        }
    }

    getPinCode() {
        return pinCode;
    }

    setPinCode(pinCode) {
        const pin_Regex = RegExp('^\d{5}(?:[-\s]\d{4})?$');
        if (pin_Regex.test(pinCode)) {
            this.pinCode = pinCode;
        } else {
            throw 'Invalid Pin Code';
        }
    }

    getPhoneNumber() {
        return phoneNumber;
    }

    setPhoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp('((91){1})[ ]([98765]{1})([0-9]{9})$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this.phoneNumber = this.phoneNumber;
        } else {
            throw 'invalid Phone Number';
        }
    }

    getEmailID() {
        return emailID;
    }

    setEmailID( emailID) {
        const emailID_Regex = RegExp('^([a-z0-9\_\.\-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$');
        if (emailID_Regex.test(emailID)) {
            this.emailID = this.emailID;
        } else {
            throw 'Invalid email';
        }
    }
}
console.log("Adding contact .....")
function addContact() {
    let firstName = prompt("Enter First Name : ");
    let lastName = prompt("Enter Last Name : ");
    let address = prompt("Enter Address : ");
    let city = prompt("Enter City : ");
    let state = prompt("Enter State : ");
    let pinCode = prompt("Enter Pin Code : ");
    let phoneNumber = prompt("Enter Phone Number : ");
    let emailID = prompt("Enter Email ID : ");
}

// Calling addContact Function
addContact();