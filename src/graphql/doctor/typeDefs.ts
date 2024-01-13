export const typeDefs = `#graphql

    type DoctorHospital{
        id:ID
        doctor_id:ID
        hospital_id:ID
    }
    type Doctor{
        id: ID
        first_name: String
        last_name: String
        email: String
        phone_number: String
        gender: String
        password: String
        is_verified: Boolean
        doctorHospitals:[DoctorHospital]
    }
    type DoctorReturn{
        token:String
        email:String
    }
    input DoctorInput {
        first_name: String!
        last_name: String!
        email: String!
        phone_number: String!
        gender: String!
        password: String!
    }
    input DoctorInputUpdate {
        first_name: String
        last_name: String
        email: String
        phone_number: String
        gender: String
        password: String
        is_verified: Boolean
    }
`;
