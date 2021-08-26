<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\repositories\TaskRepository;
use App\Http\Controllers\API\Validator;

class TasksController extends Controller
{
    public $taskRepository;

    public function __construct(TaskRepository $taskRepository){
        $this->taskRepository = $taskRepository;
    }
    
    public function index(){

        $tasks = $this->taskRepository->getAll();

        return response()->json([
            'success' => true,
            'message' => 'Task List',
            'data' => $tasks
        ]);
    }

    public function show($id){
        
        $tasks = $this->taskRepository->findById($id);

        if(is_null($tasks)){
            return response()->json([
                'success' => false,
                'message' => 'Task not found',
                'data' => null
            ]);
        }

        return response()->json([
            'success' => true,
            'message' => 'Task Details',
            'data' => $tasks
        ]);
    }

    public function store(Request $request){
        
        $formData = $request->all();

        $validator = \Validator::make($formData, [
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required'
        ], [
            'name.required' => 'Please give project name',
            'description.required' => 'Please give project description'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        $tasks = $this->taskRepository->create($request);

        return response()->json([
            'success' => true,
            'message' => 'Task Stored',
            'data' => $tasks
        ]);
    }

    public function update(Request $request, $id){
        
        $task = $this->taskRepository->findById($id);

        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Task not found',
                'data' => null
            ]);
        }
        
        $formData = $request->all();

        $validator = \Validator::make($formData, [
            'name' => 'required',
            'description' => 'required',
            'project_id' => 'required'
        ], [
            'name.required' => 'Please give project name',
            'description.required' => 'Please give project description'
        ]);

        if($validator->fails()){
            return response()->json([
                'success' => false,
                'message' => $validator->getMessageBag()->first(),
                'errors' => $validator->getMessageBag()
            ]);
        }

        $tasks = $this->taskRepository->edit($request, $id);

        return response()->json([
            'success' => true,
            'message' => 'Task Updated',
            'data' => $tasks
        ]);
    }

    public function destroy($id){
        
        $task = $this->taskRepository->findById($id);

        if(is_null($task)){
            return response()->json([
                'success' => false,
                'message' => 'Task not found',
                'data' => null
            ]);
        }
        
        $tasks = $this->taskRepository->delete($id);

        return response()->json([
            'success' => true,
            'message' => 'Task Deleted',
            'data' => $tasks
        ]);
    }
}


