import React, { useState } from "react";
import Table from "../components/table";

// const rows = [
//   createData("1", "Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("2", "Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("3", "Eclair", 262, 16.0, 24, 6.0),
//   createData("4", "Cupcake", 305, 3.7, 67, 4.3),
//   createData("5", "Gingerbread", 356, 16.0, 49, 3.9),
//   createData("6", "Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("7", "Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("8", "Eclair", 262, 16.0, 24, 6.0),
//   createData("9", "Cupcake", 305, 3.7, 67, 4.3),
//   createData("10", "Gingerbread", 356, 16.0, 49, 3.9)
// ];

// function createData(
//   id: string,
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number
// ) {
//   return { id, name, calories, fat, carbs, protein };
// }

const USERS_LIST = [
  {
    id: "1",
    name: "Talha Khalid",
    email: "talha.khalid@greenlightlabs.tech",
    contact: "03040438807",
    address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  },
  {
    id: "2",
    name: "Talha Khalid",
    email: "talha.khalid@greenlightlabs.tech",
    contact: "03040438807",
    address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  }
  // {
  //   id: "3",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "4",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "5",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "6",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "7",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "8",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "9",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "10",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "11",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "12",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "13",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "14",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "15",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "16",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "17",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "18",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "19",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // },
  // {
  //   id: "20",
  //   name: "Talha Khalid",
  //   email: "talha.khalid@greenlightlabs.tech",
  //   contact: "03040438807",
  //   address: "House no. LS-5, Sector W2, Gulshan-e-Maymar, Karachi"
  // }
];

const fields = [
  { key: "id", label: "ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "contact", label: "Contact" },
  { key: "address", label: "Address" },
  { key: "action", label: "Action" }
  // {
  //   key: 'show_details',
  //   label: '',
  //   _style: { width: '1%' },
  //   sorter: false,
  //   filter: false
  // }
];

const User = () => {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const handleClick = () => {
    alert("Button Clicked");
  };

  return (
    <div>
      <h1>Users</h1>
      <Table
        headings={["ID", "Full Name", "Email", "Contact Number"]}
        fields={fields}
        data={USERS_LIST}
        page={page}
        setPage={setPage}
        perPage={perPage}
        setPerPage={setPerPage}
        scopedSlots={{
          action: () => <button onClick={handleClick}>Click me!</button>
          // reaction: () => <button onClick={handleClick}>Click me!</button>,
        }}
      />
    </div>
  );
};

export default User;
