<?php

namespace App\Services;

use App\Models\Task;

class TaskService
{
    public function getAllTasks()
    {
        return Task::all();
    }

    public function createTask($data)
    {
        return Task::create($data);
    }

    public function getTaskById($id)
    {
        return Task::find($id);
    }

    public function updateTask($id, $data)
    {
        $task = Task::find($id);
        $task->update($data);
        return $task;
    }

    public function deleteTask($id)
    {
        return Task::destroy($id);
    }
}
