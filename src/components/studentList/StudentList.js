import React from 'react';

import StudentCard from '../studentCard/StudentCard';


export default function StudentList({ studentData }) {

    console.log('<StudentList /> is rendered');
        
    return (
        <div className='studentList'>
            {studentData.map((student) => <StudentCard key={student.id} student={student} />)}
        </div>
    );
};
