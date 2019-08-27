export const config = {
    apiUrl: 'https://studysite.azurewebsites.net/service',
    routes: [
        { role: 'Admin', home: '/admin', accessTo: '' },
        { role: 'Teacher', home: '/teacher', accessTo: '' },
        { role: 'Student', home: '/student', accessTo: '' }
    ]
};
