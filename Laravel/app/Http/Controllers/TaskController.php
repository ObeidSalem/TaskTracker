<?php

namespace App\Http\Controllers;

use App\Http\Middleware\PreventRequestsDuringMaintenance;
use App\Services\TaskService;
use App\Repositories\TaskRepository;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    private $taskService;
    private $taskRepository;

    public function __construct(TaskService $taskService, TaskRepository $taskRepository)
    {
        $this->taskService = $taskService;
        $this->taskRepository = $taskRepository;
    }

    public function index()
    {
        return $this->taskService->getAllTasks();
    }

    public function store(Request $request)
    {
        $request->validate([
            'task' => 'required',
            'reminder' => 'required',
        ]);
        return $this->taskService->createTask($request->all());
    }

    public function show($id)
    {
        return $this->taskService->getTaskById($id);
    }

    public function update(Request $request, $id)
    {
        return $this->taskService->updateTask($id, $request->all());
    }

    public function destroy($id)
    {
        return $this->taskService->deleteTask($id);
    }
}

