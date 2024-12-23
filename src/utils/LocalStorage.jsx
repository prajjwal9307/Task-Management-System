
const employees = [
    {
      "id": 1,
      "firstName":"Arjune",
      "email": "e@e.com",
      "password": "123",
      "taskCounts":{
        "active":2,
        "newTask":1,
        "completed":1,
        "failed":0
      },
      "tasks": [
        {
          "taskTitle": "Complete Monthly Report",
          "taskDescription": "Prepare and submit the financial report for November.",
          "taskDate": "2024-12-25",
          "category": "Finance",
          "active": false,
          "newTask": true,
          "complete": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting Preparation",
          "taskDescription": "Create an agenda for the upcoming team meeting.",
          "taskDate": "2024-12-22",
          "category": "Management",
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false
        },
        {
          "taskTitle": "Client Follow-Up",
          "taskDescription": "Follow up with Client ABC regarding the project updates.",
          "taskDate": "2024-12-23",
          "category": "Client Relations",
          "active": true,
          "newTask": false,
          "complete": true,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "firstName":"Ram",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts":{
        "active":2,
        "newTask":1,
        "completed":1,
        "failed":0
      },
      "tasks": [
        {
          "taskTitle": "Product Launch Prep",
          "taskDescription": "Coordinate with the marketing team for product launch activities.",
          "taskDate": "2024-12-28",
          "category": "Marketing",
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false
        },
        {
          "taskTitle": "Inventory Check",
          "taskDescription": "Verify stock levels for the upcoming holiday sales.",
          "taskDate": "2024-12-21",
          "category": "Operations",
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false
        },
        {
          "taskTitle": "Training Session",
          "taskDescription": "Prepare materials for employee onboarding training.",
          "taskDate": "2024-12-30",
          "category": "HR",
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "firstName":"Gita",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts":{
        "active":2,
        "newTask":1,
        "completed":3,
        "failed":2
      },
      "tasks": [
        {
          "taskTitle": "System Audit",
          "taskDescription": "Conduct a comprehensive audit of IT systems.",
          "taskDate": "2024-12-26",
          "category": "IT",
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false
        },
        {
          "taskTitle": "Data Backup",
          "taskDescription": "Ensure all critical data is backed up before year-end.",
          "taskDate": "2024-12-24",
          "category": "IT",
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false
        },
        {
          "taskTitle": "Security Training",
          "taskDescription": "Organize a cybersecurity awareness session for staff.",
          "taskDate": "2024-12-29",
          "category": "Training",
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "firstName":"lashamn",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts":{
        "active":2,
        "newTask":2,
        "completed":4,
        "failed":1
      },
      "tasks": [
        {
          "taskTitle": "Prepare Presentation",
          "taskDescription": "Create a presentation for the upcoming stakeholder meeting.",
          "taskDate": "2024-12-22",
          "category": "Management",
          "active": true,
          "newTask": false,
          "complete": false,
          "failed": false
        },
        {
          "taskTitle": "Policy Review",
          "taskDescription": "Review the company's updated HR policies.",
          "taskDate": "2024-12-23",
          "category": "HR",
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false
        },
        {
          "taskTitle": "Holiday Schedule",
          "taskDescription": "Coordinate holiday schedules for the team.",
          "taskDate": "2024-12-24",
          "category": "Operations",
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "firstName":"Kajal",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts":{
        "active":2,
        "newTask":1,
        "completed":1,
        "failed":0
      },
      "tasks": [
        {
          "taskTitle": "Market Research",
          "taskDescription": "Conduct research on competitors' new products.",
          "taskDate": "2024-12-27",
          "category": "Research",
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false
        },
        {
          "taskTitle": "Customer Survey",
          "taskDescription": "Distribute and analyze the results of the customer satisfaction survey.",
          "taskDate": "2024-12-25",
          "category": "Customer Relations",
          "active": false,
          "newTask": false,
          "complete": true,
          "failed": false
        },
        {
          "taskTitle": "Product Testing",
          "taskDescription": "Test the prototype of the new product line.",
          "taskDate": "2024-12-30",
          "category": "Quality Assurance",
          "active": true,
          "newTask": true,
          "complete": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  
  export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
  }

