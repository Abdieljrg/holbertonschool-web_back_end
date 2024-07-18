// Export default function createReportObject
export default function createReportObject(employeesList) {
    // Return an object with allEmployees and getNumberOfDepartments
    return {
      allEmployees: {
        ...employeesList,
      },
      getNumberOfDepartments() {
        // Return number of departments
        return Object.keys(this.allEmployees).length;
      },
    };
  }