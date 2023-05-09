
interface iTaskService {
    getTask(taskId: string):Promise<any>;
}

class TaskService implements iTaskService {

    async getTask(taskId: string){

    }
}


// interface iTaskRepo {
//     get
// }