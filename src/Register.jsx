import Card from "./components/Card";
import UserList from "./components/Userlist";
const Register = () => {
  
 
   
  const users = [
    {
      name: "Rahul Thakur",
      city: "Kolkata",
      age: 23,
      profession: "Software Engineer",
      profilePhoto: "https://picsum.photos/300/200",
    },
    {
      name: "Ananya Roy",
      city: "Mumbai",
      age: 28,
      profession: "Graphic Designer",
      profilePhoto: "https://picsum.photos/300/200",
    },
    {
      name: "Arjun Mehta",
      city: "Bangalore",
      age: 25,
      profession: "Data Analyst",
      profilePhoto: "https://picsum.photos/300/200",
    },
    {
      name: "Priya Sharma",
      city: "Delhi",
      age: 30,
      profession: "Digital Marketer",
      profilePhoto: "https://picsum.photos/300/200",
    },
    {
      name: "Karan Singh",
      city: "Chennai",
      age: 27,
      profession: "Product Manager",
      profilePhoto: "https://picsum.photos/300/200",
    },
  ];

  return (
    <>
      
      
     
      {users.map(function (e, index) {
        return (
          <Card
            key={index}
            name={e.name}
            age={e.age}
            city={e.city}
            profession={e.profession}
            profilePhoto={e.profilePhoto}
          />
        );
      })}
      <hr></hr>

     <h1>List of users fetched from a REST API.</h1>
      <UserList/>
    </>
  );
};

export default Register;
