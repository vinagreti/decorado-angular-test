import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemUserService implements InMemoryDbService {
    createDb() {
        let users = [
        { id: '1', name: 'Windstorm', isAdmin: true },
        { id: '2', name: 'Bombasto', isAdmin: false },
        { id: '3', name: 'Magneta', isAdmin: false },
        { id: '4', name: 'Tornado', isAdmin: false }
        ];
        return {users};
    }
}
