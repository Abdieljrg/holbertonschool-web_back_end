export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateName(name);
    this._length = HolbertonCourse._validateLength(length);
    this._students = HolbertonCourse._validateStudents(students);
  }

  // Getter & setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse._validateName(newName);
  }

  // Getter & setter for lenght
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse._validateLength(newLength);
  }

  // Geter & setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse._validateStudents(newStudents);
  }

  // Validation
  static _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return name;
  }

  static _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return length;
  }

  static _validateStudents(students) {
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
