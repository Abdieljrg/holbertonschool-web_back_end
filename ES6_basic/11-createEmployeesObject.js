// Export default function createEmployeesObject
export default function createEmployeesObject(departmentName, employees) {

    return {
      [departmentName]: employees,
    };
  }