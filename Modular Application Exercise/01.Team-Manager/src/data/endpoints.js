const BASE_URL_Data = 'http://localhost:3030/data';
const BASE_URL_User = 'http://localhost:3030/users';

export const endpoints = {
    allTeams:BASE_URL_Data + '/teams',
    allMembers:BASE_URL_Data + '/members',
    specificTeam:teamId => BASE_URL_Data + `/teams/${teamId}`,
    register:BASE_URL_User + '/register',
    login:BASE_URL_User+ '/login',
    logout:BASE_URL_User + '/logout'

}

