<?php

namespace App\Repositories;

use App\Models\Task;

class TaskRepository
{
    public function getAll()
    {
        return Task::all();
    }

    public function create($data)
    {
        return Task::create($data);
    }

    public function getById($id)
    {
        return Task::find($id);
    }

    public function update($id, $data)
    {
        $task = Task::find($id);
        $task->update($data);
        return $task;
    }

    public function delete($id)
    {
        return Task::destroy($id);
    }
}
