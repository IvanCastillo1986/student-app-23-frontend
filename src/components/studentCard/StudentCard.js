import React from 'react';



export default function StudentCard({ student }) {

    const { email, company, firstName, lastName, pic, grades, id, skill } = student;

    const numericGrades = grades.map(grade => Number(grade));

    const total = numericGrades.reduce((prev, curr) => {
        return prev + curr;
    }, 0);

    const average = total / numericGrades.length;

    console.log(`<StudentCard /> rendered name = ${firstName}`)
    return (
        <div className='studentCard'>
    
            <img src={pic} alt={`${firstName} ${lastName}`} />
            <h1>{firstName} {lastName}</h1>
            <ul>
                <li>Email: {email}</li>
                <li>Company: {company}</li>
                <li>Skill: {skill}</li>
                <li>Average: {average}</li>
            </ul>
        </div>
    );
};
