
/* Introduction to Constructing JavaScript Classess */

class HospitalEmployee { // Parent Class.
  constructor(name) { // 1 Property (name) - 1 argument.
    this._name = name; // Instance
    this._remainingVacationDays = 20; // Instance
  }
  
  static generatePassword() { // Static Method (Its not associated with HospitalEmplyee Instances, it is called directly)
    return Math.floor(Math.random() * 10001);
  } // we can only access generatePassword() by appending it to the HospitalEmployee class as shown below

  get name() {
    return this._name;
  } // Getter
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  } // Getter
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff; // This deducts daysOff from remainingVacationDays & saves the result to remainingVacationDays.
  } // Method
}

class Nurse extends HospitalEmployee { // Child Class.
  constructor(name, certifications) {
    super(name); // This calls the parent attributes (Getters, setters, properties & mathod) for the name property.
    this._certifications = certifications; // Adds the certification property to the child (Nurse) class.
  }

  get certifications() {
    return this._certifications;
  } // Getter (for the newly added property).

  addCertification(newCertification) {
    this._certifications.push(newCertification);
  } // Method to push the newly added certification into the certifications array.
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']); // Creates an instance of the Nurse class and save it to a variable nurseOlynyk.

nurseOlynyk.takeVacationDays(5); // This Method calls the takeVcactionDays on nurseOlynyk.
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics'); // This Method calls the addCertifcation on nurseOlynyk.
console.log(nurseOlynyk.certifications);

class Doctor extends HospitalEmployee {
  constructor(name, insurance, qualifications) {
    super(name);
    this._insurance = insurance;
    this._qualifications = qualifications;
  } 
  
  get insurance() {
    return this._insurance;
  }
  get qualification() {
    return this._qualifications;
  }
  
  addinsurance(newInsurance) {
    this.insurance.push(newInsurance);
  }

  addqualifications(Qualification) {
    this.qualifications.push(Qualification);
  }
}

const docIbrahim = new Doctor('Ibrahim', 'Stanbic IBTC', ['MBBS', 'Msc Public Health', 'GMC License']); 
// Creates an instance of the Doctor class and save it to variable docIbrahim.

docIbrahim.takeVacationDays(10);
console.log(docIbrahim.remainingVacationDays);
console.log(docIbrahim.insurance);
console.log(docIbrahim.qualification);

console.log(HospitalEmployee.generatePassword()) // This generates password 




